import { useState } from 'react';
import { connect } from 'react-redux';
import { toDate, format } from 'date-fns';

import Collapse from 'react-bootstrap/Collapse';

const ReplyItem = ({ ticket, reply }) => {
  const [open, setOpen] = useState(false);

  const date = format(toDate(reply.date), 'MMM, d, yyyy, h:mm aa');
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
              {ticket.isResolved ? (
                <strong className='ticket-status closed'>[CLOSED]</strong>
              ) : (
                <strong className='ticket-status'>[OPEN]</strong>
              )}
              {ticket.title}
            </strong>
            <span className='d-block'>by {reply.name}</span>
            <small className='date d-block'>{date}</small>
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
