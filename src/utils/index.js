const fs = require('fs-extra');
const colors = require('colors');
const params = require('../config/params');
const functionRoutes = require('../config/function-routes');
const { validateAuth } = require('./jwt-functions');
const {
  responseOpennebula,
  opennebulaConnect,
  getMethodForOpennebulaCommand,
  commandXML,
  getAllowedQueryParams,
  getRouteForOpennebulaCommand,
  checkOpennebulaCommand
} = require('./opennebula-functions');

const createParamsState = () => {
  const rtn = {};
  if (params && Array.isArray(params)) {
    params.map(param => {
      rtn[param] = null;
    });
  }
  return rtn;
};

const createQueriesState = () => {
  const rtn = {};
  const queries = getAllowedQueryParams();
  if (queries && Array.isArray(queries)) {
    queries.map(query => {
      rtn[query] = null;
    });
  }
  return rtn;
};

const includeJSbyHTML = (path = '') => {
  let scripts = '';
  fs.readdirSync(path).map(file => {
    if (file.match(/\w*\.js\b/gi)) {
      scripts += `<script src="/static/${file}"></script>`;
    }
  });
  return scripts;
};

const messageTerminal = ({ color, type, error, message }) => {
  const colorConsole = color || 'red';
  const typeConsole = type || '';
  const errorConsole = error || '';
  const messageConsole = message || 'Message Console ';
  const consoleColor =
    colorConsole === 'green'
      ? colors.green(messageConsole)
      : colors.red(messageConsole);
  console.log(consoleColor, typeConsole, errorConsole);
};

const validateRouteFunction = (routeFunction, httpMethod = '') => {
  let rtn;
  if (
    routeFunction &&
    routeFunction.httpMethod &&
    routeFunction.httpMethod === httpMethod &&
    routeFunction.action &&
    typeof routeFunction.action === 'function'
  ) {
    rtn = routeFunction.action;
  }
  return rtn;
};

const checkRouteFunction = route => {
  let rtn;
  const { private: functionPrivate, public: functionPublic } = functionRoutes;
  const functions = { ...functionPrivate, ...functionPublic };
  if (route in functions) {
    rtn = functions[route];
  }
  return rtn;
};

module.exports = {
  validateAuth,
  createParamsState,
  getAllowedQueryParams,
  createQueriesState,
  opennebulaConnect,
  includeJSbyHTML,
  messageTerminal,
  getRouteForOpennebulaCommand,
  getMethodForOpennebulaCommand,
  commandXML,
  checkRouteFunction,
  checkOpennebulaCommand,
  validateRouteFunction,
  responseOpennebula
};
