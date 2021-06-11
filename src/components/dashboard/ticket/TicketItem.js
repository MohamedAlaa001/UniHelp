import React from 'react';
import { Link } from 'react-router-dom';

import TicketStatus from './TicketStatus';

const TicketItem = ({ ticket }) => {
  const { ticket_id, category, title, content, timestamp, status } = ticket;

  return (
    <Link
      to={`/tickets/${ticket_id}`}
      className='ticket d-flex align-items-center'
      data-filter='false'
      data-status={status}
    >
      <div className='content'>
        <div className='title'>
          <TicketStatus status={status} title={title} />
          <span className='d-block'>{ticket_id}</span>
          <span className='d-block'>To {category}</span>
        </div>
        <span className='d-block text-truncate'>{content}</span>
        <small className='date d-block'>{timestamp}</small>
      </div>
    </Link>
  );
};

export default TicketItem;
