import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../actions/types';

const initialState = {
  isAuthenicated: null,
  loading: true,
  user: null,
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
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenicated: false,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenicated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}

export default authReducer;
