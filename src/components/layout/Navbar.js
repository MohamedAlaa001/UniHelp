import logo from '../../images/logo.png';

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark fixed-top'>
      <div className='container py-0 py-lg-2'>
        <Link className='navbar-brand' to='/'>
          <img
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top me-1'
          />
          UniHelp
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse pb-2 pb-lg-0'
          id='navbarCollapse'
        >
          <ul className='nav ms-auto'>
            <li className='nav-item'>
              <Link to='login' className='nav-link text-white'>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
