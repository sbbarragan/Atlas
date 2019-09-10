const enviroments = require('dotenv');
const jwt = require('jwt-simple');
const moment = require('moment');

enviroments.config();
const env = process && process.env;
const tokenSecret = env.TOKEN_SECRET || null;

const createToken = ({ id, user, token }, start = '', expire = '') => {
  let rtn = null;
  if (start && expire && tokenSecret) {
    const payload = {
      id,
      user,
      token,
      start,
      expire
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
        'id' in payload &&
        'user' in payload &&
        'token' in payload &&
        'expire' in payload &&
        payload.expire >= moment().unix()
      ) {
        const { user, id, token, start } = payload;
        rtn = {
          id,
          user,
          token,
          start
        };
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  }
  return rtn;
};

module.exports = {
  createToken,
  validateAuth
};
