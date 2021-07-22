import api from "./api";

const setCSRFToken = (token) => {
  if (token) {
    api.defaults.headers.common["X-CSRFToken"] = token;
  } else {
    delete api.defaults.headers.common["X-CSRFToken"];
  }
};

export default setCSRFToken;
