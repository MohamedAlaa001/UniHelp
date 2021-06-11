import React from 'react';

const TicketStatus = ({ status, title }) => {
  return (
    <strong>
      {status === 'open' ? (
        <strong className='ticket-status open'>[open]</strong>
      ) : status === 'closed' ? (
        <strong className='ticket-status closed'>[closed]</strong>
      ) : status === 'pending' ? (
        <strong className='ticket-status pending'>[pending Resolve]</strong>
      ) : status === 'resolved' ? (
        <strong className='ticket-status resolved'>[resolved]</strong>
      ) : (
        <strong className='ticket-status'>[new]</strong>
      )}
      {title}
    </strong>
  );
};

export default TicketStatus;
