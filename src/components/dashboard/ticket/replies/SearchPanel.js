import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';

import UsersList from './UsersList';

const SearchPanel = ({ isPrivate, employees, setSelectedEmployees }) => {
  useEffect(() => {}, []);

  const [searchInput, setSearchInput] = useState('');
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
      name: 'Zakerya',
    },
    {
      id: 6,
      name: 'hamed',
    },
  ]);

  const isPrivateStyle = classnames('input-group-text', { active: isPrivate });

  const onChangeSearchHandler = (e) => {
    setSearchInput(e.target.value);

    setFilteredUsers(
      users.filter((user) => {
        return user.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase().trim());
      })
    );
  };

  return (
    <div className='search-block' id='search-panel'>
      <div className='search-inner d-flex align-items-center justify-content-center'>
        <div
          className='close-btn'
          onClick={() => {
            document.querySelector('#search-panel').classList.remove('d-block');
            document.body.classList.remove('no-scroll');
            setSearchInput(''); // Reset
          }}
        >
          Close <i className='fa fa-close'></i>
        </div>

        <div className='search-content'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control search-input'
              placeholder='Search for an employee...'
              value={searchInput}
              onChange={(e) => onChangeSearchHandler(e)}
            />
            <div className={isPrivateStyle}>
              <i className='icon-private '></i>
              Private Reply
            </div>
          </div>
          <div className='search-display'>
            <ul className='list-unstyled mb-0'>
              {searchInput === '' ? (
                users.map((user) => (
                  <UsersList
                    key={user.id}
                    user={user}
                    employees={employees}
                    setSelectedEmployees={setSelectedEmployees}
                  />
                ))
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <UsersList
                    key={user.id}
                    user={user}
                    employees={employees}
                    setSelectedEmployees={setSelectedEmployees}
                  />
                ))
              ) : (
                <strong>
                  Opps we can't find an employee with that name...
                </strong>
              )}
            </ul>
          </div>
          <div className='btn mt-2 w-100 search-open'>Transfer Ticket</div>
        </div>
      </div>
    </div>
  );
};
SearchPanel.propTyeps = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(SearchPanel);
