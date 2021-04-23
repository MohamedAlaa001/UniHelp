import PanelStatItem from './PanelStatItem';

const PanelStat = () => {
  return (
    <div className='row'>
      {/* <div className='col-sm-6 col-md-3'>
        <PanelStatItem icon='user-1' title='All Tickets' number={50} />
      </div> */}
      <div className='col-sm-6 col-md-3'>
        <PanelStatItem
          icon='paper-and-pencil'
          title='Tickets new'
          number={15}
        />
      </div>
      <div className='col-sm-6 col-md-3'>
        <PanelStatItem
          icon='paper-and-pencil'
          title='Tickets open'
          status='open'
          number={19}
        />
      </div>
      <div className='col-sm-6 col-md-3'>
        <PanelStatItem
          icon='paper-and-pencil'
          title='Tickets closed'
          status='closed'
          number={6}
        />
      </div>
      <div className='col-sm-6 col-md-3'>
        <PanelStatItem
          icon='paper-and-pencil'
          title='Ticket resolved'
          status='resolved'
          number={10}
        />
      </div>
    </div>
  );
};

export default PanelStat;
