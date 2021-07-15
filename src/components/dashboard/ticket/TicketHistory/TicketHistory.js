import React, { Fragment, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getStudentTickets } from "../../../../actions/tickets";

import Alert from "../../../layout/Alert";
import TicketsFilter from "../TicketsFilter";
import TicketItem from "../TicketItem";
import TicketHistoryStat from "./TicketHistoryStat";

const TicketHistory = ({ getStudentTickets, tickets }) => {
  const match = useParams();

  useEffect(() => {
    getStudentTickets(match.user);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {/* Page Header */}
      <div className='page-header no-margin-bottom'>
        <div className='container-fluid'>
          <h2 className='h5 no-margin-bottom'>Student Tickets</h2>
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
          <li className='breadcrumb-item active'>Student Tickets</li>
        </ul>
      </div>
      {/* Page Section */}
      <section>
        <div className='container-fluid'>
          <Alert />
          <div className='tickets-block block'>
            <TicketHistoryStat tickets={tickets} />
            <div className='row flex-column-reverse flex-md-row-reverse '>
              <div className='col-sm-12 col-md-9'>
                <div className='tickets'>
                  {tickets.map((ticket) => (
                    <TicketItem key={ticket.ticket_id} ticket={ticket} />
                  ))}
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

TicketHistory.propTypes = {
  tickets: PropTypes.array.isRequired,
  getStudentTickets: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tickets: state.tickets.studentTickets,
});

export default connect(mapStateToProps, { getStudentTickets })(TicketHistory);
