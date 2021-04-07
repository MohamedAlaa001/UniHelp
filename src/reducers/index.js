import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';

export default combineReducers({
  // Add imported here
  alert,
  auth,
});
