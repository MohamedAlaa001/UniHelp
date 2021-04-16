import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ path, icon, name }) => {
  return (
    <li>
      <NavLink to={path} activeClassName='active'>
        {icon ? <i className={`icon-${icon}`}></i> : null}
        {name}
      </NavLink>
    </li>
  );
};

export default NavItem;
