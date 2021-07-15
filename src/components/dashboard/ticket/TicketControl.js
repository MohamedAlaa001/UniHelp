import { Fragment } from "react";
import { connect } from "react-redux";

import { changeTicketStatus } from "../../../actions/tickets";

const TicketControl = ({ ticket, role, changeTicketStatus }) => {
  return (
    <Fragment>
      {role !== "student" &&
        (ticket.status === "pending_master" ? (
          <div className='mb-3 d-grid gap-2 d-md-block'>
            <input
              type='button'
              className='btn btn-outline-info me-md-3'
              value='Receive Ticket'
              onClick={() =>
                changeTicketStatus(ticket.ticket_id, "master_received")
              }
            />
          </div>
        ) : (
          ticket.status === "open" && (
            <div className='mb-3 d-grid gap-2 d-md-block'>
              <input
                type='button'
                className='btn btn-outline-primary me-md-3'
                value='Mark as resolved'
                onClick={() => changeTicketStatus(ticket.ticket_id, "resolved")}
              />
              <input
                type='button'
                className='btn btn-outline-danger me-md-3'
                value='Close / Reject'
                onClick={() => changeTicketStatus(ticket.ticket_id, "rejected")}
              />
            </div>
          )
        ))}
    </Fragment>
  );
};

export default connect(null, { changeTicketStatus })(TicketControl);

/*
<div className='mb-3 d-grid gap-2 d-md-block'>
              <input
                type='button'
                className='btn btn-outline-info me-md-3'
                value='Receive Ticket'
                onClick={() =>
                  changeTicketStatus(ticket.ticket_id, "master_received")
                }
              />
            </div>
*/
/*
<Fragment>
              <div className='mb-3 d-grid gap-2 d-md-block'>
                <input
                  type='button'
                  className='btn btn-outline-info me-md-3'
                  value='Mark as resolved'
                  onClick={() =>
                    changeTicketStatus(ticket.ticket_id, "resolved")
                  }
                />
              </div>
              <div className='mb-3 d-grid gap-2 d-md-block'>
                <input
                  type='button'
                  className='btn btn-outline-info me-md-3'
                  value='Close / Reject'
                  onClick={() =>
                    changeTicketStatus(ticket.ticket_id, "rejected")
                  }
                />
              </div>
            </Fragment>
*/
