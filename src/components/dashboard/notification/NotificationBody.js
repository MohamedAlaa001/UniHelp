import React, { Fragment, useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNotification } from '../../../actions/notifications';
import Spinner from '../../layout/Spinner';

const NotificationBody = ({
  getNotification,
  notification: { notification, loading },
  match,
}) => {
  useEffect(() => {
    getNotification(match.params.id);
  }, [getNotification, match.params.id]);

  return loading || notification === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {/* Page Header */}
      <div className='page-header no-margin-bottom'>
        <div className='container-fluid'>
          <h2 className='h5 no-margin-bottom'>Notifications</h2>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className='container-fluid'>
        <ul className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/home'>Home</Link>
          </li>
          <li className='breadcrumb-item'>
            <Link to='/notifications'>Notifications</Link>
          </li>
          <li className='breadcrumb-item active'>Notifications</li>
        </ul>
      </div>
      {/* Page Section */}
      <section className='no-padding-top'>
        <div className='container-fluid'>
          <div className='messages-block block'>
            <div className='messages'>
              {
                <div className='message d-flex align-items-center'>
                  <div className='content'>
                    <strong className='d-block'>{notification.name}</strong>
                    <span className='d-block'>{notification.message}</span>
                    <small className='date d-block'>{notification.time}</small>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

NotificationBody.propTypes = {
  getNotification: PropTypes.func.isRequired,
  notification: PropTypes.object,
};

const mapStateToProps = (state) => ({
  notification: state.notification,
});

export default connect(mapStateToProps, { getNotification })(NotificationBody);
