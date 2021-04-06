import logo from '../images/logo.png';
import anime from 'animejs/lib/anime.es.js';
import React, { Fragment, useState, useEffect } from 'react';

const Landing = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    titleAnimation();
  }, []);

  const { username, password } = loginData;

  const onChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const titleAnimation = () => {
    const textWrapper = document.querySelector('.title-wrapper .title-letter');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='title-letter'>$&</span>"
    );
    anime.timeline().add({
      targets: '.title-wrapper .title-letter',
      rotateY: [-90, 0],
      // duration: 2000,
      delay: (el, i) => 400 * i,
    });
  };

  return (
    <Fragment>
      <div className='landing'>
        <div className='landing-inner container'>
          <div className='row'>
            <div className='col-lg-8 d-none d-lg-grid gap-5'>
              <img src={logo} className='landing-logo' alt='' />
              <div className='title title-wrapper '>
                <span className=''>
                  <span className='title-letter'>UNIHELP</span>
                </span>
              </div>
            </div>
            <div className='col'>
              <div className='card'>
                <div className='card-header h1 text-light'>Sign In</div>
                <div className='card-body'>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        className='form-control'
                        name='username'
                        placeholder='Username...'
                        autoComplete='off'
                        value={username}
                        onChange={(e) => onChange(e)}
                      />
                      <label htmlFor='username'>Username</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <input
                        type='password'
                        className='form-control'
                        name='password'
                        placeholder='Password...'
                        value={password}
                        onChange={(e) => onChange(e)}
                      />
                      <label htmlFor='password'>Password</label>
                    </div>
                    <div className='d-grid'>
                      <input
                        type='submit'
                        className='btn btn-outline-light btn-lg'
                        value='Login'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
