import React from "react";

const FormInput = (props) => {
  const {
    type = "text",
    name,
    value,
    placeholder = " ",
    onChange,
    label,
  } = props;
  return (
    <div className='form-floating mb-3'>
      <input
        type={type}
        className='form-control input-material'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoCapitalize='off'
      />
      <label className='label-material'>{label}</label>
    </div>
  );
};

export default FormInput;
