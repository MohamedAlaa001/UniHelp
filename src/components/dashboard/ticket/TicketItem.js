import React from 'react';
import { Link } from 'react-router-dom';

const TicketItem = ({ ticket }) => {
  const { id, title, content, date, isResolved } = ticket;

  const ticketStatus = isResolved ? (
    <strong className='ticket-status closed'>[CLOSED]</strong>
  ) : (
    <strong className='ticket-status'>[OPEN]</strong>
  );

  return (
    <Link to={`/tickets/${id}`} className='ticket d-flex align-items-center'>
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
