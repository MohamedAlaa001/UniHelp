import React from 'react';

const Home = ({ name = 'Other' }) => {
  return (
    <div className='page-header'>
      <div className='container-fluid'>
        <h2 className='h5 no-margin-bottom'>{name}</h2>
      </div>
    </div>
  );
};

export default Home;
