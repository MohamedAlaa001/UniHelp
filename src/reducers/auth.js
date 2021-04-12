import {
  LOGIN_SUCCESS,
  LOGIN_ADMIN,
  LOGIN_FAILED,
  LOGOUT,
} from '../actions/types';

const initialState = {
  isAuthenicated: null,
  loading: true,
  user: null,
  // isAdmin: null,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenicated: true,
        loading: false,
        user: payload,
        // isAdmin: false,
      };
    // case LOGIN_ADMIN:
    //   return {
    //     ...state,
    //     isAdmin: true,
    //   };
    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenicated: false,
        loading: false,
        // isAdmin: false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenicated: false,
        loading: false,
        user: null,
        // isAdmin: null,
      };
    default:
      return state;
  }
}

export default authReducer;
