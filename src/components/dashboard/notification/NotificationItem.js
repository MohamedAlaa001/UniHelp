import React from 'react';

import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setNotificationRead } from '../../../actions/notifications';

// Date & Time
const NotificationItem = ({ notification, setNotificationRead, user }) => {
  const { id, name, message, date, isRead } = notification;

  const notifyClass = classnames('content', {
    'mark-unRead': !isRead,
  });

  return (
    <Link
      to={`/notifications/${id}`}
      className='message d-flex align-items-center'
      onClick={() =>
        !isRead ? setNotificationRead({ user, ...notification }) : null
      }
    >
      <div className={notifyClass}>
        <strong className='d-block'>{name}</strong>
        <span className='d-block text-truncate'>{message}</span>
        <small className='date d-block'>{date}</small>
      </div>
    </Link>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user.id,
});

export default connect(mapStateToProps, { setNotificationRead })(
  NotificationItem
);
