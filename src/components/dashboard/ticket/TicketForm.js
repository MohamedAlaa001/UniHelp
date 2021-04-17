import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createTicket } from '../../../actions/tickets';
// Alert
import Alert from '../../layout/Alert';

const TicketForm = ({ createTicket, user: { id } }) => {
  const [ticketData, setTicketData] = useState({
    title: '',
    content: '',
  });

  const [categoryData, setCategoryData] = useState({
    departmentX: false,
    departmentY: false,
    departmentZ: false,
  });

  const { title, content } = ticketData;

  const onChangeTextHandler = (e) => {
    setTicketData({
      ...ticketData,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSwitchHandler = (e) => {
    setCategoryData({
      ...categoryData,
      [e.target.name]: e.target.checked,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Validate Form Here
    const ticketBody = {
      user: id,
      title,
      content,
      isResloved: false,
    };
    createTicket(ticketBody);

    // history.
  };
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
          <Alert />
          <div className='block alert-primary'>
            <strong>Form Validation</strong>
          </div>
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className='row'>
              <div className='col-md-12 col-lg-8'>
                <div className='block'>
                  <div className='title'>
                    <strong className='d-block'>Create Ticket</strong>
                  </div>
                  <div className='block-body'>
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        className='form-control input-material'
                        name='title'
                        value={title}
                        placeholder=''
                        onChange={(e) => onChangeTextHandler(e)}
                      />
                      <label htmlFor='subjec' className='label-material'>
                        Subject
                      </label>
                    </div>
                    <div className='form-floating mb-3'>
                      <textarea
                        className='form-control input-material'
                        name='content'
                        value={content}
                        placeholder=''
                        onChange={(e) => onChangeTextHandler(e)}
                      ></textarea>
                      <label htmlFor='content' className='label-material'>
                        Content
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='block'>
                  <div className='title'>
                    <strong className='d-block'>Select Category</strong>
                  </div>
                  <div className='block-body'>
                    <div className='form-check form-switch'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        name='departmentX'
                        onChange={(e) => onChangeSwitchHandler(e)}
                      />
                      <label className='form-check-label'>Department X</label>
                    </div>
                    <div className='form-check form-switch'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        name='departmentY'
                        onChange={(e) => onChangeSwitchHandler(e)}
                      />
                      <label className='form-check-label'>Department Y</label>
                    </div>
                    <div className='form-check form-switch'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        name='departmentZ'
                        onChange={(e) => onChangeSwitchHandler(e)}
                      />
                      <label className='form-check-label'>Department Z</label>
                    </div>
                    <div className='d-grid mt-3 mx-md-auto col-md-8 col-lg-12'>
                      <input
                        type='submit'
                        className='btn btn-primary'
                        value='Submit'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

TicketForm.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { createTicket })(TicketForm);
