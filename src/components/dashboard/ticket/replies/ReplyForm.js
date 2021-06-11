import { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { setAlert } from '../../../../actions/alert';
import { createReply } from '../../../../actions/tickets';

const ReplyForm = ({ ticket, user: { role }, createReply, setAlert }) => {
  const [replyData, setReplyData] = useState({
    content: '',
    searchInput: '',
    is_private: false,
    errors: [],
  });
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Mostafa',
    },
    {
      id: 2,
      name: 'Mohamed',
    },
    {
      id: 3,
      name: 'Ahmed',
    },
    {
      id: 4,
      name: 'mahmoud',
    },
    {
      id: 5,
      name: 'Zakerya El derdar',
    },
    {
      id: 6,
      name: 'Zakerya El derdar',
    },
    {
      id: 7,
      name: 'Zakerya El derdar',
    },
    {
      id: 8,
      name: 'Zakerya El derdar',
    },
    {
      id: 9,
      name: 'Zakerya El derdar',
    },
    {
      id: 10,
      name: 'Zakerya El derdar',
    },
  ]);

  const { content, searchInput, is_private, errors } = replyData;

  const searchBlock = classNames('search-input form-control form-control-lg', {
    active: searchInput.trim().length > 2,
  });

  const onChangeContentHandler = (e) => {
    setReplyData({
      ...replyData,
      content: e.target.value,
    });
  };

  const onChangeSearchHandler = (e) => {
    setReplyData({
      ...replyData,
      searchInput: e.target.value,
    });

    setFilteredUsers(
      users.filter((user) => {
        return user.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase().trim());
      })
    );
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
      searchInput: '',
      is_private: false,
      errors: [],
    });
    document.getElementById('replies').scrollIntoView();
  };

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
          </div>
          <div className='col'>
            {/* Search FOR EMPLOYEES ONLY*/}
            {role !== 'student' ? (
              <div>
                <div className='mb-3 dropdown'>
                  <a
                    href='#searchUsers'
                    className='dropdown-toggle'
                    data-bs-toggle='dropdown'
                    role='button'
                    aria-expanded='false'
                  >
                    <strong>Search</strong>
                  </a>
                  <div
                    className='mb-3 dropdown-menu  search-block p-3'
                    id='searchUsers'
                  >
                    <label className='form-label'>Search...</label>
                    <input
                      type='text'
                      className={searchBlock}
                      placeholder=''
                      value={searchInput}
                      onChange={(e) => onChangeSearchHandler(e)}
                    />

                    <div className='search-display'>
                      <ul className='list-unstyled mb-0'>
                        {filteredUsers.length > 0 ? (
                          filteredUsers.map((user) => (
                            <li key={user.id}>
                              <strong>{user.name}</strong>
                            </li>
                          ))
                        ) : (
                          <strong>Nothing Found...</strong>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Search */}
                <div className='mb-3 search-block'>
                  <label className='form-label'>Forward ticket to:</label>
                  <input
                    type='text'
                    className={searchBlock}
                    placeholder='Enter employee name...'
                    value={searchInput}
                    onChange={(e) => onChangeSearchHandler(e)}
                  />
                  <div className='search-display dropdown-menu'>
                    <ul className='list-unstyled mb-0'>
                      {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                          <li key={user.id}>
                            <strong>{user.name}</strong>
                          </li>
                        ))
                      ) : (
                        <strong>Nothing Found...</strong>
                      )}
                    </ul>
                  </div>
                </div>
                {/* Private Reply */}
                <div className='form-check form-switch'>
                  <label className='form-check-label ms-1'>
                    Private Forward
                  </label>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    checked={is_private}
                    onChange={() =>
                      setReplyData({
                        ...replyData,
                        is_private: !is_private,
                      })
                    }
                  />
                </div>
              </div>
            ) : null}

            {/* Submit */}
            <input
              type='submit'
              className='btn btn-outline-primary w-100'
              value='Submit'
            />
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
