import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 as uuidv4 } from "uuid";

export const setAlert =
  (msg, alertType, dismiss = false, timeout = 3000) =>
  (dispatch) => {
    const id = uuidv4();

    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, dismiss, id, timeout },
    });
    if (!dismiss) {
      setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    }
  };

export const removeAlert = (id) => (dispatch) => {
  dispatch({ type: REMOVE_ALERT, payload: id });
};
