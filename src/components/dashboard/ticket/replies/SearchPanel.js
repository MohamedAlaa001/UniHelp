import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import classnames from "classnames";

import UsersList from "./UsersList";

import { setConfirmation } from "../../../../actions/confirmation";
import { transferTicket } from "../../../../actions/tickets";

const SearchPanel = ({
  isPrivate,
  selectedEmployee,
  setSelectedEmployee,
  setConfirmation,
  transferTicket,
  ticket_id,
  employees,
}) => {
  const history = useHistory();
  const [isConfirm, setIsConfirm] = useState(false);
  useEffect(() => {
    if (isConfirm) {
      transferTicketHandler();
    }
    // eslint-disable-next-line
  }, [isConfirm]);

  const [searchInput, setSearchInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const isPrivateStyle = classnames("input-group-text", { active: isPrivate });

  const onChangeSearchHandler = (e) => {
    setSearchInput(e.target.value);

    setFilteredUsers(
      employees.filter((employee) => {
        return employee.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase().trim());
      })
    );
  };

  const transferTicketHandler = () => {
    transferTicket(ticket_id, selectedEmployee.username);
    // transferTicket(ticket_id, selectedEmployee.username)

    // Reset document scroll & Confirmation dialogue
    setIsConfirm(false);
    document.querySelector("#search-panel").classList.remove("d-block");
    document.body.classList.remove("no-scroll");
    setSearchInput("");
    // return to /tickets
    history.replace("/tickets");
  };

  return (
    <div className='search-block' id='search-panel'>
      <div className='search-inner d-flex align-items-center justify-content-center'>
        <div
          className='close-btn'
          onClick={() => {
            document.querySelector("#search-panel").classList.remove("d-block");
            document.body.classList.remove("no-scroll");
            setSearchInput(""); // Reset
          }}
        >
          Close <i className='fa fa-close'></i>
        </div>

        <div className='search-content'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control search-input'
              placeholder='Search for an employee...'
              value={searchInput}
              onChange={(e) => onChangeSearchHandler(e)}
            />
            <div className={isPrivateStyle}>
              <i className='icon-private '></i>
              Private Reply
            </div>
          </div>
          {selectedEmployee !== null ? (
            <strong className='ms-2 mt-2'>* {selectedEmployee.name}</strong>
          ) : null}
          <div className='search-display'>
            <ul className='list-unstyled mb-0'>
              {searchInput === "" ? (
                employees.map((employee) => (
                  <UsersList
                    key={employee.username}
                    employee={employee}
                    selectedEmployee={selectedEmployee}
                    setSelectedEmployee={setSelectedEmployee}
                  />
                ))
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((employee) => (
                  <UsersList
                    key={employee.username}
                    employee={employee}
                    selectedEmployee={selectedEmployee}
                    setSelectedEmployee={setSelectedEmployee}
                  />
                ))
              ) : (
                <strong>
                  Opps we can't find an employee with that name...
                </strong>
              )}
            </ul>
          </div>

          {selectedEmployee !== null ? (
            <div
              className='btn mt-2 w-100 search-open'
              onClick={() => {
                setConfirmation(
                  "Transfer Request",
                  `Are you sure you want to transfer ticket to ${selectedEmployee.name}`,
                  setIsConfirm
                );
              }}
            >
              Transfer Ticket
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
SearchPanel.propTypes = {
  employees: PropTypes.array,
};

const mapStateToProps = (state) => ({
  ticket_id: state.tickets.ticket.ticket_id,
  employees: state.tickets.employees,
});

export default connect(mapStateToProps, { setConfirmation, transferTicket })(
  SearchPanel
);
