import { combineReducers } from 'redux';
import Opennebula from './opennebula';
import Zendesk from './zendesk';

const rootReducers = combineReducers({
  Opennebula,
  Zendesk
});

export default rootReducers;
