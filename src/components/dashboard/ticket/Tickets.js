import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TicketItem from './TicketItem';

const Tickets = ({ tickets }) => {
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
      <section>
        <div className='container-fluid'>
          <div className='block alert-primary'>
            <strong>Sorting by newest</strong>
          </div>
          <div className='tickets-block block'>
            <Link className='btn btn-primary mb-3' to='/tickets/create'>
              Create Ticket
            </Link>
            <div className='tickets'>
              {tickets.map((ticket) => (
                <TicketItem key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Tickets.propTypes = {
  tickets: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  tickets: state.ticket.tickets,
});

export default connect(mapStateToProps)(Tickets);
