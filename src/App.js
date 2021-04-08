import { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import PrivateRoute from './components/routing/PrivateRoute';

import Landing from './components/layout/Landing';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
