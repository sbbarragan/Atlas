const enviroments = require('dotenv');
const { defaultBaseURL } = require('./defaults');

enviroments.config();
const env = process && process.env;

module.exports = {
  baseUrl: env.namespace || defaultBaseURL
};
