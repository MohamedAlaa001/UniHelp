import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_LOADED,
  LOGOUT,
} from '../actions/types';

const initialState = {
  isAuthenicated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenicated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        // ...payload,
        isAuthenicated: true,
        loading: false,
      };
    case LOGIN_FAILED:
    case LOGOUT:
      return {
        ...state,
        isAuthenicated: false,
        loading: false,
      };
    default:
      return state;
  }
}
