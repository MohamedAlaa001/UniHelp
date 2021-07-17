import React from "react";

const TicketStatus = ({ status, title, readOnly }) => {
  return (
    <strong>
      {readOnly && (
        <strong style={{ color: "var(--bs-danger)" }}>[ARCHIVE]</strong>
      )}
      {status === "pending_master" ? (
        <strong className='ticket-status'>[Pending Master]</strong>
      ) : status === "open" ? (
        <strong className='ticket-status open'>[open]</strong>
      ) : status === "rejected" ? (
        <strong className='ticket-status rejected'>[rejected]</strong>
      ) : (
        status === "resolved" && (
          <strong className='ticket-status resolved'>[resolved]</strong>
        )
      )}
      {title}
    </strong>
  );
};

export default TicketStatus;
