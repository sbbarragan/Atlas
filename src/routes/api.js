const express = require('express');
const { Map } = require('immutable');
const {
  private: authenticated,
  public: nonAuthenticated
} = require('../config/routes-api');
const params = require('../config/params');
const enviroments = require('dotenv');
const {
  opennebulaConnect,
  validateAuth,
  createParamsState,
  createQueriesState,
  checkRouteFunction,
  commandXML,
  checkOpennebulaCommand,
  getAllowedQueryParams,
  validateRouteFunction,
  responseOpennebula
} = require('../utils');
const {
  defaultOpennebulaZones,
  defaultMessageInvalidZone,
  defaultGetMethod,
  httpMethod: httpMethods
} = require('../config/defaults');

const httpCodes = require('../config/http-codes');
const { from: fromData } = require('../config/commands-params');

const router = express.Router();

express();

const defaultParams = Map(createParamsState());
const defaultQueries = Map(createQueriesState());

let paramsState = defaultParams.toObject();
let queriesState = defaultQueries.toObject();

enviroments.config();
const env = process && process.env;

const opennebulaZones =
  (env.OPENNEBULA_ZONES && JSON.parse(env.OPENNEBULA_ZONES)) ||
  defaultOpennebulaZones;

const clearStates = () => {
  paramsState = defaultParams.toObject();
  queriesState = defaultQueries.toObject();
};

const paramsToRoutes = () => {
  let rtn = '/:resource?';
  const keys = Object.keys(params);

  keys.map(param => {
    rtn += `/:${params[param]}?`;
  });
  return rtn;
};

const validateResource = (req, res, next) => {
  const { badRequest, unauthorized, serviceUnavailable } = httpCodes;
  let status = badRequest;
  if (req && req.params && req.params.resource) {
    const resource = req.params.resource;
    status = serviceUnavailable;
    if (authenticated.includes(resource)) {
      const session = validateAuth(req);
      if (session) {
        next();
        return;
      }
      status = unauthorized;
    }
    if (nonAuthenticated.includes(resource)) {
      next();
      return;
    }
  }
  res.status(status.id).json(status);
};

const optionalParameters = (req, res, next) => {
  if (req && req.params) {
    let start = true;
    const keys = Object.keys(req.params);
    keys.map(param => {
      if (start) {
        start = false;
        return start;
      }
      if (req.params[param]) {
        const matches = req.params[param].match(/(^[\w]*=)/gi);
        if (matches && matches[0]) {
          params.map(parameter => {
            if (
              matches[0].replace(/=/g, '').toLowerCase() ===
              parameter.toLowerCase()
            ) {
              const removeKey = new RegExp(`^${parameter}=`, 'i');
              if (paramsState[parameter] === null) {
                paramsState[parameter] = req.params[param].replace(
                  removeKey,
                  ''
                );
              }
            }
          });
        } else {
          paramsState[param] = req.params[param];
        }
      }
    });
  }
  next();
};

const optionalQueries = (req, res, next) => {
  if (req && req.query) {
    const keys = Object.keys(req.query);
    const queries = getAllowedQueryParams();
    keys.map(query => {
      if (req.query[query] && queries.includes(query)) {
        queriesState[query] = req.query[query];
      }
    });
  }
  next();
};

const getDataZone = () => {
  let rtn;
  if (opennebulaZones && Array.isArray(opennebulaZones)) {
    const { federation } = paramsState;
    rtn = opennebulaZones[0];
    if (federation !== null) {
      rtn = opennebulaZones.find(zone => {
        if (zone && zone.ID !== undefined) {
          return String(zone.ID) === federation;
        }
      });
    }
  }
  return rtn;
};

router.all(
  paramsToRoutes(),
  [validateResource, optionalParameters, optionalQueries],
  (req, res, next) => {
    const { internalServerError, ok, methodNotAllowed } = httpCodes;
    const { method: httpMethod } = req;
    res.locals.httpCode = Map(internalServerError).toObject();
    const zone = getDataZone();
    if (zone) {
      // USER y PASS tienen que venir del JWT (los posees en el middleware de auth variable session)
      const { RPC, USER, PASS } = zone;
      const connectOpennebula = opennebulaConnect(USER, PASS, RPC);
      const { resource } = req.params;
      const routeFunction = checkRouteFunction(resource);
      res.locals.httpCode = Map(methodNotAllowed).toObject();
      const dataSources = {
        [fromData.resource]: paramsState,
        [fromData.query]: queriesState,
        [fromData.postBody]: req.body
      };
      if (routeFunction !== undefined) {
        const valRouteFunction = validateRouteFunction(
          routeFunction,
          httpMethod
        );
        if (valRouteFunction) {
          valRouteFunction(dataSources, res, next, RPC);
        } else {
          next();
        }
      } else {
        const { method } = paramsState;
        const command = commandXML(
          resource,
          method,
          httpMethod === httpMethods.GET && defaultGetMethod
        );
        const getOpennebulaMethod = checkOpennebulaCommand(command, httpMethod);
        if (getOpennebulaMethod) {
          const response = val => {
            res.locals.httpCode = Map(ok).toObject();
            res.locals.httpCode.data = val || {};
            if (typeof val === 'string') {
              res.locals.httpCode.data = {};
              res.locals.httpCode.message = val;
            }
            next();
          };

          const updaterResponse = code => {
            if ('id' in code && 'message' in code) {
              res.locals.httpCode = code;
            }
          };

          connectOpennebula(
            command,
            getOpennebulaMethod(dataSources),
            (err, value) =>
              responseOpennebula(updaterResponse, err, value, response, next)
          );
        } else {
          next();
        }
      }
    } else {
      res.locals.httpCode.message += `: ${defaultMessageInvalidZone}`;
      next();
    }
  },
  (req, res) => {
    clearStates();
    const { httpCode } = res.locals;
    res.status(httpCode.id).json(httpCode);
  }
);

module.exports = router;
