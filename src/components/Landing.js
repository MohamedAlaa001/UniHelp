// import logo from '../../images/logo.png';\
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Alert from "./layout/Alert";
import { login } from "../actions/auth";
import { setAlert } from "../actions/alert";

const Landing = ({ isAuthenticated, login, setAlert }) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    errors: [],
  });

  const { username, password, errors } = loginData;

  const onChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      errors.push("Academic ID is Required");
    }
    if (password.trim() === "") {
      errors.push("Password is Required");
    }

    setLoginData({
      ...loginData,
      errors,
    });

    // Alert Errors
    if (errors.length > 0) {
      errors.forEach((err) => {
        setAlert(err, "danger", false, 3000);
      });

      setLoginData({
        username: "",
        password: "",
        errors: [],
      });

      return;
    }

    login(username, password);

    setLoginData({
      username: "",
      password: "",
      errors: [],
    });
  };

  if (isAuthenticated) {
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
                    <div className='logo d-none d-md-block'></div>
                    <h1
                      className='d-block d-md-none mb-3'
                      style={{
                        color: "var(--color-dark-block)",
                      }}
                    >
                      UniHelp
                    </h1>
                    <div>
                      <p className='lead'>
                        <strong>Everyday,</strong> we might face issues that
                        require time to resolve due to the complicated
                        procedures.
                      </p>
                      <p className='lead'>
                        <span>UniHelp,</span> Provides you with an automated
                        support system to reduce the time taken to resolve your
                        issue.
                      </p>
                    </div>
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
                          autoCorrect='off'
                          autoCapitalize='off'
                          placeholder=' '
                          value={username}
                          onChange={(e) => onChange(e)}
                        />
                        <label className='label-material'>Username</label>
                      </div>
                      <div className='form-floating mb-3'>
                        <input
                          type='password'
                          className='form-control input-material'
                          name='password'
                          autoCorrect='off'
                          autoCapitalize='off'
                          placeholder=' '
                          value={password}
                          onChange={(e) => onChange(e)}
                        />
                        <label htmlFor='password' className='label-material'>
                          Password
                        </label>
                      </div>
                      <button type='submit' className='btn btn-primary'>
                        Login
                      </button>
                    </form>
                    {/* <p className=''>
                      Forgot Password?
                      <a href='#' className=' ms-2'>
                        Submit Ticket
                      </a>
                    </p> */}
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
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, setAlert })(Landing);
