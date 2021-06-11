import api from '../utils/api';
import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_NOTIFICATIONS,
  CLEAR_TICKETS,
  CLEAR_REPLIES,
} from './types';
import { setAlert } from './alert';

// load User by token
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/login');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login User, Authenicate user and get token
export const login = (username, password) => async (dispatch) => {
  const body = { username, password };

  try {
    const res = await api.post('/login', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.error, 'danger', false, 3000));
    dispatch({ type: LOGIN_FAILED });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    await api.post('/logout');
    dispatch({ type: LOGOUT });
    dispatch({ type: CLEAR_NOTIFICATIONS });
    dispatch({ type: CLEAR_TICKETS });
    dispatch({ type: CLEAR_REPLIES });
  } catch (err) {
    console.log(err);
  }
};

// export const getCookie = (name) => {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== '') {
//     let cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//       let cookie = cookies[i].trim();
//       if (cookie.substring(0, name.length + 1) === name + '=') {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   // console.log(cookieValue);
//   return cookieValue;
// };
