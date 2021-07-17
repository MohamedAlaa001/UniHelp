import React from "react";
import PropTypes from "prop-types";

const replyItem = ({ reply }) => {
  const { is_private, first_name, last_name, content, timestamp } = reply;
  return (
    <div className='ticket-comment-reply' data-is-private={`${is_private}`}>
      <span className='d-block'>
        {is_private && (
          <i
            style={{ color: "var(--color-danger)" }}
            className='icon-private me-1'
          ></i>
        )}
        {`By ${first_name} ${last_name} @ ${timestamp}`}
      </span>
      <div className='ticket-content'>{content}</div>
    </div>
  );
};

replyItem.propTypes = {
  reply: PropTypes.object.isRequired,
};
export default replyItem;
