import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getTicketById,
  getTicketTimeline,
  downloadImage,
  downloadFile,
} from "../../../actions/tickets";

import Spinner from "../../layout/Spinner";
import Alert from "../../layout/Alert";

import TicketSolution from "./TicketSolution";
import TicketControl from "./TicketControl";
import TicketStatus from "./TicketStatus";
import TicketTimeline from "./TicketTimeline";

import Comments from "./comments/Comments";
import CommentForm from "./comments/CommentForm";

const TicketBody = ({
  match,
  getTicketById,
  tickets: { ticket, loading },
  user: { role },
  downloadImage,
  downloadFile,
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
            {!ticket.readOnly && <TicketControl ticket={ticket} role={role} />}

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
                          readOnly={ticket.readOnly}
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

                          {role !== "student" && (
                            <Link
                              to={`/tickets/students/${ticket.student.username}`}
                            >
                              Click to view student history
                            </Link>
                          )}
                        </div>
                        <small className='date d-block'>
                          {ticket.timestamp}
                        </small>
                      </div>
                      <p
                        className={
                          ticket.lang === "ar"
                            ? "d-block ticket-content ar"
                            : "d-block ticket-content"
                        }
                      >
                        {ticket.content}
                      </p>
                      <div className='d-flex ticket-attachments'>
                        <div className='images'>
                          {ticket.images.length > 0 &&
                            ticket.images.map((image) => (
                              <button
                                key={image.id}
                                className='btn'
                                download
                                onClick={() =>
                                  downloadImage(ticket.ticket_id, image)
                                }
                              >
                                {image.name}
                              </button>
                            ))}
                        </div>
                        <div className='files'>
                          {ticket.files.length > 0 &&
                            ticket.files.map((file) => (
                              <button
                                key={file.id}
                                // href='localhost:8000/api/download_image'
                                className='btn'
                                download
                                onClick={() =>
                                  downloadFile(ticket.ticket_id, file)
                                }
                              >
                                {file.name}
                              </button>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ticket Log */}
              <div className='col'>
                {ticket.suggested_solution.solution && (
                  <TicketSolution
                    solution={ticket.suggested_solution.solution}
                    lang={ticket.suggested_solution.lang}
                  />
                )}
                <TicketTimeline
                  ticket_id={ticket.ticket_id}
                  status={ticket.status}
                />
              </div>
            </div>

            {/* Comments Form */}
            {!ticket.readOnly &&
            ticket.status !== "rejected" &&
            ticket.status !== "resolved" ? (
              <CommentForm />
            ) : null}

            {/* Ticket Comments */}
            <Comments />
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
  downloadImage,
  downloadFile,
})(TicketBody);
