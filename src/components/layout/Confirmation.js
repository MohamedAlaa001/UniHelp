import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeConfirmation } from '../../actions/confirmation';

const Confirmation = ({ confirmation, removeConfirmation }) => {
  return (
    confirmation !== null && (
      <div className='confirmation-window-wrapper'>
        <div className='confirmation-window'>
          <div className='top-bar'></div>
          <div className='confirmation-inner'>
            <div className='confirmation-body'>
              <div className='confirmation-icon icon-exclamation'></div>
              <div className='confirmation-message'>
                <div className='title'>
                  <strong>{confirmation.title}</strong>
                </div>
                {confirmation.message}
              </div>
            </div>
            <div className='confirmation-footer'>
              <button
                type='button'
                className='btn btn-secondary me-3'
                onClick={() => {
                  confirmation.setIsConfirm(false);
                  removeConfirmation();
                }}
              >
                Cancel
              </button>
              <button
                type='button'
                className='btn btn-primary'
                onClick={() => {
                  confirmation.setIsConfirm(true);
                  removeConfirmation();
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
Confirmation.propTypes = {
  confirmation: PropTypes.object,
  removeConfirmation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  confirmation: state.confirmation,
});

export default connect(mapStateToProps, { removeConfirmation })(Confirmation);
