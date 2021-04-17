import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const TicketBody = () => {
  return (
    <Fragment>
      {/* Page Header */}
      <div className='page-header no-margin-bottom'>
        <div className='container-fluid'>
          <h2 className='h5 no-margin-bottom'>Tickets</h2>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className='container-fluid'>
        <ul className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/home'>Home</Link>
          </li>
          <li className='breadcrumb-item'>
            <Link to='/tickets'>Tickets</Link>
          </li>
          <li className='breadcrumb-item active'>{'Ticket Name'}</li>
        </ul>
      </div>
      {/* Page Section */}
      <section>
        <div className='container-fluid'>
          <div className='block'></div>
        </div>
      </section>
    </Fragment>
  );
};

export default TicketBody;
