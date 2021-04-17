import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const TicketForm = () => {
  return (
    <Fragment>
      {/* Page Header */}
      <div className='page-header no-margin-bottom'>
        <div className='container-fluid'>
          <h2 className='h5 no-margin-bottom'>Tickets</h2>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className='container-fluid'>
        <ul className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/home'>Home</Link>
          </li>
          <li className='breadcrumb-item'>
            <Link to='/tickets'>Tickets</Link>
          </li>
          <li className='breadcrumb-item active'>Create Ticket</li>
        </ul>
      </div>
      {/* Page Section */}
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-8'>
              <div className='block'>
                <div class='title'>
                  <strong class='d-block'>Create Ticket</strong>
                </div>
                <div className='block-body'>
                  <form>
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        className='form-control input-material'
                        name='title'
                        placeholder=''
                      />
                      <label htmlFor='subjec' className='label-material'>
                        Subject
                      </label>
                    </div>
                    <div className='form-floating mb-3'>
                      <textarea
                        name='content'
                        className='form-control input-material'
                        placeholder=''
                      ></textarea>
                      <label htmlFor='content' className='label-material'>
                        Content
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='block'>
                <div class='title'>
                  <strong class='d-block'>Select Category</strong>
                </div>
                <div className='block-body'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TicketForm;
