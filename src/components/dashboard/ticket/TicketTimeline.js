import { useEffect } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  clearTicketTimeline,
  getTicketTimeline,
} from "../../../actions/tickets";

const TicketTimeline = ({
  ticket_id,
  status,
  timeline,
  getTicketTimeline,
  clearTicketTimeline,
}) => {
  useEffect(() => {
    // getTicketTimeline(ticket_id);
    return () => {
      clearTicketTimeline();
    };
    // eslint-disable-next-line
  }, []);

  return timeline !== undefined ? (
    <div className='col'>
      <div className='timeline card'>
        <div className='card-body'>
          <h4 className='card-title'>Ticket Timeline</h4>
          <div className='timeline-body'>
            {timeline.length
              ? timeline.map(
                  (path) =>
                    path !== null && (
                      <div className='timeline-item' key={uuidv4()}>
                        <span className='timeline-item-dot'>
                          <i className='badge badge-dot'> </i>
                        </span>
                        <div className='timeline-item-content'>
                          <p
                            className='no-margin-bottom d-md-inline-block d-lg-block'
                            style={{ textTransform: "capitalize" }}
                          >
                            {path.employee},
                            <span
                              className={`ticket-status ms-1 ${path.status}`}
                            >{`Status: ${path.status}`}</span>
                          </p>
                          <span className='timeline-item-date d-block d-md-inline-block d-lg-block ms-md-2 ms-lg-0'>
                            {path.timestamp}
                          </span>
                        </div>
                      </div>
                    )
                )
              : null}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
const mapStateToProps = (state) => ({
  timeline: state.tickets.ticket.timeline,
});

export default connect(mapStateToProps, {
  clearTicketTimeline,
  getTicketTimeline,
})(TicketTimeline);
