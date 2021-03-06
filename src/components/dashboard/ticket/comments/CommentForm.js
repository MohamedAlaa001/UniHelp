import { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setAlert } from "../../../../actions/alert";
import { createComment } from "../../../../actions/tickets";
import { setConfirmation } from "../../../../actions/confirmation";

import TicketTransfer from "./TicketTransfer";

const CommentForm = ({
  ticket,
  user: { role },
  createComment,
  setAlert,
  setConfirmation,
}) => {
  const [commentData, setCommentData] = useState({
    content: "",
    is_private: false,
    errors: [],
  });
  const [isConfirm, setIsConfirm] = useState(false);
  useEffect(() => {
    if (isConfirm) {
      onSubmitReplyHandler();
    }
    // eslint-disable-next-line
  }, [isConfirm]);
  // const [filteredUsers, setFilteredUsers] = useState([]);

  const { content, is_private, errors } = commentData;

  const onChangeContentHandler = (e) => {
    setCommentData({
      ...commentData,
      content: e.target.value,
    });
  };

  const onSubmitReplyHandler = () => {
    // e.preventDefault();

    // form validation
    if (content.trim() === "") {
      errors.push("Reply Content is Required");
    }

    setCommentData({
      ...commentData,
      errors,
    });

    if (errors.length > 0) {
      // scroll up
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      errors.forEach((err) => {
        setAlert(err, "danger", false, 3000);
      });

      // reset errors
      setCommentData({
        ...commentData,
        errors: [],
      });
      return;
    }

    const comment = {
      ticket_id: ticket.ticket_id,
      content,
      is_private,
    };
    // Submit Reply
    createComment(comment);

    // Resest Form
    setCommentData({
      content: "",
      is_private: false,
      errors: [],
    });
    setIsConfirm(false);
    // Scroll to bottom
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <Fragment>
      {/* onSubmit={(e) => onSubmitReplyHandler(e)} */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setConfirmation(
            "Ticket Comment",
            `Are you sure you want to submit this ${
              is_private ? "private" : ""
            } comment`,
            setIsConfirm
          );
        }}
      >
        <div className='row'>
          <div className='col-sm-12 col-md-8 col-lg-9'>
            <div className='form-floating mb-3 '>
              <textarea
                className='form-control input-material '
                name='content'
                value={content}
                placeholder=' '
                onChange={(e) => onChangeContentHandler(e)}
              ></textarea>
              <label htmlFor='content' className='label-material'>
                Comment's Content
              </label>
            </div>
            {/* Submit Comment*/}
            <div className='d-flex mb-3'>
              <button
                type='submit'
                className='btn btn-primary flex-grow-1 me-1'
              >
                Submit Comment
              </button>
              {role !== "student" ? (
                <div className='ms-1'>
                  <input
                    type='checkbox'
                    className='btn-check'
                    checked={is_private}
                    onChange={() =>
                      setCommentData({
                        ...commentData,
                        is_private: !is_private,
                      })
                    }
                  />
                  <label
                    className='btn btn-outline-private'
                    onClick={() =>
                      setCommentData({
                        ...commentData,
                        is_private: !is_private,
                      })
                    }
                  >
                    Private Comment
                    <i
                      className='icon-private ms-2'
                      style={{
                        transform: "none",
                      }}
                    ></i>
                  </label>
                </div>
              ) : null}
            </div>
          </div>
          <div className='col'>
            {/* Search FOR EMPLOYEES ONLY*/}
            {role !== "student" && ticket.status === "open" ? (
              <div>
                {/* Search */}
                <TicketTransfer isPrivate={is_private} />
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </Fragment>
  );
};

CommentForm.propTypes = {
  user: PropTypes.object.isRequired,
  ticket: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  ticket: state.tickets.ticket,
});

export default connect(mapStateToProps, {
  setAlert,
  createComment,
  setConfirmation,
})(CommentForm);
