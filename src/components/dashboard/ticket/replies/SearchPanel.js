import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';

import UsersList from './UsersList';

import { setConfirmation } from '../../../../actions/confirmation';

const SearchPanel = ({
  isPrivate,
  selectedEmployee,
  setSelectedEmployee,
  setConfirmation,
}) => {
  const [isConfirm, setIsConfirm] = useState(false);
  useEffect(() => {
    if (isConfirm) {
      transferTicket();
    }
    // eslint-disable-next-line
  }, [isConfirm]);

  const [searchInput, setSearchInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Marwa Martins',
    },
    {
      id: 2,
      name: 'Percy Owen',
    },
    {
      id: 3,
      name: 'Warren Daugherty',
    },
    {
      id: 4,
      name: 'Shanaya Arroyo',
    },
    {
      id: 5,
      name: 'Elliott Davey',
    },
    {
      id: 6,
      name: 'Stephanie Gilbert',
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

  const transferTicket = () => {
    console.log(selectedEmployee);
    // Reset Confirmation dialogue
    setIsConfirm(false);
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
          {selectedEmployee !== null ? (
            <strong className='ms-2 mt-2'>* {selectedEmployee.name}</strong>
          ) : null}
          <div className='search-display'>
            <ul className='list-unstyled mb-0'>
              {searchInput === '' ? (
                users.map((user) => (
                  <UsersList
                    key={user.id}
                    user={user}
                    selectedEmployee={selectedEmployee}
                    setSelectedEmployee={setSelectedEmployee}
                  />
                ))
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <UsersList
                    key={user.id}
                    user={user}
                    selectedEmployee={selectedEmployee}
                    setSelectedEmployee={setSelectedEmployee}
                  />
                ))
              ) : (
                <strong>
                  Opps we can't find an employee with that name...
                </strong>
              )}
            </ul>
          </div>
          {/* {selectedEmployee !== null ? (
            // <Confirmation
            //   title='Transfer Request'
            //   message={`Are you sure you want to transfer ticket to ${selectedEmployee.name}`}
            //   setIsConfirm={setIsConfirm}
            // />
            <Confirmation />
          ) : null} */}

          {selectedEmployee !== null ? (
            <div
              className='btn mt-2 w-100 search-open'
              onClick={() => {
                // document
                // .querySelector('.confirmation-window-wrapper')
                // .classList.add('d-block');
                setConfirmation(
                  'Transfer Request',
                  `Are you sure you want to transfer ticket to ${selectedEmployee.name}`,
                  setIsConfirm
                );
              }}
            >
              Transfer Ticket
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
SearchPanel.propTyeps = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setConfirmation })(SearchPanel);
