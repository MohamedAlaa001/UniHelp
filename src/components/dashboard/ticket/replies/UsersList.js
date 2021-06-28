import { useState, useEffect } from 'react';
import classnames from 'classnames';

const UsersList = ({ employee, selectedEmployee, setSelectedEmployee }) => {
  const [isChecked, setIsChecked] = useState(() => {
    if (
      selectedEmployee !== null &&
      selectedEmployee.username === employee.username
    ) {
      return true;
    } else {
      return false;
    }
  });
  useEffect(() => {
    if (
      selectedEmployee !== null &&
      selectedEmployee.username === employee.username
    ) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [selectedEmployee, employee.username]);
  const onChangeHandler = () => {
    if (!isChecked) {
      setSelectedEmployee(employee);
    } else {
      setSelectedEmployee(null);
    }
  };

  const blockStyle = classnames('d-flex justify-content-between', {
    'list-selected': isChecked,
  });

  return (
    <li className={blockStyle} onClick={(e) => onChangeHandler(e)}>
      <strong>{employee.name}</strong>
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
