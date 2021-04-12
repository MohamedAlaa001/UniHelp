import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Notifications = () => {
  return (
    <Fragment>
      {/* Page Header */}
      <div className='page-header no-margin-bottom'>
        <div className='container-fluid'>
          <h2 className='h5 no-margin-bottom'>Notifications</h2>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className='container-fluid'>
        <ul className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/home'>Home</Link>
          </li>
          <li className='breadcrumb-item active'>Notifications</li>
        </ul>
      </div>
      {/* Page Section */}
      <section className='no-padding-top'>
        <div className='container-fluid'>
          <div className='messages-block block'>
            <div className='messages'>
              <a href='#' className='message d-flex align-items-center'>
                <div className='content unRead'>
                  <strong className='d-block'>Nadia Halsey</strong>
                  <span className='d-block'>lorem ipsum dolor sit amit</span>
                  <small className='date d-block'>9:30am</small>
                </div>
              </a>
              <a href='#' className='message d-flex align-items-center'>
                <div className='content'>
                  <strong className='d-block'>Peter Ramsy</strong>
                  <span className='d-block'>lorem ipsum dolor sit amit</span>
                  <small className='date d-block'>7:40am</small>
                </div>
              </a>
              <a href='#' className='message d-flex align-items-center'>
                <div className='content'>
                  <strong className='d-block'>Sam Kaheil</strong>
                  <span className='d-block'>lorem ipsum dolor sit amit</span>
                  <small className='date d-block'>6:55am</small>
                </div>
              </a>
              <a href='#' className='message d-flex align-items-center'>
                <div className='content'>
                  <strong className='d-block'>Sara Wood</strong>
                  <span className='d-block'>lorem ipsum dolor sit amit</span>
                  <small className='date d-block'>10:30pm</small>
                </div>
              </a>
              <a href='#' className='message d-flex align-items-center'>
                <div className='content'>
                  <strong className='d-block'>Nader Magdy</strong>
                  <span className='d-block'>lorem ipsum dolor sit amit</span>
                  <small className='date d-block'>9:47pm</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Notifications;
