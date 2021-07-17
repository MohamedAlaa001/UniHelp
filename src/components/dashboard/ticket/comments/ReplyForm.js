import React, { useState } from "react";
import { createCommentReply } from "../../../../actions/tickets";
import Alert from "../../../layout/Alert";
import { connect } from "react-redux";

const ReplyForm = ({
  ticket_id,
  comment_id,
  is_private,
  createCommentReply,
}) => {
  const [isPrivate, setIsPrivate] = useState(is_private);
  const [content, setContent] = useState("");

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (content.trim() === "") {
      return;
    }

    createCommentReply(ticket_id, comment_id, content, isPrivate);
    // reset
    setContent("");
  };

  return (
    <form
      className='ticket-comment-reply-form'
      onSubmit={(e) => onSubmitHandler(e)}
    >
      <Alert />
      <div className='row my-3'>
        <div className='col-sm-12 col-md-10 col-lg-9'>
          <div className='form-floating'>
            <textarea
              className='form-control'
              value={content}
              placeholder=' '
              onChange={(e) => onChangeHandler(e)}
            ></textarea>
            <label>Reply Content...</label>
          </div>
        </div>
        <div className='col'>
          <div className='d-grid mx-auto mt-2 mt-md-0 gap-3'>
            <div>
              <input
                type='checkbox'
                className='btn-check'
                checked={isPrivate}
                onChange={() => {
                  if (!is_private) {
                    setIsPrivate(!isPrivate);
                  }
                }}
              />
              <label
                className='btn btn-outline-private'
                style={{ width: "100%" }}
                onClick={() => {
                  if (!is_private) {
                    setIsPrivate(!isPrivate);
                  }
                }}
              >
                Private Reply
                <i className='icon-private ms-1'></i>
              </label>
            </div>
            <button
              type='submit'
              className='btn btn-primary'
              disabled={!content.trim() === ""}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default connect(null, { createCommentReply })(ReplyForm);
