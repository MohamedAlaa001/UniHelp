import React from 'react';

const NotFound = () => {
  return (
    <div className='landing'>
      <div className='dark-overlay'>
        <div className='container text-light'>
          <h1 className='display-3 mt-5 '>
            <span className='text-danger'>404</span> Page Not Found
          </h1>
          <p className='lead'>Sorry, that page does not exist!</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
