import { combineReducers } from 'redux';
import alert from './alert';
import confirmation from './confirmation';
import auth from './auth';
import notification from './notifications';
import tickets from './tickets';

export default combineReducers({
  // Add imported here
  alert,
  confirmation,
  auth,
  notification,
  tickets,
});
