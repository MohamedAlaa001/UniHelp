import {
  GET_CATEGORIES,
  GET_ALL_TICKETS,
  GET_TICKET,
  CREATE_TICKET,
  CREATE_TICKET_REPLY,
  CLEAR_TICKETS,
  CHANGE_STATUS,
  GET_TICKET_TIMELINE,
  GET_ALL_EMPLOYEES,
  TICKET_TRANSFER,
} from '../actions/types';

const initialState = {
  ticket: null,
  tickets: [],
  loading: true,
  categories: [],
  employees: [],
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
        ticket: {
          ...state.tickets.find(
            // eslint-disable-next-line
            (ticket) => ticket.ticket_id == payload.ticket_id
          ),
          replies: [...payload.replies],
        },
        loading: false,
      };
    case GET_TICKET_TIMELINE:
      return {
        ...state,
        ticket: {
          ...state.ticket,
          timeline: [...payload],
        },
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
    case CREATE_TICKET_REPLY:
      return {
        ...state,
        ticket: {
          ...state.ticket,
          replies: payload,
        },
        loading: false,
      };
    case GET_ALL_EMPLOYEES:
      return {
        ...state,
        employees: payload,
        loading: false,
      };
    case TICKET_TRANSFER:
      return {
        ...state,
        ticket: null,
        tickets: state.tickets.filter((ticket) => {
          return ticket.ticket_id !== payload;
        }),

        loading: false,
      };
    case CLEAR_TICKETS:
      return {
        ...state,
        ticket: null,
        tickets: [],
        categories: [],
        employees: [],
        loading: true,
      };
    case CHANGE_STATUS:
      return {
        ...state,
        ticket: {
          ...state.ticket,
          status: payload,
        },
      };

    default:
      return state;
  }
}

export default ticketReducer;
