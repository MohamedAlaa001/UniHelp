import { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CommentItem from "./CommentItem";

const Comments = ({ ticket }) => {
  return ticket.comments.length > 0 ? (
    <Fragment>
      <div className='title' id='comments'>
        <strong>Comments</strong>
      </div>

      <div className='comments'>
        {ticket.comments.map((comment) => (
          <CommentItem
            ticket={ticket}
            comment={comment}
            key={comment.reply_id}
          />
        ))}
      </div>
    </Fragment>
  ) : null;
};
Comments.propTypes = {
  ticket: PropTypes.object.isRequired,
  comments: PropTypes.array,
};

const mapStateToProps = (state) => ({
  ticket: state.tickets.ticket,
});

export default connect(mapStateToProps)(Comments);
