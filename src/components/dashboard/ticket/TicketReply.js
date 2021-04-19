import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TicketReply = ({ ticket }) => {
  return (
    <div className='replies'>
      <div className='ticket reply d-flex align-items-center'>
        <div className='content'>
          <div className='reply-header'>
            <div className='title'>
              <strong>
                <strong className='me-1'>Re:</strong>
                {ticket.isResolved ? (
                  <span className='ticket-status closed'>[CLOSED]</span>
                ) : (
                  <span className='ticket-status'>[OPEN]</span>
                )}
                {ticket.title}
              </strong>
              <span className='d-block'>By {'Fname Lname'}</span>
              <small className='date d-block'>{ticket.date}</small>
            </div>
          </div>
          <p className='d-block ticket-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            voluptas?
          </p>
          {/* <p className='d-block ticket-content'>{ticket.content}</p> */}
        </div>
      </div>
    </div>
  );
};
TicketReply.propTypes = {
  ticket: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ticket: state.ticket.ticket,
});

export default connect(mapStateToProps)(TicketReply);

/*
<div className='ticket reply d-flex align-items-center'>
          <div className='content'>
            <div className='title'>
              <strong>
                <strong className='me-1'>Re:</strong>
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
*/

/*
<div className='title no-margin-bottom'>
              <strong>
                <strong className='me-1'>Re:</strong>
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
*/
