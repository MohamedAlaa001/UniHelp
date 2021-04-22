import React, { Fragment, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTicketById } from '../../../actions/tickets';

import Spinner from '../../layout/Spinner';
import Replies from './replies/Replies';
import ReplyForm from './replies/ReplyForm';
import TicketTimeline from './TicketTimeline';

const TicketBody = ({
  match,
  getTicketById,
  tickets: { ticket, loading },
  user: { role },
}) => {
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
          <li className='breadcrumb-item active'>{ticket.title}</li>
        </ul>
      </div>
      {/* Page Section */}
      <section>
        <div className='container-fluid'>
          <div className='tickets-block block'>
            <div className='row mb-3'>
              <div className='col-sm-12 col-lg-9'>
                <div className='tickets'>
                  <div className='ticket d-flex align-items-center'>
                    <div className='content'>
                      <div className='title'>
                        <strong>
                          {ticket.isResolved ? (
                            <strong className='ticket-status closed'>
                              [CLOSED]
                            </strong>
                          ) : (
                            <strong className='ticket-status'>[OPEN]</strong>
                          )}
                          {ticket.title}
                        </strong>
                        <span className='d-block'>to {'Student Affairs'}</span>
                        <small className='date d-block'>{ticket.date}</small>
                      </div>
                      <p className='d-block ticket-content'>{ticket.content}</p>
                    </div>
                  </div>
                </div>
              </div>
              {ticket.path.length > 0 ? (
                <div className='col'>
                  <div className='timeline card'>
                    <div className='card-body'>
                      <h4 className='card-title'>Ticket Path</h4>
                      <div className='timeline-body'>
                        {ticket.path.map((path) => (
                          <TicketTimeline path={path} key={uuidv4()} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            {/* Ticket Path */}

            {/* Reply Form for employee only */}
            {role !== 'student' ? <ReplyForm /> : null}
            {/* <ReplyForm /> */}
            {/* Ticket Replies */}
            <Replies />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
TicketBody.propTypes = {
  user: PropTypes.object.isRequired,
  getTicketById: PropTypes.func.isRequired,
  tickets: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  tickets: state.tickets,
});

export default connect(mapStateToProps, { getTicketById })(TicketBody);
