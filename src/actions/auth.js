import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  CLEAR_NOTIFICATIONS,
  CLEAR_TICKETS,
  CLEAR_REPLIES,
} from './types';
import { setAlert } from './alert';

export const login = (username2, password2) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/users?username=${username2}&password=${password2}`
    );
    // console.log(res.data[0]);
    // const { username, password } = res.data;

    // if (username == username2 && password == password2) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data[0],
    });
    // } else {
    //   dispatch(setAlert('Invalid Credentials', 'danger', 3000));
    //   dispatch({
    //     type: LOGIN_FAILED,
    //   });
    // }
  } catch (err) {
    dispatch(setAlert('Invalid Credentials', 'danger', 3000));
    dispatch({
      type: LOGIN_FAILED,
    });
    console.log(err);
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_NOTIFICATIONS });
  dispatch({ type: CLEAR_TICKETS });
  dispatch({ type: CLEAR_REPLIES });
};
