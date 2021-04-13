import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllNotifications } from '../../../actions/notifications';

import NotificationItem from './NotificationItem';

const Notifications = ({ notifications }) => {
  return (
    <Fragment>
      {/* Page Header */}
      <div className='page-header no-margin-bottom'>
        <div className='container-fluid'>
          <h2 className='h5 no-margin-bottom'>Notifications</h2>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className='container-fluid'>
        <ul className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/home'>Home</Link>
          </li>
          <li className='breadcrumb-item active'>Notifications</li>
        </ul>
      </div>
      {/* Page Section */}
      <section className='no-padding-top'>
        <div className='container-fluid'>
          <div className='messages-block block'>
            <div className='messages'>
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
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: state.notification.notifications,
});

export default connect(mapStateToProps, { getAllNotifications })(Notifications);
