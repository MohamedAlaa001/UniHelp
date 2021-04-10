import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILED, USER_LOADED, LOGOUT } from './types';
import { setAlert } from './alert';

// Load User
export const loadUser = (user) => async (dispatch) => {
  dispatch({
    type: USER_LOADED,
    payload: user,
  });
};

export const login = (username2, password2) => async (dispatch) => {
  // To be changed with Backend
  const config = {
    headers: {
      'Content-Type': 'applicaiton/json',
    },
  };
  // const body = JSON.stringify({ username, password})
  try {
    const res = await axios.get('http://localhost:5000/users/1');
    const { username, password } = res.data;

    if (username === username2 && password === password2) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser(res.data));
      dispatch(setAlert('Login Success', 'success', 3000));
    } else {
      dispatch(setAlert('Invalid Credentials', 'danger', 3000));
      dispatch({
        type: LOGIN_FAILED,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
