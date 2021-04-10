import React, { Fragment } from 'react';

import NavItem from './NavItem';

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
          <NavItem path={'/home'} icon={'home'} name={'Home'} />
          <NavItem path={'/test'} icon={'light-bulb'} name={'Test'} />
          <NavItem path={'/messages'} icon={'email'} name={'Messages'} />
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
              <NavItem path={'/demo'} name={'Page 1'} />
              <NavItem path={'/demo'} name={'Page 2'} />
              <NavItem path={'/demo'} name={'Page 3'} />
            </ul>
          </li>
          {/* End Dropdown menu */}
        </ul>
        <span className='heading'>Extras</span> {/* Section 2 */}
        <ul className='list-unstyled'>
          <NavItem path={'/demo'} icon={'settings'} name={'Demo'} />
          <NavItem path={'/demo'} icon={'settings'} name={'Demo'} />
          <NavItem path={'/demo'} icon={'settings'} name={'Demo'} />
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
