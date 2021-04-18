const TicketFormInput = ({ categoryValue, onChange, label }) => {
  return (
    <div className='form-check form-switch'>
      <input
        type='radio'
        className='form-check-input'
        name='categorySwitch'
        value={categoryValue}
        onChange={onChange}
      />
      <label className='form-check-label'>{label}</label>
    </div>
  );
};

export default TicketFormInput;
