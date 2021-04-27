import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sidebarHandleClick } from '../handlersMethods';

import NavItem from './NavItem';

const Sidebar = ({ role }) => {
  useEffect(() => {
    sidebarHandleClick();
  }, []);

  const roleSwitch = () => {
    switch (role) {
      case 'student':
        return (
          <Fragment>
            <span className='heading'>Student Panel</span>
            <ul className='list-unstyled'>
              <NavItem path='/tickets' icon='paper-and-pencil' name='Tickets' />
            </ul>
          </Fragment>
        );
      case 'employee':
        return (
          <Fragment>
            <span className='heading'>Employee Panel</span>
            <ul className='list-unstyled'>
              <NavItem path='/tickets' icon='paper-and-pencil' name='Tickets' />
              <NavItem path='/dashboard' icon='chart' name='Dashboard' />
              <li>
                <a
                  href='#menuDropdown'
                  aria-expanded='false'
                  data-bs-toggle='collapse'
                >
                  <i className='icon-settings'></i>
                  Settings
                </a>
                <ul className='list-unstyled collapse' id='menuDropdown'>
                  <NavItem path='/permissions' name='Permissions' />
                </ul>
              </li>
            </ul>
          </Fragment>
        );
    }
  };

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
          <NavItem path='/home' icon='home' name='Home' />
          <NavItem path='/notifications' icon='bell' name='Notifications' />
        </ul>
        {/* Sidebar Main Menu End */}
        {/* Switch case for different user panel */}
        {(() => roleSwitch())()}
      </nav>
    </Fragment>
  );
};

Sidebar.propTypes = {
  role: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  role: state.auth.user.role,
});

export default connect(mapStateToProps)(Sidebar);

/*
<li>
  <a
    href='#menuDropdown'
    aria-expanded='false'
    data-bs-toggle='collapse'
  >
    <i className='icon-list-1'></i>
    Dropdown Example
  </a>
  <ul className='list-unstyled collapse' id='menuDropdown'>
    <NavItem path='/demo1' icon={'menu-right'} name='Department X' />
    <NavItem path='/demo2' icon={'menu-right'} name='Department Y' />
    <NavItem path='/demo3' icon={'menu-right'} name='Department Z' />
  </ul>
</li>
*/
