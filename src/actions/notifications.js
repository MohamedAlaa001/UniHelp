import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_NOTIFICATION,
  GET_ALL_NOTIFICATIONS,
  SET_NOTIFICATION_READ,
} from './types';

export const getAllNotifications = (id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'applicaiton/json',
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:5000/notifications?user=${id}`
    );

    dispatch({
      type: GET_ALL_NOTIFICATIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getNotification = (id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.get(`http://localhost:5000/notifications/${id}`);
    dispatch({
      type: GET_NOTIFICATION,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
