import { useState } from 'react';
import classnames from 'classnames';

const UsersList = ({ user, employees, setSelectedEmployees }) => {
  const [isChecked, setIsChecked] = useState(() => {
    if (employees.some((employee) => employee.id === user.id)) {
      return true;
    } else {
      return false;
    }
  });
  const onChangeHandler = (e) => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      setSelectedEmployees([...employees, user]);
    } else {
      setSelectedEmployees(
        employees.filter((employee) => {
          return employee.id !== user.id;
        })
      );
    }
  };

  const blockStyle = classnames('d-flex justify-content-between', {
    'list-selected': isChecked,
  });

  return (
    <li className={blockStyle} onClick={(e) => onChangeHandler(e)}>
      <strong>{user.name}</strong>
      <div className='d-none'>
        <input
          className=''
          type='checkbox'
          checked={isChecked}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      {isChecked ? <div className='icon-forward'></div> : null}
    </li>
  );
};

export default UsersList;
