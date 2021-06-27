import api from '../utils/api';
import { setAlert } from './alert';
import {
  GET_CATEGORIES,
  GET_ALL_TICKETS,
  GET_TICKET,
  CHANGE_STATUS,
  CREATE_TICKET,
  CREATE_TICKET_REPLY,
  GET_TICKET_TIMELINE,
  TICKET_TRANSFER,
} from './types';

export const ticketSwitch = (user) => (dispatch) => {
  switch (user.role) {
    case 'student':
      dispatch(getTicketsByUser());
      break;
    case 'employee':
      dispatch(getTicketsByUser());
      // dispatch(getAssignedTicketsByUserId(user.username));
      break;
    case 'master':
      dispatch(getTicketsByUser());
      // dispatch(getNewTickets());
      break;
    default:
      return;
  }
};

// Student
export const getTicketsByUser = () => async (dispatch) => {
  try {
    const res = await api.get('/view_tickets');

    dispatch({
      type: GET_ALL_TICKETS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data.error);
  }
};

// get a single ticket
export const getTicketById = (ticket_id) => async (dispatch) => {
  const body = { ticket_id };
  try {
    // get ticket from tickets and replies request
    const resReply = await api.post('/view_reply', body);
    const resTimeline = await api.post('/view_ticket_log', body);

    dispatch({
      type: GET_TICKET,
      payload: { ticket_id, replies: resReply.data },
    });
    dispatch({
      type: GET_TICKET_TIMELINE,
      payload: resTimeline.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Get Categories
export const getCategories = () => async (dispatch) => {
  try {
    const res = await api.get('/get_category');

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data.error);
  }
};

// Change Ticket Status
export const changeTicketStatus = (ticket_id, status) => async (dispatch) => {
  const body = { ticket_id, status };
  try {
    const res = await api.put('/change_status', body);
    dispatch({
      type: CHANGE_STATUS,
      payload: res.data.status,
    });
  } catch (err) {
    console.log(err.response.data.error);
  }
};

// Create Ticket
export const createTicket = (ticket) => async (dispatch) => {
  const body = { ...ticket };
  try {
    const res = await api.post('/submit_ticket', body);
    dispatch({
      type: CREATE_TICKET,
      payload: res.data,
    });
    dispatch(
      setAlert(
        `Ticket Created with ID ${res.data.ticket_id} `,
        'success',
        false,
        3000
      )
    );
  } catch (err) {
    console.log(err.respone.data.error);
  }
};

// REPLIES
export const createReply = (reply) => async (dispatch) => {
  const body = { ...reply };
  try {
    const res = await api.post('/submit_reply', body);
    dispatch({
      type: CREATE_TICKET_REPLY,
      payload: res.data,
    });
    dispatch(
      setAlert(
        'Your reply has been successfully submitted',
        'success',
        false,
        3000
      )
    );
  } catch (err) {
    dispatch(setAlert(err.response.data.error, 'danger', false, 3000));
  }
};

// transfer ticket
export const transferTicket = (ticket_id, to_username) => async (dispatch) => {
  const body = { ticket_id, to_username };
  try {
    await api.put('/transfer_ticket', body);
    dispatch({
      type: TICKET_TRANSFER,
      payload: ticket_id,
    });
    dispatch(
      setAlert('Ticket successfully transferred', 'success', false, 3000)
    );
  } catch (err) {
    dispatch(setAlert(err.response.data.error, 'danger', false, 3000));
  }
};
