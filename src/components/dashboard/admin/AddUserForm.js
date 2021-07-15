import React from "react";
import FormInput from "../../layout/FormInput";
import AddUserRole from "./AddUserRole";

const AddUserForm = ({ formData, onTextChange, onRoleChange, createUser }) => {
  const { username, password, confirmPassword, first_name, last_name, role } =
    formData;

  return (
    <form autoComplete='off' onSubmit={createUser}>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <FormInput
            name='username'
            value={username.value}
            onChange={onTextChange}
            label='Username'
          />
          <FormInput
            name='password'
            value={password.value}
            onChange={onTextChange}
            label='Password'
          />
          <FormInput
            name='confirmPassword'
            value={confirmPassword.value}
            onChange={onTextChange}
            label='Confirm Password'
          />
        </div>
        <div className='col-sm-12 col-md-6'>
          <FormInput
            name='first_name'
            value={first_name.value}
            onChange={onTextChange}
            label='First Name'
          />
          <FormInput
            name='last_name'
            value={last_name.value}
            onChange={onTextChange}
            label='Last Name'
          />
          <AddUserRole role={role} onRoleChange={onRoleChange} />
        </div>
      </div>
      <div className='d-grid mx-5 mt-3'>
        <button type='submit' className='btn btn-primary'>
          Add User
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
