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
            <h3>{category}</h3>
          </div>
          <div className='perms-category'>
            <h5 className='d-flex align-item-center justify-content-between '>
              <span className='perms-category-role'>Approve Ticket</span>
              <div className='form-check form-switch'>
                <input type='checkbox' className='form-check-input' />
              </div>
            </h5>
            <h5 className='d-flex align-item-center justify-content-between'>
              <span className='perms-category-role'>Resolve Ticket</span>
              <div className='form-check form-switch'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  defaultChecked
                />
              </div>
            </h5>
            <h5 className='d-flex align-item-center justify-content-between'>
              <span className='perms-category-role'>View System Logs</span>
              <div className='form-check form-switch'>
                <input type='checkbox' className='form-check-input' disabled />
              </div>
            </h5>
            <h5 className='d-flex align-item-center justify-content-between'>
              <span className='perms-category-role'>Edit Roles</span>
              <div className='form-check form-switch'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  checked
                  disabled
                />
              </div>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermsRoles;
