import React from "react";
import { Link } from "react-router-dom";

import TicketStatus from "./TicketStatus";

const TicketItem = ({ ticket }) => {
  const {
    ticket_id,
    student,
    master,
    category,
    title,
    content,
    timestamp,
    status,
  } = ticket;

  return (
    <Link
      to={`/tickets/${ticket_id}`}
      className='ticket d-flex align-items-center'
      data-filter='false'
      data-status={status}
    >
      <div className='content'>
        <div className='title'>
          <TicketStatus
            master={master}
            status={status}
            title={title}
            readOnly={ticket.readOnly}
          />
          {master !== "null" && (
            <strong className='ticket-master d-block'>{`Ticket Master: ${master}`}</strong>
          )}
          <span className='d-block'>{ticket_id}</span>
          <span className='d-block'>To {category}</span>
          <span className='d-block'>
            By {student.first_name} {student.last_name}
          </span>
        </div>
        <span className='d-block text-truncate'>{content}</span>
        <small className='date d-block'>{timestamp}</small>
      </div>
    </Link>
  );
};

export default TicketItem;
