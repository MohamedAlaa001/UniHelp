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

export const login = (username2, password2) => async (dispatch) => {
  try {
    const res = await api.get(
      `/users?username=${username2}&password=${password2}`
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data[0],
    });
    // dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert('Invalid Credentials', 'danger', false, 3000));
    dispatch({
      type: LOGIN_FAILED,
    });
    console.log(err);
  }
};
// load User by token
export const loadUser = () => async (dispatch) => {
  console.log('user logged');
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
export const login2 = (username, password) => async (dispatch) => {
  const body = { username, password };

  try {
    const res = await api.post('/login', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert(err.response, 'danger', false, 3000));
    dispatch({ type: LOGIN_FAILED });
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_NOTIFICATIONS });
  dispatch({ type: CLEAR_TICKETS });
  dispatch({ type: CLEAR_REPLIES });
};
