import React from "react";
import FormInput from "../../layout/FormInput";
import AddUserRole from "./AddUserRole";

const AddUserForm = ({ formData, onTextChange, onRoleChange, createUser }) => {
  const {
    username,
    email,
    password,
    confirmPassword,
    first_name,
    last_name,
    role,
  } = formData;

  return (
    <form autoComplete='off' onSubmit={createUser}>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <FormInput
            name='username'
            value={username.value}
            onChange={onTextChange}
            label={username.label}
          />
          <FormInput
            type='email'
            name='email'
            value={email.value}
            onChange={onTextChange}
            label={email.label}
          />
          <FormInput
            type='password'
            name='password'
            value={password.value}
            onChange={onTextChange}
            label={password.label}
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword.value}
            onChange={onTextChange}
            label={confirmPassword.label}
          />
        </div>
        <div className='col-sm-12 col-md-6'>
          <FormInput
            name='first_name'
            value={first_name.value}
            onChange={onTextChange}
            label={first_name.label}
          />
          <FormInput
            name='last_name'
            value={last_name.value}
            onChange={onTextChange}
            label={last_name.label}
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
