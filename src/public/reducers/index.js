const  { combineReducers } = require('redux');
const  Opennebula = require('./opennebula');
const  Zendesk = require('./zendesk');
const  General = require('./general');
const  GetConfigSystem = require('./system');

const rootReducers = config =>
  combineReducers({
    System: GetConfigSystem(config),
    Opennebula,
    Zendesk,
    General
  });

module.exports = rootReducers;
