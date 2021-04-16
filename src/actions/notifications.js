import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_NOTIFICATION,
  GET_ALL_NOTIFICATIONS,
  SET_NOTIFICATION_READ,
  SET_ALL_NOTIFICATIONS_READ,
} from './types';

export const getAllNotifications = (id) => async (dispatch) => {
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

export const setNotificationRead = (id, notification) => async (dispatch) => {
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // };
  // const body = JSON.stringify(notification);
  // console.log('body -> ', body);

  try {
    const res = await axios.put(`http://localhost:5000/notifications/${id}`, {
      ...notification,
      isRead: true,
    });
    console.log('res -> ', res);

    dispatch({
      type: SET_NOTIFICATION_READ,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const setAllNotificationsRead = () => ({
  type: SET_ALL_NOTIFICATIONS_READ,
});
// export const setAllNotificationsRead = (id) => async (
//   dispatch
// ) => {
//   // try {
//   // const res = await axios.put(`http://localhost:5000/notifications/${id}`, {
//   //   ...notification,
//   //   isRead: true,
//   // });
//   // console.log('res -> ', res);

//   dispatch({
//     type: SET_ALL_NOTIFICATIONS_READ,
//     payload: { id },
//   });
//   // } catch (err) {
//   //   console.log(err);
//   // }
// };
