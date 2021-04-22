import {
  GET_TICKET_REPLIES,
  CREATE_TICKET_REPLY,
  CLEAR_REPLIES,
} from '../actions/types';

const initialState = {
  replies: [],
  loading: true,
};

function repliesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TICKET_REPLIES:
      return {
        ...state,
        replies: payload,
        loading: false,
      };
    case CLEAR_REPLIES:
      return {
        ...state,
        replies: [],
        loading: true,
      };
    default:
      return state;
  }
}

export default repliesReducer;
