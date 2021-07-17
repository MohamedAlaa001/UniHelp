import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sidebarHandleClick } from "../handlersMethods";

import * as SiderbarContent from "./SidebarContent";
import NavItem from "./NavItem";

const Sidebar = ({ user: { role, first_name, last_name } }) => {
  useEffect(() => {
    sidebarHandleClick();
  }, []);

  const roleSwitch = () => {
    switch (role) {
      case "student":
        return SiderbarContent.student();
      case "employee":
        return SiderbarContent.employee();
      case "master":
        return SiderbarContent.master();
      case "admin":
        return SiderbarContent.admin();
      default:
        return null;
    }
  };

  return (
    <Fragment>
      {/* Sidebar Nav */}
      <nav id='sidebar'>
        {/* sidebar header */}
        <div className='sidebar-header d-flex align-items-center justify-content-center'>
          <div className='title'>
            <h1 className='h5'>
              {first_name} {last_name}
            </h1>
            <p className='role'>{role} user</p>
          </div>
        </div>
        {/* Sidebar Main Menu start */}
        <span className='heading'>Main</span>
        <ul className='list-unstyled'>
          <NavItem path='/home' icon='home' name='Home' />
          <NavItem path='/notifications' icon='bell' name='Notifications' />
        </ul>
        {/* Sidebar Main Menu End */}
        {(() => roleSwitch())()}
        <span className='heading'>Settings</span>
        <ul className='list-unstyled'>
          <NavItem
            path='/changePassword'
            icon='settings'
            name='Change Password'
          />
        </ul>
      </nav>
    </Fragment>
  );
};

Sidebar.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
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
