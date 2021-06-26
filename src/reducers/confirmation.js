import {
  SET_CONFIRMATION,
  REMOVE_CONFIRMATION,
  CLEAR_CONFIRMATIONS,
} from '../actions/types';

const initialState = null;

function confirmationReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CONFIRMATION:
      return payload;
    case REMOVE_CONFIRMATION:
    case CLEAR_CONFIRMATIONS:
      return null;
    default:
      return state;
  }
}

export default confirmationReducer;
