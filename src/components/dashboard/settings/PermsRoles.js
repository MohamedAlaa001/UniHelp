import { useState } from 'react';

const PermsRoles = () => {
  const [category, setCategory] = useState('Super User');

  const categoryClickHandler = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className='card'>
      <h3 className='perms-title'>Roles & Permissions</h3>
      <div className='card-body p-3'>
        <div className='dropdown mb-3'>
          <a
            href='#'
            id='rolesPerms'
            className='dropdown-toggle'
            data-bs-toggle='dropdown'
            role='button'
            aria-expanded='false'
          >
            <span>{category}</span>
          </a>
          <div className='dropdown-menu' id='rolesPerms'>
            <button
              className='dropdown-item'
              type='button'
              value='Super User'
              onClick={(e) => categoryClickHandler(e)}
            >
              Super User
            </button>
            <button
              className='dropdown-item'
              type='button'
              value='Master User'
              onClick={(e) => categoryClickHandler(e)}
            >
              Master User
            </button>
            <button
              className='dropdown-item'
              type='button'
              value='Employee'
              onClick={(e) => categoryClickHandler(e)}
            >
              Employee
            </button>
            <button
              className='dropdown-item'
              type='button'
              value='Studnet'
              onClick={(e) => categoryClickHandler(e)}
            >
              Studnet
            </button>
          </div>
        </div>
        <div className='perms-body'>
          <div className='title'>
            <strong>{category}</strong>
          </div>
          <div className='perms-category'>{category}</div>
        </div>
      </div>
    </div>
  );
};

export default PermsRoles;
