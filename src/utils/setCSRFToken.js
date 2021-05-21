import api from './api';
import Cookies from 'js-cookie';

const setCSRFToken = (token) => {
  if (token) {
    api.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');
  } else {
    delete api.defaults.headers.common['X-CSRFToken'];
    Cookies.remove('csrftoken');
  }
};

export default setCSRFToken;
