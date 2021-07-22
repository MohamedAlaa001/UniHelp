import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { navbarHandler } from "../handlersMethods";
// import { setAllNotificationsRead } from "../../actions/notifications";

// import NotificationItem from "../dashboard/notification/NotificationItem";

const Navbar = ({
  logout,
  // setAllNotificationsRead,
  user: { id },
  notifications,
}) => {
  useEffect(() => {
    navbarHandler();
  }, []);

  // const notificationDisplay =
  //   notifications.filter((notification) => {
  //     return notification.isRead === false;
  //   }).length > 0 ? (
  //     <span className='badge bg-danger'>
  //       {
  //         notifications.filter((notification) => {
  //           return notification.isRead === false;
  //         }).length
  //       }
  //     </span>
  //   ) : null;

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
            {/* Messages box */}
            {/* <div className='list-inline-item dropdown'>
              <a
                href='#messageMenu'
                className='nav-link messages-toggle '
                data-bs-toggle='dropdown'
                role='button'
                aria-expanded='false'
              >
                <i className='icon-bell'></i>
                {notificationDisplay}
              </a>

              <div
                className='dropdown-menu messages messages-block'
                aria-labelledby='messagesMenu'
                id='messageMenu'
              >
                <div
                  className='messages-header d-flex justify-content-between align-items-center'
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <span className='lead '>Notifications</span>
                  <span
                    className=''
                    role='button'
                    onClick={() => setAllNotificationsRead()}
                  >
                    Mark all as Read
                  </span>
                </div>
                {notifications.map((notifications) => (
                  <NotificationItem
                    key={notifications.id}
                    notification={notifications}
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
            </div> */}

            {/* Languages */}
            {/* <div className='list-inline-item dropdown'>
              <a
                href='#languageMenu'
                className='nav-link language dropdown-toggle'
                data-bs-toggle='dropdown'
                role='button'
                aria-expanded='false'
              >
                <span className='d-inline-block'>English</span>
              </a>
              <div className='dropdown-menu' id='languageMenu'>
                <span href='#' className='dropdown-item'>
                  <span>Arabic</span>
                </span>
              </div>
            </div> */}

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
  // notifications: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  // notifications: state.notification.notifications,
});

export default connect(mapStateToProps, {
  logout,
  // setAllNotificationsRead,
})(Navbar);
