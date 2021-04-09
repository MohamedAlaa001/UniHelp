import React, { Fragment, useEffect } from 'react';
import { sidebarHandleClick } from './methods';

import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Home from './Home';

const Dashboard = () => {
  useEffect(() => {
    sidebarHandleClick();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className='d-flex align-items-stretch'>
        <Sidebar />
        <div className='page-content'>
          <Home />
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
