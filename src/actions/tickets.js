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
  ADD_FILES,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
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
    console.log(err.response);
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

// add Category
export const addCategory = (title) => async (dispatch) => {
  const body = { title };
  try {
    const res = await api.post("/get_category", body);

    dispatch({
      type: ADD_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
  }
};

// edit Category title
export const editCategory = (category_id, title) => async (dispatch) => {
  const body = { category_id, title };
  try {
    const res = await api.put("/get_category", body);

    dispatch({
      type: EDIT_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
  }
};

// delete category
export const deleteCategory = (category_id) => async (dispatch) => {
  const body = { category_id };
  try {
    const res = await api.delete("/get_category", {
      data: body,
    });

    dispatch({
      type: DELETE_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
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
    dispatch(getTicketTimeline(ticket_id));
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
              `We suggest to change the ticket category to ${suggested_category.title}, Would you like to?`,
              (value) => {
                value
                  ? dispatch(
                      updateTicketCategory(
                        ticket_id,
                        suggested_category.category_id,
                        history
                      )
                    )
                  : dispatch(
                      updateTicketCategory(ticket_id, category_id, history)
                    );
              },
              "Keep it as it"
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

      dispatch({
        type: CREATE_TICKET_COMMENT_REPLY,
        payload: { reply_id, comment: res.data },
      });
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

export const downloadImage = (ticket_id, image) => async () => {
  const body = { ticket_id, image_id: image.id };
  try {
    const res = await api.post("/download_image", body, {
      responseType: "blob",
    });
    const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
    const images = document.querySelector(".images");
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", image.name);
    images.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
    console.log(err);
  }
};

export const downloadFile = (ticket_id, file) => async () => {
  const body = { ticket_id, file_id: file.id };
  try {
    const res = await api.post("/download_file", body, {
      responseType: "blob",
    });
    const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
    const images = document.querySelector(".files");
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", file.name);
    images.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
    console.log(err.response);
  }
};

export const addTicketFiles = (ticket) => async (dispatch) => {
  document.querySelector(".processing-overlay").classList.add("active");
  document.body.classList.add("no-scroll");
  try {
    const res = await api.post("/add_file", ticket);
    dispatch({
      type: ADD_FILES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch(setAlert(err.resposne.data.error, "danger", false, 3000));
  } finally {
    document.querySelector(".processing-overlay").classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
};
