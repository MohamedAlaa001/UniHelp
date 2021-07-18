import {
  GET_CATEGORIES,
  GET_ALL_TICKETS,
  GET_TICKET,
  CREATE_TICKET,
  CREATE_TICKET_COMMENT,
  CLEAR_TICKETS,
  CHANGE_STATUS,
  GET_TICKET_TIMELINE,
  GET_ALL_EMPLOYEES,
  TICKET_TRANSFER,
  GET_STUDENT_TICKETS,
  CLEAR_TICKET_TIMELINE,
  GET_READ_ONLY_TICKETS,
  CREATE_TICKET_COMMENT_REPLY,
} from "../actions/types";

const initialState = {
  ticket: null,
  tickets: [],
  readOnlyTickets: [],
  studentTickets: [],
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
      const ticket = state.tickets.find(
        // eslint-disable-next-line
        (ticket) => ticket.ticket_id == payload.ticket_id
      );

      if (ticket) {
        return {
          ...state,
          ticket: {
            ...state.tickets.find(
              // eslint-disable-next-line
              (ticket) => ticket.ticket_id == payload.ticket_id
            ),
            comments: [...payload.comments],
            timeline: [],
          },
          loading: false,
        };
      } else {
        return {
          ...state,
          ticket: {
            ...state.studentTickets.find(
              // eslint-disable-next-line
              (ticket) => ticket.ticket_id == payload.ticket_id
            ),
            comments: [...payload.comments],
            timeline: [],
          },
          loading: false,
        };
      }

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

    case GET_READ_ONLY_TICKETS:
      return {
        ...state,
        tickets: [
          ...state.tickets,
          ...payload
            .filter(
              (ticket) =>
                ticket &&
                !state.tickets.find((el) => el.ticket_id === ticket.ticket_id)
            )
            .map((ticket) => ({ ...ticket, readOnly: true })),
        ],
        loading: false,
      };
    case CREATE_TICKET:
      return {
        ...state,
        tickets: [payload, ...state.tickets],
        loading: false,
      };
    case CREATE_TICKET_COMMENT:
      return {
        ...state,
        ticket: {
          ...state.ticket,
          comments: payload,
        },
        loading: false,
      };
    case CREATE_TICKET_COMMENT_REPLY:
      return {
        // payload: { ticket_id, comment: res.data },
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
    case GET_STUDENT_TICKETS:
      return {
        ...state,
        studentTickets: payload,
        loading: false,
      };
    case CLEAR_TICKET_TIMELINE:
      return {
        ...state,
        ticket: {
          ...state.ticket,
          timeline: [],
        },
        loading: false,
      };
    case CLEAR_TICKETS:
      return {
        ...state,
        ticket: null,
        tickets: [],
        studentTickets: [],
        readOnlyTickets: [],
        categories: [],
        employees: [],
        loading: true,
      };
    case CHANGE_STATUS:
      return {
        ...state,
        ticket: {
          ...state.ticket,
          status: payload.status,
          master: payload.master_name,
        },
        tickets: [
          ...state.tickets.map((ticket) => {
            if (ticket.ticket_id === payload.ticket_id) {
              return {
                ...ticket,
                status: payload.status,
              };
            } else {
              return ticket;
            }
          }),
        ],
      };

    default:
      return state;
  }
}

export default ticketReducer;
