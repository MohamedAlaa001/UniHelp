import { useState, useEffect } from 'react';

const TicketsFilter = () => {
  const [filterValue, setFilterValue] = useState([]);

  // filter effect
  useEffect(() => {
    const tickets = Array.from(
      document.querySelectorAll('.tickets > a.ticket')
    );
    tickets.forEach((ticket) => {
      if (
        !filterValue.includes(ticket.dataset.status) &&
        filterValue.length > 0
      ) {
        ticket.setAttribute('data-filter', true);
      } else {
        ticket.setAttribute('data-filter', false);
      }
    });
  }, [filterValue]);

  const filterOnChangeHandler = (e) => {
    if (e.target.checked) {
      setFilterValue([...filterValue, e.target.value]);
    } else {
      setFilterValue(filterValue.filter((el) => el !== e.target.value));
    }
  };

  return (
    <div className='tickets-filter'>
      <div className='title'>
        <strong>Filter:</strong>
      </div>
      <div className='form-check form-switch'>
        <input
          type='checkbox'
          className='form-check-input'
          name='filter'
          value='new'
          onChange={(e) => filterOnChangeHandler(e)}
        />
        <label className='form-check-label'>New</label>
      </div>
      <div className='form-check form-switch'>
        <input
          type='checkbox'
          className='form-check-input'
          name='filter'
          value='open'
          onChange={(e) => filterOnChangeHandler(e)}
        />
        <label className='form-check-label'>Open</label>
      </div>
      <div className='form-check form-switch'>
        <input
          type='checkbox'
          className='form-check-input'
          name='filter'
          value='pending'
          onChange={(e) => filterOnChangeHandler(e)}
        />
        <label className='form-check-label'>Pending Resolve</label>
      </div>
      <div className='form-check form-switch'>
        <input
          type='checkbox'
          className='form-check-input'
          name='filter'
          value='resolved'
          onChange={(e) => filterOnChangeHandler(e)}
        />
        <label className='form-check-label'>Resolved</label>
      </div>
      <div className='form-check form-switch'>
        <input
          type='checkbox'
          className='form-check-input'
          name='filter'
          value='closed'
          onChange={(e) => filterOnChangeHandler(e)}
        />
        <label className='form-check-label'>Closed</label>
      </div>
    </div>
  );
};

export default TicketsFilter;
