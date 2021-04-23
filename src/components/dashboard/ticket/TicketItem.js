import React from 'react';
import { Link } from 'react-router-dom';

const TicketItem = ({ ticket }) => {
  const { id, title, content, date, status } = ticket;

  const ticketStatus = () => {
    switch (status) {
      case 'open':
        return <strong className='ticket-status open'>[open]</strong>;
      case 'closed':
        return <strong className='ticket-status closed'>[closed]</strong>;
      case 'resolved':
        return <strong className='ticket-status resolved'>[resolved]</strong>;
      default:
        return <strong className='ticket-status'>[new]</strong>;
    }
  };

  return (
    <Link to={`/tickets/${id}`} className='ticket d-flex align-items-center'>
      <div className='content'>
        <div className='title'>
          <strong>
            {(() => ticketStatus())()}
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
