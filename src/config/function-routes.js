const { Map } = require('immutable');
const enviroments = require('dotenv');
const moment = require('moment');
const { totp, generateSecret } = require('speakeasy');
const qrcode = require('qrcode');

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

enviroments.config();
const env = process && process.env;
const limitToken = JSON.parse(env.LIMIT_TOKEN);

const { POST, GET, DELETE } = httpMethod;

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

        const extended =
          (dataSource &&
            dataSource[fromData.postBody] &&
            dataSource[fromData.postBody].extended) ||
          '';

        if (user && pass && rpc && limitToken) {
          const { MIN, MAX } = limitToken;
          const momentInstance = moment();
          const momentUnix = momentInstance.unix();
          const momentWithDays = momentInstance
            .add(extended ? MAX : MIN, 'days')
            .unix();

          let token;
          const connectOpennebula = opennebulaConnect(user, pass, rpc);

          const getUserInfo = userData => {
            if (user && token && userData && userData.USER) {
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
              const dataJWT = { id, user, token };
              const jwt = createToken(dataJWT, momentUnix, momentWithDays);
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

          // add expire time unix
          const dataSourceWithExpirateDate = Map(dataSource).toObject();
          dataSourceWithExpirateDate[fromData.postBody].expire = momentWithDays;

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
  twofactorsetup: {
    httpMethod: POST,
    action: (req, res, next) => {
      const secret = generateSecret({ length: 10 });
      if (secret && secret.otpauth_url && secret.base32) {
        const { otpauth_url: otpURL, base32 } = secret;
        qrcode.toDataURL(otpURL, (err, dataURL) => {
          /*
            // con el err se puede validar problemas para generar el QR
            // save to template USER
            user.twofactor = {
              secret: '',
              tempSecret: base32,
              dataURL,
              otpURL
            };
          */
          const codeOK = Map(ok).toObject();
          codeOK.data = {
            message: 'Verify OTP',
            tempSecret: base32,
            dataURL,
            otpURL
          };
          res.locals.httpCode = codeOK;
        });
      }
      next();
    }
  },
  twofactorverify: {
    httpMethod: POST,
    action: (req, res, next) => {
      const verified = totp.verify({
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
