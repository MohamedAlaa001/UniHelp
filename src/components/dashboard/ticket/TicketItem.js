import React from 'react';
import { Link } from 'react-router-dom';

const TicketItem = ({ ticket }) => {
  const { id, title, content, date, isResolved } = ticket;

  const ticketStatus = isResolved ? (
    <span className='ticket-status closed'>[CLOSED]</span>
  ) : (
    <span className='ticket-status'>[OPEN]</span>
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
