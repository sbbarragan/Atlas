const enviroments = require('dotenv');
const jwt = require('jwt-simple');
const moment = require('moment');
const { messageTerminal } = require('../utils/general-functions');

enviroments.config();
const env = process && process.env;
const tokenSecret = env.TOKEN_SECRET || null;

const createToken = (
  { id: iss, user: aud, token: jti },
  iat = '',
  exp = ''
) => {
  let rtn = null;
  if (iss && aud && jti && iat && exp && tokenSecret) {
    const payload = {
      iss,
      aud,
      jti,
      iat,
      exp
    };
    rtn = jwt.encode(payload, tokenSecret);
  }
  return rtn;
};

const validateAuth = req => {
  let rtn = false;
  if (req && req.headers && req.headers.authorization) {
    const authorization = req.headers.authorization;
    const removeBearer = new RegExp('^Bearer ', 'i');
    const token = authorization.replace(removeBearer, '');
    try {
      const payload = jwt.decode(token, tokenSecret);
      if (
        payload &&
        'iss' in payload &&
        'aud' in payload &&
        'jti' in payload &&
        'iat' in payload &&
        'exp' in payload &&
        payload.exp >= moment().unix()
      ) {
        const { iss, aud, jti, iat, exp } = payload;
        rtn = {
          iss,
          aud,
          jti,
          iat,
          exp
        };
      }
    } catch (error) {
      const config = {
        color: 'red',
        type: 'ERROR',
        error,
        message: 'Error: %s'
      };
      messageTerminal(config);
    }
  }
  return rtn;
};

module.exports = {
  createToken,
  validateAuth
};
