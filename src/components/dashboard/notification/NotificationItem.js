import React from 'react';

import classnames from 'classnames';
import { Link } from 'react-router-dom';

// Date & Time
const NotificationItem = ({ id, name, message, time, isRead }) => {
  const notifyClass = classnames('content', {
    unRead: isRead,
  });
  return (
    <Link
      to={`/notifications/${id}`}
      className='message d-flex align-items-center'
    >
      <div className={notifyClass}>
        <strong className='d-block'>{name}</strong>
        <span className='d-block'>{message}</span>
        <small className='date d-block'>{time}</small>
      </div>
    </Link>
  );
};

export default NotificationItem;
