import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const TicketTimeline = ({ timeline }) => {
  return timeline !== undefined ? (
    <div className='col'>
      <div className='timeline card'>
        <div className='card-body'>
          <h4 className='card-title'>Ticket Timeline</h4>
          <div className='timeline-body'>
            {timeline.length > 0
              ? timeline.map((path) => (
                  <div className='timeline-item' key={uuidv4()}>
                    <span className='timeline-item-dot'>
                      <i className='badge badge-dot'> </i>
                    </span>
                    <div className='timeline-item-content'>
                      <p className='no-margin-bottom d-md-inline-block d-lg-block'>
                        {path.employee}
                      </p>
                      <span className='timeline-item-date d-block d-md-inline-block d-lg-block ms-md-2 ms-lg-0'>
                        {path.timestamp}
                      </span>
                    </div>
                  </div>
                ))
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

export default connect(mapStateToProps)(TicketTimeline);
