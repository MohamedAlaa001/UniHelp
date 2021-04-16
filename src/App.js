import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/font.css';
import './App.css';
import './customStyle.css';

import { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/routing/PrivateRoute';

import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Dashboard} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
