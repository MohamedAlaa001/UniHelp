import {
  GET_ALL_NOTIFICATIONS,
  GET_NOTIFICATION,
  SET_NOTIFICATION_READ,
  SET_ALL_NOTIFICATIONS_READ,
} from '../actions/types';

const initialState = {
  notification: null,
  notifications: [],
  loading: true,
};

function notificationReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTIFICATION:
      return {
        ...state,
        notification: payload,
        loading: false,
      };
    case GET_ALL_NOTIFICATIONS:
      return {
        ...state,
        notifications: payload,
        loading: false,
      };
    case SET_NOTIFICATION_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === payload
            ? { ...notification, isRead: true }
            : notification
        ),
        loading: false,
      };
    case SET_ALL_NOTIFICATIONS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) => ({
          ...notification,
          isRead: true,
        })),
        loading: false,
      };
    default:
      return state;
  }
}

export default notificationReducer;
