import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div className='page-header'>
        <div className='container-fluid'>
          <h2 className='h5 no-margin-bottom'>Home</h2>
        </div>
      </div>
      <section style={{ textTransform: 'capitalize' }}>
        <div className='alert alert-primary lead'>
          Super User <br />
          <ol>
            <li>
              Perms:
              <ol>
                <li>Get Categories</li>
                <li>Get All Users</li>
                <li>Change User Role</li>
              </ol>
            </li>
            <li>
              Dashboard:
              <ol>
                <li>Ticket Statistics</li>
              </ol>
            </li>
            <li>
              System Logs:
              <ol>
                <li>Actions</li>
                <li>Search by Ticked Id</li>
              </ol>
            </li>
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
            <li>Get Tickets Assigned // Get forward tickets</li>
            <li>
              Forward Ticket
              <ul>
                <li>Update ticket timeline</li>
                <li>Only show the reply if not private</li>
                <li></li>
              </ul>
            </li>
            <li>
              Resolve Ticket{' '}
              <span className='text-dark text-bold'>Will be set pending</span>
            </li>
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
          Ticket
          <ol>
            <li>
              Custom Ticket Id, XXX-XXX-XXX <br /> VCE-NRQ-628
            </li>
            <li>Show Ticket Id</li>
            <li>Ticket Timeline</li>
            <li>Ticket Replies</li>
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
