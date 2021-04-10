// import logo from '../../images/logo.png';\
import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Alert from './Alert';
import { login } from '../../actions/auth';

const Landing = ({ isAuthenicated, login }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  // useEffect(() => {
  // }, []);

  const { username, password } = loginData;

  const onChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenicated) {
    return <Redirect to='/home' />;
  }

  return (
    <div className='landing'>
      <div className='dark-overlay'>
        <div className='container d-flex align-items-center'>
          <div className='form-holder'>
            <div className='row'>
              {/* left Panel */}
              <div className='col-lg-6'>
                <div className='info d-flex align-items-center'>
                  <div className='content'>
                    <div className='logo'>
                      <h1>UniHelp</h1>
                    </div>
                    <p className='lead'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore, in.
                    </p>
                  </div>
                </div>
              </div>
              {/* Right Panel */}
              <div className='col-lg-6'>
                <div className='form d-flex align-items-center'>
                  <div className='content'>
                    <form
                      className='form-validate mb-4'
                      onSubmit={(e) => onSubmit(e)}
                    >
                      <Alert />
                      <div className='form-floating mb-3'>
                        <input
                          type='text'
                          className='form-control input-material'
                          name='username'
                          autoComplete='off'
                          placeholder=''
                          value={username}
                          onChange={(e) => onChange(e)}
                        />
                        <label htmlFor='username' className='label-material'>
                          Username
                        </label>
                        <span className='is-invalid invalid-feedback'>
                          Please enter your username
                        </span>
                      </div>
                      <div className='form-floating mb-3'>
                        <input
                          type='password'
                          className='form-control input-material is-invalid'
                          name='password'
                          placeholder=''
                          value={password}
                          onChange={(e) => onChange(e)}
                        />
                        <label htmlFor='password' className='label-material'>
                          Password
                        </label>
                        <span className='is-invalid invalid-feedback'>
                          Please enter your password
                        </span>
                      </div>
                      <button type='submit' className='btn btn-primary'>
                        Login
                      </button>
                    </form>
                    <p className=''>
                      Forgot Password?
                      <a href='#' className=' ms-2'>
                        Submit Ticket
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenicated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenicated: state.auth.isAuthenicated,
});

export default connect(mapStateToProps, { login })(Landing);
