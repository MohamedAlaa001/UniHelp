import { useState } from 'react';
import classNames from 'classnames';

const ReplyFormSearch = () => {
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
      name: 'Zakerya El derdar',
    },
  ]);

  const searchBlock = classNames('search-input form-control form-control-lg', {
    active: searchInput.trim().length > 2,
  });

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
  );
};

export default ReplyFormSearch;
