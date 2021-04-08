import EG from '../../images/flages/EG.png';
import GB from '../../images/flages/GB.png';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {}, []);

  return (
    <header>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid d-flex align-items-center justify-content-between'>
          {/* Navbar Header */}
          <div className='navbar-header'>
            <Link to='/dashboard' className='navbar-brand'>
              <div className='brand-text brand-big visible text-uppercase'>
                <strong className='text-primary'>Uni</strong>
                <strong>help</strong>
              </div>
              <div className='brand-text brand-sm text-uppercase'>
                <strong className='text-primary'>Uni</strong>
                <strong>help</strong>
              </div>
            </Link>
            {/* Sidebar Toggler */}
            <button className='sidebar-toggle'>
              <i className='fa fa-long-arrow-left'></i>
            </button>
          </div>
          {/* Right Menu */}
          <div className='right-menu list-inline no-margin-bottom'>
            {/* Messages box */}
            <div className='list-inline-item dropdown'>
              <a
                id='messagesDropdown'
                href='#'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                className='nav-link messages-toggle'
              >
                <i className='icon-email'></i>
                <span className='badge dashbg-1'>4</span>
              </a>
              <div
                aria-labelledby='messagesDropdown'
                className='dropdown-menu messages'
              >
                <a
                  href='#'
                  className='dropdown-item message d-flex align-items-center'
                >
                  <div className='content'>
                    <strong className='d-block'>Nadia Halsey</strong>
                    <span className='d-block'>lorem ipsum dolor sit amit</span>
                    <small className='date d-block'>9:30am</small>
                  </div>
                </a>
                <a
                  href='#'
                  className='dropdown-item message d-flex align-items-center'
                >
                  <div className='content'>
                    <strong className='d-block'>Peter Ramsy</strong>
                    <span className='d-block'>lorem ipsum dolor sit amit</span>
                    <small className='date d-block'>7:40am</small>
                  </div>
                </a>
                <a
                  href='#'
                  className='dropdown-item message d-flex align-items-center'
                >
                  <div className='content'>
                    <strong className='d-block'>Sam Kaheil</strong>
                    <span className='d-block'>lorem ipsum dolor sit amit</span>
                    <small className='date d-block'>6:55am</small>
                  </div>
                </a>
                <a
                  href='#'
                  className='dropdown-item message d-flex align-items-center'
                >
                  <div className='content'>
                    <strong className='d-block'>Sara Wood</strong>
                    <span className='d-block'>lorem ipsum dolor sit amit</span>
                    <small className='date d-block'>10:30pm</small>
                  </div>
                </a>
                <a href='#' className='dropdown-item text-center message'>
                  <strong>
                    See All Messages
                    <i className='fa fa-angle-right'></i>
                  </strong>
                </a>
              </div>
            </div>
            {/* Languages */}
            <div className='list-inline-item dropdown'>
              <a
                id='languagesDropdown'
                data-target='#'
                href='#'
                aria-haspopup='true'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                className='nav-link language dropdown-toggle'
              >
                <img src={GB} alt='English' />
                <span className='d-none d-sm-inline-block'>English</span>
              </a>
              <div
                className='dropdown-menu'
                aria-labelledby='languagesDropdown'
                id='languageMenu'
              >
                <a href='#' className='dropdown-item'>
                  <img src={EG} alt='Arabic' className='me-2' />
                  <span>Arabic</span>
                </a>
              </div>
            </div>
            {/* Logout */}
            <div className='list-inline-item logout'>
              <a id='logout' href='login.html' className='nav-link'>
                <span className='d-none d-sm-inline'>Logout </span>
                <i className='icon-logout'></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
