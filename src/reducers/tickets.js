import {
  GET_ALL_TICKETS,
  GET_TICKET,
  CREATE_TICKET,
  CLEAR_TICKETS,
} from '../actions/types';

const initialState = {
  ticket: null,
  tickets: [],
  loading: true,
};

function ticketReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TICKET:
      return {
        ...state,
        ticket: payload,
        loading: false,
      };
    case GET_ALL_TICKETS:
      return {
        ...state,
        tickets: payload,
        loading: false,
      };
    case CREATE_TICKET:
      return {
        ...state,
        tickets: [payload, state.tickets],
        loading: false,
      };
    case CLEAR_TICKETS:
      return {
        ...state,
        ticket: null,
        tickets: [],
        loading: true,
      };
    default:
      return state;
  }
}

export default ticketReducer;
