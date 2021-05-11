import {
  GET_CATEGORIES,
  GET_ALL_TICKETS,
  GET_TICKET,
  CREATE_TICKET,
  CLEAR_TICKETS,
  MARK_APPROVE,
  MARK_RESOLVED,
  MARK_CLOSED,
} from '../actions/types';

const initialState = {
  ticket: null,
  tickets: [],
  loading: true,
  categories: [],
};

function ticketReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES: {
      return {
        ...state,
        categories: payload,
        loading: false,
      };
    }
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
        tickets: [payload, ...state.tickets],
        loading: false,
      };
    case CLEAR_TICKETS:
      return {
        ...state,
        ticket: null,
        tickets: [],
        loading: true,
      };
    case MARK_APPROVE:
    case MARK_RESOLVED:
    case MARK_CLOSED:
      return {
        ...state,
        ticket: payload,
      };

    default:
      return state;
  }
}

export default ticketReducer;
