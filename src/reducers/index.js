import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import notification from './notifications';
import ticket from './ticket';

export default combineReducers({
  // Add imported here
  alert,
  auth,
  notification,
  ticket,
});
