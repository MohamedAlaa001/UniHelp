import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import notification from './notifications';

export default combineReducers({
  // Add imported here
  alert,
  auth,
  notification,
});
