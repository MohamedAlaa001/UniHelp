import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div className='page-header'>
        <div className='container-fluid'>
          <h2 className='h5 no-margin-bottom'>Home</h2>
        </div>
      </div>
      <section>
        <div className='alert alert-primary lead'>
          Super User <br />
          Perms:
          <ol>
            <li>Get Categories</li>
            <li>Get All Users</li>
            <li>Change User Role</li>
          </ol>
        </div>
        <div className='alert alert-primary lead'>
          Master:
          <ol>
            <li>Get All Tickets ( Open / Pending Resolve )</li>
            <li>
              Approve && Close{' '}
              <span className='text-dark text-bold'>New Tickets</span>
            </li>
          </ol>
        </div>
        <div className='alert alert-primary lead'>
          Employee:
          <ol>
            <li>Get Tickets Assigned</li>
          </ol>
        </div>
        <div className='alert alert-primary lead'>
          Student
          <ol>
            <li>Create Ticket</li>
            <li>Preview Timeline, Preview Replies</li>
            <li>
              Edit / Delete Ticket Within 15 Minutes{' '}
              <span className='text-dark text-bold'>(Backend)</span>
            </li>
          </ol>
        </div>
        <div className='alert alert-primary lead'>
          Dashboard:
          <ol>
            <li>Ticket Statistics</li>
          </ol>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;

/*
<div className='alert alert-primary lead'>
          
          <ol>
            <li></li>
          </ol>
        </div>
*/
