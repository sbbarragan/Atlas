const { getConfig } = require('../utils/yml-connect');
const { defaultBaseURL } = require('./defaults');

// user config
const appConfig = getConfig();

module.exports = {
  baseUrl: appConfig.namespace || defaultBaseURL
};
