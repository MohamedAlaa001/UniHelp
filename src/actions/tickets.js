import api from "../utils/api";
import { setAlert } from "./alert";
import {
  GET_CATEGORIES,
  GET_ALL_TICKETS,
  GET_TICKET,
  CHANGE_STATUS,
  CREATE_TICKET,
  CREATE_TICKET_COMMENT,
  GET_TICKET_TIMELINE,
  GET_ALL_EMPLOYEES,
  TICKET_TRANSFER,
  GET_STUDENT_TICKETS,
  CLEAR_TICKET_TIMELINE,
  GET_READ_ONLY_TICKETS,
  CREATE_TICKET_COMMENT_REPLY,
} from "./types";
import { setConfirmation } from "./confirmation";

// Get Ticket per user
export const getTicketsByUser = (role) => async (dispatch) => {
  try {
    const res = await api.get("/view_tickets");

    dispatch({
      type: GET_ALL_TICKETS,
      payload: res.data,
    });

    if (role !== "student") {
      dispatch(getReadOnlyTickets());
    }
  } catch (err) {
    console.log(err.response.data.error);
  }
};
// Get read only tickets
export const getReadOnlyTickets = () => async (dispatch) => {
  try {
    const res = await api.get("/user_history");

    dispatch({
      type: GET_READ_ONLY_TICKETS,
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
    const res = await api.post("/view_reply", body);

    dispatch({
      type: GET_TICKET,
      payload: { ticket_id, comments: res.data },
    });

    dispatch(getTicketTimeline(ticket_id));
  } catch (err) {
    console.log(err);
  }
};
// get Ticket timeline
export const getTicketTimeline = (ticket_id) => async (dispatch) => {
  const body = { ticket_id };
  try {
    // get ticket from tickets and replies request
    const res = await api.post("/view_ticket_log", body);

    dispatch({
      type: GET_TICKET_TIMELINE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
// Get Categories
export const getCategories = () => async (dispatch) => {
  try {
    const res = await api.get("/get_category");

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
    const res = await api.put("/change_status", body);
    dispatch({
      type: CHANGE_STATUS,
      payload: { ...res.data, ticket_id },
    });
  } catch (err) {
    console.log(err.response.data.error);
  }
};

// Create Ticket
export const createTicket =
  (ticket, category_id, history) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    document.querySelector(".processing-overlay").classList.add("active");
    document.body.classList.add("no-scroll");
    try {
      const res = await api.post("/submit_ticket", ticket, config);

      if (res.data.suggested_category) {
        const { ticket_id, suggested_category } = res.data;
        try {
          dispatch(
            setConfirmation(
              "Ticket Category Suggestion",
              `We suggest to change the ticket category to ${suggested_category}, Would you like to?`,
              (value) => {
                value
                  ? dispatch(
                      updateTicketCategory(
                        ticket_id,
                        suggested_category,
                        history
                      )
                    )
                  : dispatch(
                      updateTicketCategory(ticket_id, category_id, history)
                    );
              }
            )
          );
        } catch (err) {
          console.log(err);
          throw err;
        }
      } else {
        history.push("/tickets");
        dispatch({
          type: CREATE_TICKET,
          payload: res.data,
        });
        dispatch(
          setAlert(
            `Ticket Created with ID ${res.data.ticket_id} `,
            "success",
            false,
            3000
          )
        );
      }
    } catch (err) {
      console.log(err.response.data);
    } finally {
      document.querySelector(".processing-overlay").classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  };

// Update ticket category
export const updateTicketCategory =
  (ticket_id, category_id, history) => async (dispatch) => {
    document.querySelector(".processing-overlay").classList.add("active");
    document.body.classList.add("no-scroll");
    const body = { ticket_id, category_id };
    try {
      const res = await api.put("/submit_ticket", body);

      dispatch({
        type: CREATE_TICKET,
        payload: res.data,
      });
      dispatch(
        setAlert(
          `Ticket Created with ID ${res.data.ticket_id} `,
          "success",
          false,
          3000
        )
      );
    } catch (err) {
      console.log(err.response.data);
    } finally {
      document.querySelector(".processing-overlay").classList.remove("active");
      document.body.classList.remove("no-scroll");
      history.push("/tickets");
    }
  };

// CREATE Comment
export const createComment = (comment) => async (dispatch) => {
  const body = { ...comment };
  try {
    const res = await api.post("/submit_reply", body);
    dispatch({
      type: CREATE_TICKET_COMMENT,
      payload: res.data,
    });
    dispatch(
      setAlert(
        "Your comment has been successfully submitted",
        "success",
        false,
        3000
      )
    );
  } catch (err) {
    dispatch(setAlert(err.response.data.error, "danger", false, 3000));
  }
};
// CREATE Comment's Reply
export const createCommentReply =
  (ticket_id, reply_id, content, is_private) => async (dispatch) => {
    const body = { ticket_id, reply_id, content, is_private };
    try {
      const res = await api.put("/submit_reply", body);

      // dispatch({
      //   type: CREATE_TICKET_COMMENT_REPLY,
      //   payload: { ticket_id, comment: res.data },
      // });
    } catch (err) {
      dispatch(setAlert(err.response.data.error, "danger", false, 3000));
    }
  };

// get all employees
export const getAllEmployees = () => async (dispatch) => {
  try {
    const res = await api.get("/get_employees");
    dispatch({
      type: GET_ALL_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data.error);
  }
};

// transfer ticket
export const transferTicket = (ticket_id, to_username) => async (dispatch) => {
  const body = { ticket_id, to_username };
  try {
    await api.put("/transfer_ticket", body);
    dispatch({
      type: TICKET_TRANSFER,
      payload: ticket_id,
    });
    dispatch(
      setAlert("Ticket successfully transferred", "success", false, 3000)
    );
  } catch (err) {
    dispatch(setAlert(err.response.data.error, "danger", false, 3000));
  }
};

//GET student tickets 'history'
export const getStudentTickets = (username) => async (dispatch) => {
  const body = { username };
  try {
    const res = await api.post("/student_ticket_history", body);

    dispatch({ type: GET_STUDENT_TICKETS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const clearTicketTimeline = () => (dispatch) => {
  dispatch({
    type: CLEAR_TICKET_TIMELINE,
  });
};
