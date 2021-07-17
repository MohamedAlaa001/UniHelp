import api from "../utils/api";
import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  AUTH_ERROR,
  LOGOUT,
  USER_ADDED,
  CLEAR_NOTIFICATIONS,
  CLEAR_TICKETS,
  CLEAR_REPLIES,
} from "./types";
import { setAlert } from "./alert";

// load User by token
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/login");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
    dispatch(setAlert(err.response.data.error, "danger", false, 3000));
  }
};

// Login User, Authenicate user and get token
export const login = (username, password) => async (dispatch) => {
  const body = { username, password };

  try {
    const res = await api.post("/login", body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.error, "danger", false, 3000));
    dispatch({ type: LOGIN_FAILED });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    await api.post("/logout");
    dispatch({ type: LOGOUT });
    dispatch({ type: CLEAR_NOTIFICATIONS });
    dispatch({ type: CLEAR_TICKETS });
    dispatch({ type: CLEAR_REPLIES });
  } catch (err) {
    console.log(err);
  }
};

// AddUser
export const addUser = (user) => async (dispatch) => {
  const body = { ...user };
  try {
    await api.post("/register", body);

    dispatch(
      setAlert(
        `User ' ${user.username} '  has been added successfully`,
        "success",
        false,
        5000
      )
    );
  } catch (err) {
    dispatch(setAlert(err.response.data.error, "danger", false, 3000));
  }
};

// Change User Password
export const changeUserPassword = (body) => async (dispatch) => {
  try {
    const res = await api.post("/change_password", body);

    dispatch(logout());
    dispatch(
      setAlert(
        `${res.data.success}, Please login again`,
        "success",
        false,
        5000
      )
    );
  } catch (err) {
    dispatch(setAlert(err.response.data.error, "danger", false, 3000));
  }
};
