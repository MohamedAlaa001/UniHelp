import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import TicketItem from './TicketItem';

const Tickets = () => {
  const ticket = {
    ticketId: 3,
    title: 'Lorem, ipsum dolor',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestiae ipsum vero placeat ab autem architecto laudantium eum similique illum. Tempore voluptatum provident voluptate illum possimus, illo animi eligendi harum!',
    date: '6:23pm',
    isResolved: true,
  };
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
          <li className='breadcrumb-item active'>Tickets</li>
        </ul>
      </div>
      {/* Page Section */}
      <section className='no-padding-top'>
        <div className='container-fluid'>
          <div className='tickets-block block'>
            <div className='tickets'>
              <a href='#' className='ticket d-flex align-items-center'>
                <div className='content'>
                  <div className='title'>
                    <strong>
                      <span className='ticket-status resolved'>[RESOLVED]</span>{' '}
                      Lorem, ipsum dolor.
                    </strong>
                  </div>
                  <span className='d-block text-truncate'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dignissimos, dolorem quod! Animi, mollitia quam ipsum iure
                    earum sequi molestias beatae quae! Molestiae ipsam
                    laudantium earum repellat quis ducimus officia possimus.
                  </span>
                  <small className='date d-block'>9:47pm</small>
                </div>
              </a>
              <a href='#' className='ticket d-flex align-items-center'>
                <div className='content'>
                  <div className='title d-block'>
                    <strong>
                      <span className='ticket-status'>[OPEN]</span> Lorem, ipsum
                      dolor.
                    </strong>
                  </div>
                  <span className='d-block text-truncate'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dignissimos, dolorem quod! Animi, mollitia quam ipsum iure
                    earum sequi molestias beatae quae! Molestiae ipsam
                    laudantium earum repellat quis ducimus officia possimus.
                  </span>
                  <small className='date d-block'>10:30pm</small>
                </div>
              </a>
              <TicketItem ticket={ticket} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Tickets;
