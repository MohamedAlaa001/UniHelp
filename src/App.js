import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/font.css';
import './App.css';
import './customStyle.css';

import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { store, persistor } from './store';
// import persistor from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { loadUser, logout } from './actions/auth';

import PrivateRoute from './components/routing/PrivateRoute';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path='/' component={Landing} />
              <PrivateRoute component={Dashboard} />
            </Switch>
          </Fragment>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
