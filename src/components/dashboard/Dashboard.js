import React, { Fragment, useEffect } from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Home from './Home';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

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
            {/* <Route exact path={'/home'}>
              <Home name={'Home'} />
            </Route>
            <Route exact path={'/test'}>
              <Home name={'Test'} />
            </Route> */}
            <PrivateRoute exact path={'/home'}>
              <Home name={'home'} />
            </PrivateRoute>
            <PrivateRoute exact path={'/test'} component={Home}>
              <Home name={'test'} />
            </PrivateRoute>
            <PrivateRoute exact path={'/messages'} component={Home}>
              <Home name={'Messages'} />
            </PrivateRoute>
            {/* <Route exact path={'/messages'}>
              <Home name={'Messages'} />
            </Route> */}
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
