import React from 'react';

import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setNotificationRead } from '../../../actions/notifications';

// Date & Time
const NotificationItem = ({
  id,
  name,
  message,
  time,
  isRead,
  setNotificationRead,
  user,
}) => {
  const notifyClass = classnames('content', {
    'mark-unRead': !isRead,
  });

  const handleClick = () => {
    if (!isRead) {
      const notification = {
        id,
        user: user.id,
        name,
        message,
        time,
        isRead,
      };
      setNotificationRead(id, notification);
    }
  };
  return (
    <Link
      to={`/notifications/${id}`}
      className='message d-flex align-items-center'
      onClick={() => handleClick()}
    >
      <div className={notifyClass}>
        <strong className='d-block'>{name}</strong>
        <span className='d-block text-truncate'>{message}</span>
        <small className='date d-block'>{time}</small>
      </div>
    </Link>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { setNotificationRead })(
  NotificationItem
);
