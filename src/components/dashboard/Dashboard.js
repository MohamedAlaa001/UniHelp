import React, { Fragment, useEffect } from 'react';
import { sidebarHandleClick } from './handlersMethods';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Home from './Home';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

const Dashboard = () => {
  let { path } = useRouteMatch();
  useEffect(() => {
    sidebarHandleClick();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className='d-flex align-items-stretch'>
        <Sidebar />
        <div className='page-content'>
          <Switch>
            <Route exact path={'/home'}>
              <Home name={'Home'} />
            </Route>
            <Route exact path={'/test'}>
              <Home name={'Test'} />
            </Route>
            <Route exact path={'/messages'}>
              <Home name={'Messages'} />
            </Route>
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
