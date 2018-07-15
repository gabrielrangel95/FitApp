import { combineReducers } from 'redux';
import user from './User';
import goal from './Goal';
import steps from './Steps';

export default combineReducers({
  user,
  goal,
  steps,
});
