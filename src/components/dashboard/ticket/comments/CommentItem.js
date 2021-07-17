import { useState } from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import Collapse from "react-bootstrap/Collapse";
import TicketStatus from "../TicketStatus";
import ReplyItem from "./replyItem";
import ReplyForm from "./ReplyForm";

const CommentItem = ({ ticket, comment }) => {
  const [open, setOpen] = useState(false);

  const privateCommentStyle = classnames("comment d-flex flex-column mb-3", {
    private: comment.is_private,
  });

  return (
    <div className={privateCommentStyle}>
      <div className='content'>
        <div
          className='comment-header'
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <div className='title no-margin-bottom'>
            <strong>
              {comment.is_private ? (
                <strong className='text-danger me-1'>
                  <i className='icon-private'></i>
                </strong>
              ) : null}
              <strong className='me-1'>Re:</strong>

              <TicketStatus status={ticket.status} title={ticket.title} />
            </strong>
            <span className='d-block'>
              by {comment.first_name} {comment.last_name}
            </span>
            <small className='date d-block'>{comment.timestamp}</small>
          </div>
        </div>
      </div>
      <div>
        <Collapse in={open}>
          <div>
            <p className='ticket-content'>{comment.content}</p>
            {comment.replies.length > 0 && (
              <div className='ticket-comment-replies ms-0 ms-md-5'>
                <div className='title'>
                  <strong>Replies:</strong>
                </div>
                {comment.replies.map((reply) => (
                  <ReplyItem key={reply.reply_id} reply={reply} />
                ))}
              </div>
            )}
            {!ticket.readOnly && (
              <ReplyForm
                ticket_id={ticket.ticket_id}
                comment_id={comment.reply_id}
                is_private={comment.is_private}
              />
            )}
          </div>
        </Collapse>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(CommentItem);
