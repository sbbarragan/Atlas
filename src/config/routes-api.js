const { getRouteForOpennebulaCommand } = require('../utils');
const {
  private: functionPrivate,
  public: functionPublic
} = require('./function-routes');

const opennebulaActions = getRouteForOpennebulaCommand();

const routes = {
  private: [...opennebulaActions, ...Object.keys(functionPrivate)],
  public: [...Object.keys(functionPublic)]
};
module.exports = routes;
