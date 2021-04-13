import React, { Fragment, useEffect } from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrivateRoute from '../routing/PrivateRoute';

import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Home from './Home';
import Notifications from './notification/Notifications';
import NotificationBody from './notification/NotificationBody';

import NotFound from '../pages/NotFound';

const Dashboard = ({ isAuthenicated }) => {
  if (!isAuthenicated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <Navbar />
      <div className='d-flex align-items-stretch'>
        <Sidebar />
        <div className='page-content'>
          <Switch>
            <PrivateRoute exact path={'/home'} component={Home} />
            <PrivateRoute exact path={'/test'} component={Home} />
            <PrivateRoute
              exact
              path={'/notifications'}
              component={Notifications}
            />
            <PrivateRoute
              exact
              path={'/notifications/:id'}
              component={NotificationBody}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};
Dashboard.propTypes = {
  isAuthenicated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenicated: state.auth.isAuthenicated,
});

export default connect(mapStateToProps)(Dashboard);
