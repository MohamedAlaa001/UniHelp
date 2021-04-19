import axios from 'axios';
import { setAlert } from './alert';
import { GET_ALL_TICKETS, GET_TICKET, CREATE_TICKET } from './types';

export const getTicketsByUserId = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/tickets?user=${userId}`);

    dispatch({
      type: GET_ALL_TICKETS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getTicketById = (ticketId) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/tickets/${ticketId}`);

    dispatch({
      type: GET_TICKET,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createTicket = (ticket) => async (dispatch) => {
  console.log(ticket);
  // add dispatch create ticket
  dispatch(setAlert('Ticket Created', 'success', false, 3000));
};
