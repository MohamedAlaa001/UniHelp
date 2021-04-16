import React from 'react';
// import classnames from 'classnames';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TicketItem = ({ ticket }) => {
  const { ticketId, title, content, date, isResolved } = ticket;

  const ticketStatus = isResolved ? (
    <span className='ticket-status resolved'>[RESOLVED]</span>
  ) : (
    <span className='ticket-status'>[OPEN]</span>
  );

  return (
    <Link
      to={`/tickets/${ticketId}`}
      className='ticket d-flex align-items-center'
    >
      <div className='content'>
        <div className='title'>
          <strong>
            {ticketStatus}
            {title}
          </strong>
        </div>
        <span className='d-block text-truncate'>{content}</span>
        <small className='date d-block'>{date}</small>
      </div>
    </Link>
  );
};

export default TicketItem;
