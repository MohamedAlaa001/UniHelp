import React from "react";
import PanelStatItem from "../../panel/PanelStatItem";

const TicketHistoryStat = ({ tickets }) => {
  const pendingCount = tickets.filter(
    (ticket) => ticket.status === "pending_master"
  ).length;
  const openCount = tickets.filter((ticket) => ticket.status === "open").length;
  const resolvedCount = tickets.filter(
    (ticket) => ticket.status === "resolved"
  ).length;
  const rejectedCount = tickets.filter(
    (ticket) => ticket.status === "rejected"
  ).length;
  return (
    <div className='row ticket-history'>
      <div className='col-sm-6 col-md-3'>
        <PanelStatItem title={"Pending Master"} number={pendingCount} />
      </div>
      <div className='col-sm-6 col-md-3'>
        <PanelStatItem
          title={"Open Tickets"}
          number={openCount}
          status={"open"}
        />
      </div>
      <div className='col-sm-6 col-md-3'>
        <PanelStatItem
          title={"Resolved Tickets"}
          number={resolvedCount}
          status={"resolved"}
        />
      </div>
      <div className='col-sm-6 col-md-3'>
        <PanelStatItem
          title={"Rejected Tickets"}
          number={rejectedCount}
          status={"rejected"}
        />
      </div>
    </div>
  );
};

export default TicketHistoryStat;
