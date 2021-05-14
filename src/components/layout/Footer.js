import React from 'react';

import { getYear } from 'date-fns';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__block block no-margin-bottom'>
        <div className='container-fluid text-center'>
          <p className='no-margin-bottom'>
            {getYear(new Date())} &copy; UniHelp
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
