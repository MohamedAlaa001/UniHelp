import { Fragment, useState } from "react";

import SearchPanel from "./SearchPanel";

const TicketTransfer = ({ isPrivate }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <Fragment>
      <SearchPanel
        isPrivate={isPrivate}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
      />
      <div className='mb-2'>
        <div
          className='btn w-100 search-open'
          onClick={() => {
            document.querySelector("#search-panel").classList.add("d-block");
            document.body.classList.add("no-scroll");
          }}
        >
          Forward Ticket
        </div>

        <div className='search-results'>
          <ul className='list-unstyled mb-0'>
            {selectedEmployee !== null ? (
              <li style={{ textTransform: "capitalize" }}>
                <strong>* {selectedEmployee.name}</strong>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default TicketTransfer;
