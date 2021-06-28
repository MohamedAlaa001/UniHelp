import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrivateRoute from './routing/PrivateRoute';

import { getAllNotifications } from '../actions/notifications';
import { getAllEmployees } from '../actions/tickets';
// layout
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Spinner from './layout/Spinner';
import Confirmation from './layout/Confirmation';
// Home
import Home from './dashboard/Home';
// Notifications
import Notifications from './dashboard/notification/Notifications';
import NotificationBody from './dashboard/notification/NotificationBody';
// Tickets
import Tickets from './dashboard/ticket/Tickets';
import TicketBody from './dashboard/ticket/TicketBody';
import TicketForm from './dashboard/ticket/TicketForm';
// Panel
import Panel from './dashboard/panel/Panel';
// Settings
import Perms from './dashboard/settings/Perms';

import NotFound from './pages/NotFound';

const Dashboard = ({
  getAllNotifications,
  auth: {
    loading,
    user: { id, role },
  },
  notifications,
  getAllEmployees,
}) => {
  useEffect(() => {
    getAllNotifications(id);
    if (role !== 'student') {
      getAllEmployees();
    }
    // eslint-disable-next-line
  }, [getAllNotifications, id]);

  return loading || notifications === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Confirmation />
      <Navbar />
      <div className='d-flex align-items-stretch'>
        <Sidebar />
        <div className='page-content'>
          <Switch>
            <PrivateRoute exact path={'/home'} component={Home} />
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
            <PrivateRoute exact path='/tickets' component={Tickets} />
            <PrivateRoute exact path='/tickets/create' component={TicketForm} />
            <PrivateRoute exact path='/tickets/:id' component={TicketBody} />
            <PrivateRoute exact path='/dashboard' component={Panel} />
            <PrivateRoute exact path='/permissions' component={Perms} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getAllNotifications: PropTypes.func.isRequired,
  notifications: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  notifications: state.notification.notifications,
});

export default connect(mapStateToProps, {
  getAllNotifications,
  getAllEmployees,
})(Dashboard);
