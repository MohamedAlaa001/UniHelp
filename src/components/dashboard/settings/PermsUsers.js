import React from 'react';

const PermsUsers = () => {
  return (
    <div className='card'>
      <h3 className='perms-title'>Users</h3>
      <div className='card-body p-3'>
        <div className='row mb-3'>
          <label className='col-sm-3 col-form-label '>Search:</label>
          <div className='col-sm-9'>
            <input type='text' className='form-control' />
          </div>
        </div>
        <hr />
        <div className='perms-body'>
          <div className='title'>
            <strong>User Name</strong>
          </div>
          <div className='perms-item'>
            <p className=''>Super User</p>
          </div>
          <div className='perms-item'>
            <p className=''>Master User</p>
          </div>
          <div className='perms-item'>
            <p className=''>Employee</p>
          </div>
          <div className='perms-item'>
            <p className=''>Studnet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermsUsers;
