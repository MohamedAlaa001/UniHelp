import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateAdminRoute = ({
  component: Component,
  auth: { isAuthenicated, loading, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenicated && !loading && user.role !== 'student' ? (
        <Component {...props} />
      ) : (
        <Redirect to='/' />
      )
    }
  />
);

PrivateAdminRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateAdminRoute);
