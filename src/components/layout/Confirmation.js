const Confirmation = ({ title, message, setIsConfirm }) => {
  return (
    <div className='confirmation-window-wrapper'>
      <div className='confirmation-window'>
        <div className='top-bar'></div>
        <div className='confirmation-inner'>
          <div className='confirmation-body'>
            <div className='confirmation-icon icon-exclamation'></div>
            <div className='confirmation-message'>
              <div className='title'>
                <strong>{title}</strong>
              </div>
              {message}
            </div>
          </div>
          <div className='confirmation-footer'>
            <button
              type='button'
              className='btn btn-secondary me-3'
              onClick={() => {
                document
                  .querySelector('.confirmation-window-wrapper')
                  .classList.remove('d-block');
                setIsConfirm(false);
              }}
            >
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={() => {
                document
                  .querySelector('.confirmation-window-wrapper')
                  .classList.remove('d-block');
                setIsConfirm(true);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
