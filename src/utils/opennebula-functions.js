const upcast = require('upcast');
const url = require('url');
const rpc = require('xmlrpc');
const xml2js = require('xml2js');
const { Map } = require('immutable');
const { sprintf } = require('sprintf-js');
const httpCodes = require('../config/http-codes');
const { commandsParams, from } = require('../config/commands-params');
const {
  defaultNamespace,
  defaultMessageProblemOpennebula
} = require('../config/defaults');

// user config
const { getConfig } = require('./yml-connect');

const appConfig = getConfig();
const namespace = appConfig.namespace || defaultNamespace;

const opennebulaConnect = (username = '', password = '', path = '') => {
  let rtn = () => null;
  if (username && password && path) {
    let xmlClient = null;
    const parsedHostname = url.parse(path);
    const protocol = parsedHostname.protocol;
    if (protocol === 'https:') {
      xmlClient = rpc.createSecureClient(path);
    } else {
      xmlClient = rpc.createClient(path);
    }
    if (xmlClient && xmlClient.methodCall) {
      rtn = (action = '', parameters = [], callback = () => undefined) => {
        if (action && parameters && Array.isArray(parameters) && callback) {
          const xmlParameters = [`${username}:${password}`, ...parameters];
          xmlClient.methodCall(
            namespace + action,
            xmlParameters,
            (err, value) => {
              if (!(err || (value && !value[0]))) {
                const messageCall = value[1];
                if (typeof messageCall === 'string' && messageCall.length > 0) {
                  xml2js.parseString(
                    messageCall,
                    {
                      explicitArray: false,
                      trim: true,
                      normalize: true,
                      includeWhiteChars: true,
                      strict: false
                    },
                    (error, result) => {
                      if (error) {
                        callback(error, undefined); // error parse xml
                        return;
                      }
                      callback(
                        undefined,
                        error === null && result === null ? messageCall : result
                      ); // success
                    }
                  );
                  return;
                }
              }
              callback(err, value && value[1]); // error call opennebula
            }
          );
        }
      };
    }
  }
  return rtn;
};

const responseOpennebula = (res, err, value, response, next) => {
  if (err && res && typeof res === 'function') {
    const { internalServerError } = httpCodes;
    const codeError = Map(internalServerError).toObject();
    codeError.message += `: ${defaultMessageProblemOpennebula}`;
    res(codeError);
    next();
  } else if (typeof response === 'function') {
    response(value);
  }
};

const getMethodForOpennebulaCommand = () => {
  const rtn = [];
  if (commandsParams) {
    const commands = Object.keys(commandsParams);
    commands.map(command => {
      if (command && command.length) {
        const commandString = command.split('.');
        if (!rtn.includes(commandString[1])) {
          rtn.push(commandString[1]);
        }
      }
    });
  }
  return rtn;
};

const commandXML = (resource = '', method = '', defaultMethod = '') => {
  const allowedActions = getMethodForOpennebulaCommand();
  let command = `${resource}`;
  const commandWithDefault = defaultMethod
    ? `${command}.${defaultMethod}`
    : command;
  if (typeof method === 'string' && method !== 'action') {
    command = allowedActions.includes(method)
      ? `${command}.${method}`
      : commandWithDefault;
  }
  return command;
};

const getAllowedQueryParams = () => {
  const rtn = [];
  const allowedQuerys = Object.keys(commandsParams);
  if (from && from.query) {
    const { query } = from;
    allowedQuerys.map(allowedQuery => {
      const command = commandsParams[allowedQuery];
      if (command && command.params) {
        const internalParams = Object.keys(command.params);
        internalParams.map(internalParam => {
          if (
            command.params[internalParam] &&
            command.params[internalParam].from &&
            command.params[internalParam].from === query &&
            !rtn.includes(internalParam)
          ) {
            rtn.push(internalParam);
          }
        });
      }
    });
  }
  return rtn;
};

const getRouteForOpennebulaCommand = () => {
  const rtn = [];
  if (commandsParams) {
    const commands = Object.keys(commandsParams);
    commands.map(command => {
      if (command && command.length) {
        const commandString = command.split('.');
        if (!rtn.includes(commandString[0])) {
          rtn.push(commandString[0]);
        }
      }
    });
  }
  return rtn;
};

const checkPositionInDataSource = dataSource => {
  let rtn = true;
  if (dataSource && from) {
    const fromKeys = Object.values(from);
    fromKeys.map(key => {
      if (!(key && dataSource && key in dataSource)) {
        rtn = false;
      }
    });
  }
  return rtn;
};

const checkOpennebulaCommand = (
  command = '',
  method = '',
  commandParams = true
) => {
  let rtn = false;
  if (command && method && commandsParams && from) {
    if (
      commandsParams &&
      commandsParams[command] &&
      commandsParams[command].params &&
      commandsParams[command].httpMethod &&
      commandsParams[command].httpMethod === method
    ) {
      rtn = commandParams
        ? dataSource => {
            let rtnParams = false;
            if (dataSource && checkPositionInDataSource(dataSource)) {
              const { params: paramsForCommand } = commandsParams[command];
              const internalParams = [];
              Object.keys(paramsForCommand).map(param => {
                const parameter = paramsForCommand[param];
                if (
                  'default' in parameter &&
                  'from' in parameter &&
                  parameter.from in dataSource &&
                  param in dataSource[parameter.from] &&
                  dataSource[parameter.from][param]
                ) {
                  internalParams.push(
                    upcast.to(
                      dataSource[parameter.from][param],
                      upcast.type(parameter.default)
                    )
                  );
                } else {
                  internalParams.push(parameter.default);
                }
              });
              if (internalParams) {
                rtnParams = internalParams;
              }
            }
            return rtnParams;
          }
        : commandsParams[command];
    }
  }
  return rtn;
};

const paramsDefaultByCommandOpennebula = (command = '', httpCode = '') => {
  const rtn = [];
  if (command && httpCode) {
    const getDefaultValues = checkOpennebulaCommand(command, httpCode, false);
    if (getDefaultValues && getDefaultValues.params) {
      const defaultParams = Object.keys(getDefaultValues.params);
      defaultParams.map(defaultParam => {
        if (
          getDefaultValues.params &&
          defaultParam &&
          getDefaultValues.params[defaultParam] &&
          'default' in getDefaultValues.params[defaultParam]
        ) {
          rtn.push(getDefaultValues.params[defaultParam].default);
        }
      });
    }
  }
  return rtn;
};

const generateNewTemplate = (
  current = {},
  addPositions = {},
  removePositions = [],
  wrapper = 'SUNSTONE=[%1$s]'
) => {
  const allPositions = { ...current, ...addPositions };
  const positions = Object.keys(allPositions);
  let rtn = '';
  positions.map(position => {
    if (position && allPositions[position]) {
      if (removePositions.includes(position)) {
        delete allPositions[position];
      }
    }
  });
  const newPositions = Object.keys(allPositions);
  newPositions.map(position => {
    rtn += `${rtn ? ', ' : ''}${position}=${allPositions[position]}`;
  });
  return sprintf(wrapper, rtn);
};

module.exports = {
  opennebulaConnect,
  responseOpennebula,
  getMethodForOpennebulaCommand,
  commandXML,
  getAllowedQueryParams,
  getRouteForOpennebulaCommand,
  checkPositionInDataSource,
  checkOpennebulaCommand,
  paramsDefaultByCommandOpennebula,
  generateNewTemplate
};
