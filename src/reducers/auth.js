import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from "../actions/types";

import Cookies from "js-cookie";

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        // ...payload,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };

    case AUTH_ERROR:
    case LOGOUT:
      if (Cookies.get("sessionid")) {
        Cookies.remove("sessionid");
      }
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}

export default authReducer;
