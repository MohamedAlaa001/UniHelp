import React from "react";

const AddUserRole = ({ role, onRoleChange }) => {
  return (
    <div className='dropdown mb-3'>
      <a
        href='#roleMenu'
        className='dropdown-toggle'
        data-bs-toggle='dropdown'
        role='button'
        aria-expanded='false'
      >
        <span style={{ textTransform: "capitalize" }}>
          {role === "none" ? "Choose User Role" : `${role}`}
        </span>
      </a>
      <div className='dropdown-menu' id='roleMenu'>
        <button
          className='dropdown-item'
          type='button'
          value='master'
          onClick={onRoleChange}
        >
          Master
        </button>
        <button
          className='dropdown-item'
          type='button'
          value='employee'
          onClick={onRoleChange}
        >
          Employee
        </button>
        <button
          className='dropdown-item'
          type='button'
          value='student'
          onClick={onRoleChange}
        >
          Student
        </button>
      </div>
    </div>
  );
};

export default AddUserRole;
