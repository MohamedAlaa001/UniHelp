import React, { Fragment } from 'react';
import Spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={Spinner}
        alt='Loagin...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Spinner;
