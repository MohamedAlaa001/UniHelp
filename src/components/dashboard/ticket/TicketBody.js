import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTicketById } from '../../../actions/tickets';

import Spinner from '../../layout/Spinner';
import TicketReply from './TicketReply';

const TicketBody = ({ match, getTicketById, ticket: { ticket, loading } }) => {
  useEffect(() => {
    getTicketById(match.params.id);
  }, [getTicketById, match.params.id]);
  return loading || ticket === null ? (
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
          <li className='breadcrumb-item'>
            <Link to='/tickets'>Tickets</Link>
          </li>
          <li className='breadcrumb-item active'>{'Ticket Name'}</li>
        </ul>
      </div>
      {/* Page Section */}
      <section>
        <div className='container-fluid'>
          <div className='tickets-block block'>
            <div className='tickets'>
              <div className='ticket d-flex align-items-center'>
                <div className='content'>
                  <div className='title'>
                    <strong>
                      {ticket.isResolved ? (
                        <span className='ticket-status closed'>[CLOSED]</span>
                      ) : (
                        <span className='ticket-status'>[OPEN]</span>
                      )}
                      {ticket.title}
                    </strong>
                    <span className='d-block'>to {'Student Affairs'}</span>
                    <small className='date d-block'>{ticket.date}</small>
                  </div>
                  <p className='d-block ticket-content'>{ticket.content}</p>
                </div>
              </div>
              {/* Ticket replies */}
              <div className='alert alert-primary mt-3'>Replies goes here</div>
              {/* Reply Form */}
              <TicketReply />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
TicketBody.propTypes = {
  getTicketById: PropTypes.func.isRequired,
  ticket: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ticket: state.ticket,
});

export default connect(mapStateToProps, { getTicketById })(TicketBody);
