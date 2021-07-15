import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTicketById, getTicketTimeline } from "../../../actions/tickets";

import Spinner from "../../layout/Spinner";
import Alert from "../../layout/Alert";

import TicketControl from "./TicketControl";
import TicketStatus from "./TicketStatus";
import TicketTimeline from "./TicketTimeline";

import Replies from "./replies/Replies";
import ReplyForm from "./replies/ReplyForm";

const TicketBody = ({
  match,
  getTicketById,
  tickets: { ticket, loading },
  user: { role },
}) => {
  useEffect(() => {
    // clearTicket();
    getTicketById(match.params.id);
    // eslint-disable-next-line
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
            <Alert />
            <TicketControl ticket={ticket} role={role} />

            <div className='row mb-3'>
              <div className='col-sm-12 col-lg-9'>
                {/* Ticket */}
                <div className='tickets'>
                  <div className='ticket d-flex align-items-center'>
                    <div className='content'>
                      <div className='title'>
                        <TicketStatus
                          master={ticket.master}
                          status={ticket.status}
                          title={ticket.title}
                        />
                        {ticket.master !== "null" && (
                          <strong className='ticket-master d-block'>{`Ticket Master: ${ticket.master}`}</strong>
                        )}
                        <span className='d-block'>{ticket.ticket_id}</span>
                        <span className='d-block'>To {ticket.category}</span>
                        <div className=''>
                          <span className='me-3'>
                            By
                            {` ${ticket.student.first_name} ${ticket.student.last_name}`}
                          </span>
                          <Link
                            to={`/tickets/students/${ticket.student.username}`}
                          >
                            Click to view student history
                          </Link>
                        </div>
                        <small className='date d-block'>
                          {ticket.timestamp}
                        </small>
                      </div>
                      <p className='d-block ticket-content'>{ticket.content}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ticket Log */}
              <TicketTimeline
                ticket_id={ticket.ticket_id}
                status={ticket.status}
              />
            </div>

            {/* Reply Form */}
            {ticket.status !== "rejected" && ticket.status !== "resolved" ? (
              <ReplyForm />
            ) : null}

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

export default connect(mapStateToProps, {
  getTicketById,
  getTicketTimeline,
})(TicketBody);
