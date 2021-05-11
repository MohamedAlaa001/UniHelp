const TicketFormInput = ({ categoryId, onChange, label }) => {
  return (
    <div className='form-check form-switch'>
      <input
        type='radio'
        className='form-check-input'
        name='categorySwitch'
        value={categoryId}
        onChange={onChange}
      />
      <label className='form-check-label'>{label}</label>
    </div>
  );
};

export default TicketFormInput;
