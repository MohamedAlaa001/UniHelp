import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';
import { dropdownHandleShow } from '../handlersMethods';
import { getAllNotifications } from '../../../actions/notifications';

import Spinner from '../../layout/Spinner';
import NotificationItem from '../notification/NotificationItem';

const Navbar = ({
  logout,
  getAllNotifications,
  user: { id },
  notifications,
}) => {
  useEffect(() => {
    dropdownHandleShow();
    getAllNotifications(id);
  }, [getAllNotifications]);

  return (
    <header>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid d-flex align-items-center justify-content-between'>
          {/* Navbar Header */}
          <div className='navbar-header'>
            <Link to='/home' className='navbar-brand'>
              <div className='brand-text brand-big visible text-uppercase'>
                <strong className='text-primary'>Uni</strong>
                <strong>help</strong>
              </div>
              <div className='brand-text brand-sm text-uppercase'>
                <strong className='text-primary'>Uni</strong>
                <strong>help</strong>
              </div>
            </Link>
            {/* Sidebar Toggler */}
            <button className='sidebar-toggle'>
              <i className='fa fa-long-arrow-left'></i>
            </button>
          </div>
          {/* Right Menu */}
          <div className='right-menu list-inline no-margin-bottom'>
            {/* Messages box // dropdown*/}
            <div className='list-inline-item dropdown'>
              <a
                href='#'
                id='messageMenu'
                className='nav-link messages-toggle '
                data-bs-toggle='dropdown'
                role='button'
                aria-expanded='false'
              >
                <i className='icon-bell'></i>
                <span className='badge dashbg-1'>
                  {
                    notifications.filter((notification) => {
                      return notification.isRead === true;
                    }).length
                  }
                </span>
              </a>

              <div
                className='dropdown-menu messages messages-block'
                aria-labelledby='messagesMenu'
              >
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    name={notification.name}
                    message={notification.message}
                    time={notification.time}
                    isRead={notification.isRead}
                  />
                ))}
                <Link
                  to='/notifications'
                  className='dropdown-item text-center message'
                >
                  <strong>
                    See All Notifications <i className='fa fa-angle-right'></i>
                  </strong>
                </Link>
              </div>
            </div>

            {/* Languages */}
            <div className='list-inline-item dropdown'>
              <a
                href='#'
                id='languageMenu'
                className='nav-link language dropdown-toggle'
                data-bs-toggle='dropdown'
                role='button'
                aria-expanded='false'
              >
                <span className='d-inline-block'>English</span>
              </a>
              <div className='dropdown-menu' id='languagesCollapse'>
                <a href='#' className='dropdown-item'>
                  <span>Arabic</span>
                </a>
              </div>
            </div>

            {/* Logout */}
            <div className='list-inline-item logout'>
              <a id='logout' href='#!' className='nav-link' onClick={logout}>
                <span className='d-none d-sm-inline'>Logout </span>
                <i className='icon-logout'></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  getAllNotifications: PropTypes.func.isRequired,
  notifications: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  notifications: state.notification.notifications,
});

export default connect(mapStateToProps, { logout, getAllNotifications })(
  Navbar
);
