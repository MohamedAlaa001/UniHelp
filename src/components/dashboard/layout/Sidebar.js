import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Fragment>
      {/* Sidebar Nav */}
      <nav id='sidebar'>
        {/* sidebar header */}
        <div className='sidebar-header d-flex align-items-center justify-content-center'>
          <div className='title'>
            <h1 className='h5'>Fname Lname</h1>
            <p>Lorem, ipsum dolor.</p> {/* Could be removed */}
          </div>
        </div>
        {/* Sidebar Menu start */}
        <span className='heading'>Main</span> {/* Section 1 */}
        <ul className='list-unstyled'>
          <li className='active'>
            <Link to='/dashboard'>
              <i className='icon-home'></i>
              Home
            </Link>
          </li>
          <li className=''>
            <Link to='#'>
              <i className='icon-light-bulb'></i>
              Test
            </Link>
          </li>
          {/* Start Dropdown menu */}
          <li>
            <a
              href='#menuDropdown'
              aria-expanded='false'
              data-bs-toggle='collapse'
            >
              <i className='icon-windows'></i>
              Dropdown Example
            </a>
            <ul className='list-unstyled collapse' id='menuDropdown'>
              <li>
                <a href='#'>Page 1</a>
              </li>
              <li>
                <a href='#'>Page 2</a>
              </li>
              <li>
                <a href='#'>Page 3</a>
              </li>
            </ul>
          </li>
          {/* End Dropdown menu */}
        </ul>
        <span className='heading'>Extras</span> {/* Section 2 */}
        <ul className='list-unstyled'>
          <li>
            <a href='#'>
              <i className='icon-settings'></i>Demo
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='icon-settings'></i>Demo
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='icon-settings'></i>Demo
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
