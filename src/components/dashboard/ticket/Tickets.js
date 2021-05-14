import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { getTicketsByUserId } from '../../../actions/tickets';
import {
  getTicketsByUserId,
  getAssignedTicketsByUserId,
} from '../../../actions/tickets';

import TicketItem from './TicketItem';
import Spinner from '../../layout/Spinner';
import Alert from '../../layout/Alert';

const Tickets = ({
  getTicketsByUserId,
  getAssignedTicketsByUserId,
  tickets: { loading, tickets },
  user,
}) => {
  useEffect(() => {
    switch (user.role) {
      case 'student':
        getTicketsByUserId(user.id);
        break;
      case 'employee':
        getAssignedTicketsByUserId(user.id);
        break;
      default:
        return;
    }
  });

  // const ticketSwitch = () => {
  //   switch (user.role) {
  //     case 'student':
  //       getTicketsByUserId(user.id);
  //       break;
  //     case 'employee':
  //       getAssignedTicketsByUserId(user.id);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  return loading || tickets === null ? (
    <Spinner />
  ) : (
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
          <Alert />
          <div className='tickets-block block'>
            {user.role === 'student' ? (
              <Link className='btn btn-primary mb-3' to='/tickets/create'>
                Create Ticket
              </Link>
            ) : null}
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
  user: PropTypes.object.isRequired,
  getTicketsByUserId: PropTypes.func.isRequired,
  // tickets: PropTypes.array,
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
  tickets: state.tickets,
});

export default connect(mapStateToProps, {
  getTicketsByUserId,
  getAssignedTicketsByUserId,
})(Tickets);
