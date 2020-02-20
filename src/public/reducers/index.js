import { combineReducers } from 'redux';
import Opennebula from './opennebula';
import Zendesk from './zendesk';
import General from './general';
import GetConfigSystem from './system';

const rootReducers = config =>
  combineReducers({
    System: GetConfigSystem(config),
    Opennebula,
    Zendesk,
    General
  });

export default rootReducers;
