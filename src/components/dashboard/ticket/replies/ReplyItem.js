import { useState } from 'react';
import { connect } from 'react-redux';

import Collapse from 'react-bootstrap/Collapse';

const ReplyItem = ({ ticket, reply }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='reply d-flex flex-column mb-3'>
      <div className='content'>
        <div
          className='reply-header'
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <div className='title no-margin-bottom'>
            <strong>
              <strong className='me-1'>Re:</strong>
              {ticket.status === 'open' ? (
                <strong className='ticket-status open'>[open]</strong>
              ) : ticket.status === 'closed' ? (
                <strong className='ticket-status closed'>[closed]</strong>
              ) : ticket.status === 'pending' ? (
                <strong className='ticket-status pending resolve'>
                  [pending Resolve]
                </strong>
              ) : ticket.status === 'resolved' ? (
                <strong className='ticket-status resolved'>[resolved]</strong>
              ) : (
                <strong className='ticket-status'>[new]</strong>
              )}
              {ticket.title}
            </strong>
            <span className='d-block'>
              by {reply.first_name} {reply.last_name}
            </span>
            <small className='date d-block'>{reply.timestamp}</small>
          </div>
        </div>
      </div>
      <div>
        <Collapse in={open}>
          <div>
            <p className='ticket-content'>{reply.content}</p>
          </div>
        </Collapse>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ReplyItem);
