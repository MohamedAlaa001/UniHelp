import { SET_CONFIRMATION, REMOVE_CONFIRMATION } from "../actions/types";

export const setConfirmation =
  (title, message, setIsConfirm, cancelMessage = "Cancel") =>
  (dispatch) => {
    dispatch({
      type: SET_CONFIRMATION,
      payload: { title, message, setIsConfirm, cancelMessage },
    });
  };

export const removeConfirmation = () => (dispatch) => {
  dispatch({ type: REMOVE_CONFIRMATION });
};
