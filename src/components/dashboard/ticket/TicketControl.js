import { Fragment } from 'react';
import { connect } from 'react-redux';

import { changeTicketStatus } from '../../../actions/tickets';

const TicketControl = ({ ticket, role, changeTicketStatus }) => {
  return (
    <Fragment>
      {role !== 'student' &&
      (ticket.status === 'open' ||
        ticket.status === 'new' ||
        ticket.status === 'pending') ? (
        <div className='mb-3'>
          {/* Employee */}
          {/* if open -> mark resolved */}
          {ticket.status === 'open' ? (
            <input
              type='button'
              className='btn btn-outline-info me-3'
              value='Mark As Resolved'
              onClick={() => changeTicketStatus(ticket.ticket_id, 'pending')}
            />
          ) : null}

          {/* Master */}
          {ticket.status === 'new' && role === 'master' ? (
            <input
              type='button'
              className='btn btn-outline-success me-3'
              value='Approve Ticket'
              onClick={() => changeTicketStatus(ticket.ticket_id, 'open')}
            />
          ) : null}

          {/* Mark As Closed if any state other than pending resolve */}
          {ticket.status !== 'pending' ? (
            <input
              type='button'
              className='btn btn-outline-danger'
              value='Mark As Closed'
              onClick={() => changeTicketStatus(ticket.ticket_id, 'closed')}
            />
          ) : null}

          {ticket.status === 'pending' && role === 'master' ? (
            <div>
              <input
                type='button'
                className='btn btn-outline-primary me-3'
                value='Resolve Ticket'
                onClick={() => changeTicketStatus(ticket.ticket_id, 'resolved')}
              />
              <input
                type='button'
                className='btn btn-outline-danger'
                value='Mark As Unresolved'
                onClick={() => changeTicketStatus(ticket.ticket_id, 'open')}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </Fragment>
  );
};

export default connect(null, { changeTicketStatus })(TicketControl);
