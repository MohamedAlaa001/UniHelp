import { Fragment, useState } from 'react';
import classnames from 'classnames';

import SearchPanel from './SearchPanel';

const ReplyFormSearch = ({ isPrivate }) => {
  const [employees, setSelectedEmployees] = useState([]);

  return (
    <Fragment>
      <SearchPanel
        isPrivate={isPrivate}
        employees={employees}
        setSelectedEmployees={setSelectedEmployees}
      />
      <div className='mb-2'>
        <div
          className='btn w-100 search-open'
          onClick={() => {
            document.querySelector('#search-panel').classList.add('d-block');
            document.body.classList.add('no-scroll');
          }}
        >
          Forward Ticket
        </div>

        <div className='search-results'>
          <ul className='list-unstyled mb-0'>
            {employees.map((employee) => (
              <li key={employee.id} style={{ textTransform: 'capitalize' }}>
                <strong>{employee.name}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ReplyFormSearch;
