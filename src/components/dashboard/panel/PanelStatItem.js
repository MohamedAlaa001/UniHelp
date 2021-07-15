const PanelStatItem = ({ icon = "", title, number, status = "" }) => {
  return (
    <div className='statistic-block block'>
      <div className='progress-details d-flex align-items-end justify-content-between'>
        <div className='title'>
          {icon !== "" && (
            <div className='icon'>
              <i className={`icon-${icon}`} style={{ fontSize: "1.25em" }}></i>
            </div>
          )}
          <strong>{title}</strong>
        </div>
        <div className={`number ticket-status ${status}`}>{number}</div>
      </div>
    </div>
  );
};

export default PanelStatItem;
