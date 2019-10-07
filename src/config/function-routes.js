const { Map } = require('immutable');
const enviroments = require('dotenv');
const moment = require('moment');
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');

const {
  httpMethod,
  defaultNamespace,
  defaultMethodLogin,
  defaultMethodUserInfo,
  defaultMethodUserUpdate
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
  checkOpennebulaCommand,
  paramsDefaultByCommandOpennebula
} = require('../utils/opennebula-functions');

enviroments.config();
const env = process && process.env;
const limitToken = JSON.parse(env.LIMIT_TOKEN);
const namespace = env.namespace || defaultNamespace;

const { POST, GET, DELETE } = httpMethod;

const privateRoutes = {
  '2fsetup': {
    httpMethod: POST,
    action: (dataSource, res, next, connect, userId) => {
      const secret = speakeasy.generateSecret({ length: 10 });
      if (secret && secret.otpauth_url && secret.base32) {
        const { otpauth_url: otpURL, base32 } = secret;
        qrcode.toDataURL(otpURL, (err, dataURL) => {
          if (err) {
            res.locals.httpCode = Map(internalServerError).toObject();
            next();
          } else {
            const connectOpennebula = connect();
            const dataUser = Map(dataSource).toObject();
            dataUser[fromData.resource].id = userId;
            dataUser[
              fromData.postBody
            ].template = `SUNSTONE=[TWO_FACTOR_AUTH_SECRET=${base32}]`;

            const getOpennebulaMethod = checkOpennebulaCommand(
              defaultMethodUserUpdate,
              POST
            );
            connectOpennebula(
              defaultMethodUserUpdate,
              getOpennebulaMethod(dataUser),
              (err, value) => {
                responseOpennebula(
                  () => undefined,
                  err,
                  value,
                  pass => {
                    if (pass !== undefined && pass !== null) {
                      const codeOK = Map(ok).toObject();
                      codeOK.data = {
                        img: dataURL
                      };
                      res.locals.httpCode = codeOK;
                      next();
                    } else {
                      next();
                    }
                  },
                  next
                );
              }
            );
          }
        });
      } else {
        next();
      }
    }
  },
  '2fverify': {
    httpMethod: POST,
    action: (req, res, next, connect, userId) => {
      const verified = speakeasy.totp.verify({
        // secret: user.twofactor.tempSecret, // secret of the logged in user in user template
        encoding: 'base32',
        token: req.body.token
      });

      if (verified) {
        // user.twofactor.secret = user.twofactor.tempSecret; // set secret, confirmated 2fa (need save in user template)
        res.locals.httpCode = Map(ok).toObject();
        next();
      }
      res.locals.httpCode = Map(unauthorized).toObject();
      next();
    }
  },
  twofactordelete: {
    httpMethod: DELETE,
    action: (req, res, next) => {
      next();
      console.log('twofactordelete');
    }
  }
};

const publicRoutes = {
  auth: {
    httpMethod: POST,
    action: (dataSource, res, next, connect) => {
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

        const token =
          (dataSource &&
            dataSource[fromData.postBody] &&
            dataSource[fromData.postBody].token) ||
          '';

        const extended =
          (dataSource &&
            dataSource[fromData.postBody] &&
            dataSource[fromData.postBody].extended) ||
          '';

        if (user && pass && connect && limitToken) {
          const { MIN, MAX } = limitToken;

          const now = moment();
          const nowUnix = now.unix();
          const nowWithDays = moment().add(extended ? MAX : MIN, 'days');
          const relativeTime = nowWithDays.diff(now, 'seconds');

          let opennebulaToken;
          const connectOpennebula = connect(
            user,
            pass
          );
          const dataSourceWithExpirateDate = Map(dataSource).toObject();

          const getUserInfo = userData => {
            if (user && opennebulaToken && userData && userData.USER) {
              const informationUser = userData.USER;

              // remove opennebula user tokens
              if (
                informationUser.LOGIN_TOKEN &&
                Array.isArray(informationUser.LOGIN_TOKEN)
              ) {
                informationUser.LOGIN_TOKEN.map(loginToken => {
                  if (
                    loginToken &&
                    loginToken.TOKEN &&
                    loginToken.TOKEN !== opennebulaToken
                  ) {
                    dataSourceWithExpirateDate[fromData.postBody].expire = 0;
                    dataSourceWithExpirateDate[fromData.postBody].token =
                      loginToken.TOKEN;

                    connectOpennebula(
                      defaultMethodLogin,
                      getOpennebulaMethod(dataSourceWithExpirateDate),
                      (err, value) => {
                        responseOpennebula(
                          () => undefined,
                          err,
                          value,
                          () => undefined,
                          next
                        );
                      }
                    );
                  }
                });
              }

              // validate 2fa token
              if (
                informationUser.TEMPLATE &&
                informationUser.TEMPLATE.SUNSTONE &&
                informationUser.TEMPLATE.SUNSTONE.TWO_FACTOR_AUTH_SECRET
              ) {
                const secret =
                  informationUser.TEMPLATE.SUNSTONE.TWO_FACTOR_AUTH_SECRET;
                const verified = speakeasy.totp.verify({
                  secret,
                  encoding: 'base32',
                  token
                });
                if (!verified) {
                  const codeUnauthorized = Map(unauthorized).toObject();
                  codeUnauthorized.data = { message: 'invalid 2fa token' };
                  updaterResponse(codeUnauthorized);
                  next();
                }
              }

              // generate jwt
              const { ID: id } = informationUser;
              const dataJWT = { id, user, token: opennebulaToken };
              const jwt = createToken(
                dataJWT,
                nowUnix,
                nowWithDays.format('X')
              );
              if (jwt) {
                const codeOK = Map(ok).toObject();
                codeOK.data = { token: jwt };
                updaterResponse(codeOK);
              }
              next();
            } else {
              next();
            }
          };

          const authenticated = val => {
            const findTextError = `[${namespace + defaultMethodLogin}]`;
            if (val) {
              if (val.indexOf(findTextError) >= 0) {
                const codeUnauthorized = Map(unauthorized).toObject();
                updaterResponse(codeUnauthorized);
                next();
              } else {
                opennebulaToken = val;
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
              }
            } else {
              next();
            }
          };

          // add expire time unix for opennebula creation token
          dataSourceWithExpirateDate[fromData.postBody].expire = relativeTime;

          connectOpennebula(
            defaultMethodLogin,
            getOpennebulaMethod(dataSourceWithExpirateDate),
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
