import { Fragment } from "react";
import NavItem from "./NavItem";

export const student = () => (
  <Fragment>
    <span className='heading'>Student Panel</span>
    <ul className='list-unstyled'>
      <NavItem path='/tickets' icon='paper-and-pencil' name='Tickets' />
    </ul>
  </Fragment>
);

export const employee = () => (
  <Fragment>
    <span className='heading'>Employee Panel</span>
    <ul className='list-unstyled'>
      <NavItem path='/tickets' icon='paper-and-pencil' name='Tickets' />
    </ul>
  </Fragment>
);

export const master = () => (
  <Fragment>
    <span className='heading'>Master Panel</span>
    <ul className='list-unstyled'>
      <NavItem path='/tickets' icon='paper-and-pencil' name='Tickets' />
      {/* <NavItem path='/dashboard' icon='chart' name='Dashboard' /> */}
    </ul>
  </Fragment>
);

export const admin = () => (
  <Fragment>
    <span className='heading'>Admin Panel</span>
    <ul className='list-unstyled'>
      {/* <NavItem path='/dashboard' icon='chart' name='Dashboard' />
      <NavItem path='/permissions' icon='settings' name='Permissions' /> */}
      {/* <NavItem path='/tickets' icon='paper-and-pencil' name='Tickets' /> */}
      <NavItem path='/addUser' icon='add-user' name='Add User' />
      <NavItem path='/categories' icon='layers' name='Categories' />
    </ul>
  </Fragment>
);
