import { format, toDate } from 'date-fns';

const TicketTimeline = ({ path }) => {
  const date = format(toDate(path.date), 'MMM, d, yyyy, h:mm aa');

  return (
    <div className='timeline-item'>
      <span className='timeline-item-dot'>
        <i className='badge badge-dot'> </i>
      </span>
      <div className='timeline-item-content'>
        <p className='no-margin-bottom'>{path.name}</p>
        <span className='timeline-item-date d-block'>{date}</span>
      </div>
    </div>
  );
};

export default TicketTimeline;
