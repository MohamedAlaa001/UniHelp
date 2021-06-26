import { useState, useEffect } from 'react';
import classnames from 'classnames';

const UsersList = ({ user, selectedEmployee, setSelectedEmployee }) => {
  const [isChecked, setIsChecked] = useState(() => {
    if (selectedEmployee !== null && selectedEmployee.id === user.id) {
      return true;
    } else {
      return false;
    }
  });
  useEffect(() => {
    if (selectedEmployee !== null && selectedEmployee.id === user.id) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [selectedEmployee, user.id]);
  const onChangeHandler = () => {
    if (!isChecked) {
      setSelectedEmployee(user);
    } else {
      setSelectedEmployee(null);
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
