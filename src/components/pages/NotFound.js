import React from 'react';

const NotFound = () => {
  return (
    <div className='landing'>
      <div className='container mt-5 pt-5 text-light'>
        <h1 className='display-3 '>
          <span className='text-danger'>404</span> Page Not Found
        </h1>
        <p className='lead'>Sorry, that page does not exist!</p>
      </div>
    </div>
  );
};

export default NotFound;
