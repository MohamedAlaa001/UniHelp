import { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ReplyItem from './ReplyItem';

const Replies = ({ ticket }) => {
  return ticket.replies.length > 0 ? (
    <Fragment>
      <div className='title' id='replies'>
        <strong>Replies</strong>
      </div>

      <div className='replies'>
        {ticket.replies.map((reply) => (
          <ReplyItem ticket={ticket} reply={reply} key={reply.reply_id} />
        ))}
      </div>
    </Fragment>
  ) : null;
};
Replies.propTypes = {
  ticket: PropTypes.object.isRequired,
  replies: PropTypes.array,
};

const mapStateToProps = (state) => ({
  ticket: state.tickets.ticket,
});

export default connect(mapStateToProps)(Replies);
