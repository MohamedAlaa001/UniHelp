import React from "react";
import FormInput from "../../layout/FormInput";

const ChangePasswordForm = ({ formData, onChangeHandler, changePassword }) => {
  const { currentPassword, newPassword, confirmNewPassword } = formData;
  return (
    <form autoComplete='off' onSubmit={changePassword}>
      <div className='row'>
        <div className='col-sm-12 col-md-4'>
          <FormInput
            type='password'
            name='currentPassword'
            value={currentPassword}
            onChange={onChangeHandler}
            label='Current Password'
          />
        </div>
        <div className='col-sm-12 col-md-4'>
          <FormInput
            type='password'
            name='newPassword'
            value={newPassword}
            onChange={onChangeHandler}
            label='New Password'
          />
        </div>
        <div className='col-sm-12 col-md-4'>
          <FormInput
            type='password'
            name='confirmNewPassword'
            value={confirmNewPassword}
            onChange={onChangeHandler}
            label='Confirm New Password'
          />
        </div>
      </div>
      <div className='d-grid col-2 mt-3'>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
