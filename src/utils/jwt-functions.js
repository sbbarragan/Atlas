const enviroments = require('dotenv');
const jwt = require('jwt-simple');
const moment = require('moment');

enviroments.config();
const env = process && process.env;
const tokenSecret = env.TOKEN_SECRET || null;
const limitToken = JSON.parse(env.LIMIT_TOKEN);

const createToken = ({ id }, extended = false) => {
  let rtn = null;
  if (limitToken && limitToken.MIN && limitToken.MAX && tokenSecret) {
    const { MIN, MAX } = limitToken;
    const payload = {
      sub: id,
      iat: moment().unix(),
      exp: moment()
        .add(extended ? MAX : MIN, 'days')
        .unix()
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
      if (payload.exp >= moment().unix()) {
        rtn = {
          id: payload.sub
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
