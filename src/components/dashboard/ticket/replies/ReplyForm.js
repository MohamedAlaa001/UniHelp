import { Fragment, useState } from 'react';
import classNames from 'classnames';

const ReplyForm = () => {
  const [replyData, setReplyData] = useState({
    content: '',
    searchInput: '',
    isPrivate: false,
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

  const { content, searchInput, isPrivate } = replyData;

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

  const searchBlock = classNames('search-input form-control form-control-lg', {
    active: searchInput.trim().length > 2,
  });

  return (
    <Fragment>
      <form>
        <div className='row'>
          <div className='col-sm-12 col-md-7 col-lg-8'>
            <div className='form-floating mb-3 '>
              <textarea
                className='form-control input-material '
                name='content'
                value={content}
                placeholder=''
                onChange={(e) => onChangeContentHandler(e)}
              ></textarea>
              <label htmlFor='content' className='label-material'>
                Forward's Content
              </label>
            </div>
          </div>
          <div className='col'>
            {/* Search */}
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
              <label className='form-label'>Forward to:</label>
              <input
                type='text'
                className={searchBlock}
                placeholder='Enter their name...'
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
              <label className='form-check-label ms-1'>Private Forward</label>
              <input
                type='checkbox'
                className='form-check-input'
                checked={isPrivate}
                onChange={() =>
                  setReplyData({
                    ...replyData,
                    isPrivate: !isPrivate,
                  })
                }
              />
            </div>
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

export default ReplyForm;
