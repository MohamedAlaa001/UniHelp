import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTicketsByUser } from "../../../actions/tickets";

import TicketItem from "./TicketItem";
import TicketsFilter from "./TicketsFilter";
import TicketHistoryStat from "./TicketHistory/TicketHistoryStat";
import Spinner from "../../layout/Spinner";
import Alert from "../../layout/Alert";

const Tickets = ({ getTicketsByUser, tickets: { loading, tickets }, user }) => {
  useEffect(() => {
    // *************************
    // Moved Ticket Switch under actions/ticket
    // *************************
    getTicketsByUser(user.role);
    // eslint-disable-next-line
  }, [user]);

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
          <Alert />
          <div className='tickets-block block'>
            {user.role === "student" ? (
              <div className='mb-3'>
                <Link className='btn btn-primary me-4' to='/tickets/create'>
                  Create Ticket
                </Link>
              </div>
            ) : null}
            <TicketHistoryStat tickets={tickets} />

            <div className='row flex-column-reverse flex-md-row-reverse '>
              <div className='col-sm-12 col-md-9'>
                <div className='tickets'>
                  {tickets.map((ticket) => (
                    <TicketItem key={ticket.ticket_id} ticket={ticket} />
                  ))}
                  {/* {readOnlyTickets.map((ticket) => (
                    <TicketItem
                      key={ticket.ticket_id}
                      ticket={ticket}
                      readOnly={true}
                    />
                  ))} */}
                </div>
              </div>
              <div className='col-sm-12 col-md-3 mb-md-0 mb-3'>
                <TicketsFilter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Tickets.propTypes = {
  user: PropTypes.object.isRequired,
  // readOnlyTickets: PropTypes.array,
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
  tickets: state.tickets,
});

export default connect(mapStateToProps, {
  getTicketsByUser,
})(Tickets);
