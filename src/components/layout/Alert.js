import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AlertProgressBar from "./AlertProgressBar";
import { removeAlert } from "../../actions/alert";

const Alert = ({ alerts, removeAlert }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) =>
      alert.dismiss ? (
        <div
          key={alert.id}
          className={`alert alert-${alert.alertType} alert-dismissible fade show`}
        >
          {alert.msg}
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() => removeAlert(alert.id)}
          ></button>
        </div>
      ) : (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
          {/* <AlertProgressBar timeout={alert.timeout} /> */}
        </div>
      )
    )
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  removeAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(Alert);
