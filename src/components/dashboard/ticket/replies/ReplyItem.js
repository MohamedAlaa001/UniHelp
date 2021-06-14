import { useState } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Collapse from 'react-bootstrap/Collapse';
import TicketStatus from '../TicketStatus';

const ReplyItem = ({ ticket, reply }) => {
  const [open, setOpen] = useState(false);

  const privateReplyStyle = classnames('reply d-flex flex-column mb-3', {
    private: reply.is_private,
  });

  return (
    <div className={privateReplyStyle}>
      <div className='content'>
        <div
          className='reply-header'
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <div className='title no-margin-bottom'>
            <strong>
              {reply.is_private ? (
                <strong className='text-danger me-1'>
                  <i className='icon-private'></i>
                </strong>
              ) : null}
              <strong className='me-1'>Re:</strong>

              <TicketStatus status={ticket.status} title={ticket.title} />
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
