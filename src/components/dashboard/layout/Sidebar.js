import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sidebarHandleClick } from '../handlersMethods';

import NavItem from './NavItem';

const Sidebar = ({ isAdmin }) => {
  useEffect(() => {
    sidebarHandleClick();
  }, []);

  const studentSidebar = (
    <Fragment>
      <span className='heading'>Student Panel</span>
      <ul className='list-unstyled'>
        <NavItem path={'/test'} icon={'light-bulb'} name={'Test'} />
        <li>
          <a
            href='#menuDropdown'
            aria-expanded='false'
            data-bs-toggle='collapse'
          >
            <i className='icon-windows'></i>
            Dropdown Example
          </a>
          <ul className='list-unstyled collapse' id='menuDropdown'>
            <NavItem path={'/demo1'} name={'Page 1'} />
            <NavItem path={'/demo2'} name={'Page 2'} />
            <NavItem path={'/demo3'} name={'Page 3'} />
          </ul>
        </li>
      </ul>
    </Fragment>
  );

  const adminSidebar = (
    <Fragment>
      <span className='heading'>Admin Panel</span>
      <ul className='list-unstyled'>
        <NavItem path={'/demo4'} icon={'settings'} name={'Demo4'} />
        <NavItem path={'/demo5'} icon={'settings'} name={'Demo5'} />
        <NavItem path={'/demo6'} icon={'settings'} name={'Demo6'} />
      </ul>
    </Fragment>
  );

  return (
    <Fragment>
      {/* Sidebar Nav */}
      <nav id='sidebar'>
        {/* sidebar header */}
        <div className='sidebar-header d-flex align-items-center justify-content-center'>
          <div className='title'>
            <h1 className='h5'>Fname Lname</h1>
            <p>Lorem, ipsum dolor.</p> {/* Could be removed */}
          </div>
        </div>
        {/* Sidebar Main Menu start */}
        <span className='heading'>Main</span>
        <ul className='list-unstyled'>
          <NavItem path={'/home'} icon={'home'} name={'Home'} />
          <NavItem
            path={'/notifications'}
            icon={'bell'}
            name={'Notifications'}
          />
        </ul>
        {isAdmin ? adminSidebar : studentSidebar}
        {/* Sidebar Main Menu End */}
      </nav>
    </Fragment>
  );
};

Sidebar.propTypes = {
  isAdmin: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAdmin: state.auth.user.isAdmin,
});

export default connect(mapStateToProps)(Sidebar);
