import axios from 'axios';
import { GET_ALL_TICKETS, GET_TICKET } from './types';

export const getAllTickets = (userId) => async (dispatch) => {
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

export const getTicket = (ticketId) => async (dispatch) => {
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
