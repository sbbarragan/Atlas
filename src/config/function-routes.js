const { Map } = require('immutable');
const {
  httpMethod,
  defaultMethodLogin,
  defaultMethodUserInfo
} = require('./defaults');
const {
  ok,
  unauthorized,
  internalServerError
} = require('../config/http-codes');
const { from: fromData } = require('../config/commands-params');
const { createToken } = require('../utils/jwt-functions');
const {
  responseOpennebula,
  opennebulaConnect,
  checkOpennebulaCommand,
  paramsDefaultByCommandOpennebula
} = require('../utils/opennebula-functions');

const { POST, GET } = httpMethod;

const privateRoutes = {
  private: ''
};
const publicRoutes = {
  auth: {
    httpMethod: POST,
    action: (dataSource, res, next, rpc) => {
      const updaterResponse = code => {
        if (
          'id' in code &&
          'message' in code &&
          res &&
          res.locals &&
          res.locals.httpCode
        ) {
          res.locals.httpCode = code;
        }
      };
      updaterResponse(Map(internalServerError).toObject());

      const getOpennebulaMethod = checkOpennebulaCommand(
        defaultMethodLogin,
        POST
      );

      if (dataSource && getOpennebulaMethod) {
        const user =
          (dataSource &&
            fromData.postBody &&
            dataSource[fromData.postBody] &&
            dataSource[fromData.postBody].user) ||
          '';

        const pass =
          (dataSource &&
            fromData.postBody &&
            dataSource[fromData.postBody] &&
            dataSource[fromData.postBody].pass) ||
          '';
        if (user && pass && rpc) {
          let token;
          const connectOpennebula = opennebulaConnect(user, pass, rpc);

          const getUserInfo = userData => {
            if (user && token && userData && userData.USER) {
              if (userData && userData.USER) {
                const informationUser = userData.USER;

                if (
                  informationUser &&
                  informationUser.LOGIN_TOKEN &&
                  Array.isArray(informationUser.LOGIN_TOKEN)
                ) {
                  informationUser.LOGIN_TOKEN.map(loginToken => {
                    if (
                      loginToken &&
                      loginToken.TOKEN &&
                      loginToken.TOKEN !== token
                    ) {
                      // aca se debe de borrar los demas tokens generados no el que esta en la variable token
                      console.log('->', token, informationUser.LOGIN_TOKEN);
                      
                    }
                  });
                }

                const { ID: id } = informationUser;
                const dataJWT = { id };
                const jwt = createToken(dataJWT, false);
                res.locals.httpCode.data = {};
                if (jwt) {
                  const codeOK = Map(ok).toObject();
                  codeOK.data = { token: jwt };
                  updaterResponse(codeOK);
                  next();
                }
              } else {
                next();
              }
            } else {
              next();
            }
          };

          const authenticated = val => {
            if (val) {
              token = val;
              connectOpennebula(
                defaultMethodUserInfo,
                paramsDefaultByCommandOpennebula(defaultMethodUserInfo, GET),
                (err, value) => {
                  responseOpennebula(
                    updaterResponse,
                    err,
                    value,
                    getUserInfo,
                    next
                  );
                }
              );
            } else {
              next();
            }
          };

          // aca se puede hacer la valia para colocar el parametro post expire en 0 cuando no tenga JWT
          // tambien se tiene que colocar funcion que tome el tiempo de vida del JWT en segundos
          console.log(getOpennebulaMethod(dataSource));
          connectOpennebula(
            defaultMethodLogin,
            getOpennebulaMethod(dataSource),
            (err, value) => {
              responseOpennebula(
                updaterResponse,
                err,
                value,
                authenticated,
                next
              );
            }
          );
        } else {
          res.locals.httpCode = Map(unauthorized).toObject();
          next();
        }
      } else {
        next();
      }
    }
  },
  zendesk: {
    httpMethod: POST,
    action: (req, res, next) => {
      next();
      console.log('zendesk');
    }
  },
  latest: {
    httpMethod: POST,
    action: (req, res, next) => {
      next();
      console.log('latest version opennebula');
    }
  },
  zeromq: {
    httpMethod: GET,
    action: (req, res, next) => {
      next();
      console.log('zeromq');
    }
  },
  support: {
    httpMethod: POST,
    action: (req, res, next) => {
      next();
      console.log('support token');
    }
  }
};

const functionRoutes = {
  private: privateRoutes,
  public: publicRoutes
};

module.exports = functionRoutes;
