import { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { setAlert } from '../../../../actions/alert';
import { createReply } from '../../../../actions/tickets';
import ReplyFormSearch from './ReplyFormSearch';

const ReplyForm = ({ ticket, user: { role }, createReply, setAlert }) => {
  const [replyData, setReplyData] = useState({
    content: '',
    is_private: false,
    errors: [],
  });
  const [filteredUsers, setFilteredUsers] = useState([]);

  const { content, is_private, errors } = replyData;

  const onChangeContentHandler = (e) => {
    setReplyData({
      ...replyData,
      content: e.target.value,
    });
  };

  const onSubmitReplyHandler = (e) => {
    e.preventDefault();

    // form validation
    if (content.trim() === '') {
      errors.push('Reply Content is Required');
    }

    setReplyData({
      ...replyData,
      errors,
    });

    if (errors.length > 0) {
      // scroll up
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      errors.forEach((err) => {
        setAlert(err, 'danger', false, 3000);
      });

      // reset errors
      setReplyData({
        ...replyData,
        errors: [],
      });
      return;
    }

    const reply = {
      ticket_id: ticket.ticket_id,
      content,
      is_private,
    };
    // Submit Reply
    createReply(reply);

    // Resest Form
    setReplyData({
      content: '',
      is_private: false,
      errors: [],
    });
    document.getElementById('replies').scrollIntoView();
  };

  const isPrivateLabelStyle = classnames('form-check-label ms-1', {
    active: is_private,
  });
  const isPrivateInputStyle = classnames('form-check-input', {
    active: is_private,
  });

  return (
    <Fragment>
      <form onSubmit={(e) => onSubmitReplyHandler(e)}>
        <div className='row'>
          <div className='col-sm-12 col-md-8 col-lg-9'>
            <div className='form-floating mb-3 '>
              <textarea
                className='form-control input-material '
                name='content'
                value={content}
                placeholder=''
                onChange={(e) => onChangeContentHandler(e)}
              ></textarea>
              <label htmlFor='content' className='label-material'>
                Reply's Content
              </label>
            </div>
            {/* Submit Reply*/}
            <div className='d-flex mb-3'>
              <button
                type='submit'
                className='btn btn-primary flex-grow-1 me-1'
              >
                Submit Reply
              </button>
              {role !== 'student' ? (
                <div className='ms-1'>
                  <input
                    type='checkbox'
                    className='btn-check'
                    checked={is_private}
                    onChange={() =>
                      setReplyData({
                        ...replyData,
                        is_private: !is_private,
                      })
                    }
                  />
                  <label
                    className='btn btn-outline-private'
                    onClick={() =>
                      setReplyData({
                        ...replyData,
                        is_private: !is_private,
                      })
                    }
                  >
                    Private Reply
                    <i
                      className='icon-private ms-2'
                      style={{
                        transform: 'none',
                      }}
                    ></i>
                  </label>
                </div>
              ) : null}
            </div>
          </div>
          <div className='col'>
            {/* Search FOR EMPLOYEES ONLY*/}
            {role !== 'student' ? (
              <div>
                {/* Search */}
                <ReplyFormSearch isPrivate={is_private} />
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </Fragment>
  );
};

ReplyForm.propTypes = {
  user: PropTypes.object.isRequired,
  ticket: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  ticket: state.tickets.ticket,
});

export default connect(mapStateToProps, { setAlert, createReply })(ReplyForm);
