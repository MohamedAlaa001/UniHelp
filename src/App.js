import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/font.css';
import './App.css';
import './customStyle.css';

import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser, logout } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import setCSRFToken from './utils/setCSRFToken';
// import { LOGOUT } from './actions/types';

import PrivateRoute from './components/routing/PrivateRoute';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

const App = () => {
  useEffect(() => {
    // Check for token in LS
    const token = Cookies.get('csrftoken');
    if (token) {
      setCSRFToken(token);
    }
    store.dispatch(loadUser());

    window.addEventListener('storage', () => {
      if (!Cookies.get('csrftoken')) store.dispatch(logout());
      // if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Landing} />
            <PrivateRoute component={Dashboard} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
