import { combineReducers } from 'redux';
import Opennebula from './opennebula';
import Zendesk from './zendesk';
import General from './general';

const rootReducers = combineReducers({
  Opennebula,
  Zendesk,
  General
});

export default rootReducers;
