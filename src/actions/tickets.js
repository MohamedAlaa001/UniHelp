import api from '../utils/api';
import { setAlert } from './alert';
import {
  GET_CATEGORIES,
  GET_ALL_TICKETS,
  GET_TICKET,
  CREATE_TICKET,
  CLEAR_REPLIES,
  MARK_APPROVE,
  MARK_RESOLVED,
  MARK_CLOSED,
} from './types';

// Student
export const getTicketsByUserId = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`http://localhost:5000/tickets?user=${userId}`);

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
    const res = await api.get(`http://localhost:5000/tickets/${ticketId}`);

    dispatch({
      type: GET_TICKET,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Get Categories
export const getCategories = () => async (dispatch) => {
  try {
    const res = await api.get('http://localhost:5000/categories');

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createTicket = (ticket) => async (dispatch) => {
  console.log(ticket);

  try {
    api.post('/submit_ticket', ticket);
    dispatch(setAlert('Ticket Created', 'success', false, 3000));
  } catch (err) {
    console.log(err);
  }
};

// Employee
export const getAssignedTicketsByUserId = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`http://localhost:5000/tickets?user=${userId}`);

    dispatch({
      type: GET_ALL_TICKETS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const markTicketApprove = (ticketId) => async (dispatch) => {
  try {
    const res = await api.patch(`http://localhost:5000/tickets/${ticketId}`, {
      status: 'open',
    });
    dispatch({ type: MARK_APPROVE, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const markTicketResolved = (ticketId) => async (dispatch) => {
  try {
    const res = await api.patch(`http://localhost:5000/tickets/${ticketId}`, {
      status: 'resolved',
    });
    dispatch({ type: MARK_RESOLVED, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const markTicketClosed = (ticketId) => async (dispatch) => {
  try {
    const res = await api.patch(`http://localhost:5000/tickets/${ticketId}`, {
      status: 'closed',
    });
    dispatch({ type: MARK_CLOSED, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
