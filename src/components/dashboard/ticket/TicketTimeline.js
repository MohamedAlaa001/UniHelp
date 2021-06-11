const TicketTimeline = ({ path }) => {
  return (
    <div className='timeline-item'>
      <span className='timeline-item-dot'>
        <i className='badge badge-dot'> </i>
      </span>
      <div className='timeline-item-content'>
        <p className='no-margin-bottom'>{path.name}</p>
        <span className='timeline-item-date d-block'>{path.timestamp}</span>
      </div>
    </div>
  );
};

export default TicketTimeline;
