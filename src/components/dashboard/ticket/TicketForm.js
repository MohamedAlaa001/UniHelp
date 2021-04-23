import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createTicket } from '../../../actions/tickets';
import { setAlert } from '../../../actions/alert';
// Alert
import Alert from '../../layout/Alert';

import TicketFormInput from './TicketFormInput';

const TicketForm = ({ createTicket, user: { id }, setAlert, history }) => {
  const [ticketData, setTicketData] = useState({
    title: '',
    content: '',
    categoryValue: '',
    errors: [],
  });

  const { title, content, categoryValue, errors } = ticketData;

  const onChangeTextHandler = (e) => {
    setTicketData({
      ...ticketData,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSwitchHandler = (e) => {
    setTicketData({
      ...ticketData,
      categoryValue: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      errors.push('Ticket Title is Required');
    }
    if (content.trim() === '') {
      errors.push('Ticket Content is Required');
    }
    if (categoryValue === '') {
      errors.push('Ticket Category is Required');
    }

    setTicketData({
      ...ticketData,
      errors,
    });

    if (errors.length > 0) {
      errors.forEach((err) => {
        setAlert(err, 'danger', false, 1000);
      });

      // reset errors
      setTicketData({
        ...ticketData,
        categoryValue: '',
        errors: [],
      });
      document.querySelector('form').reset();
      return;
    }

    const ticketBody = {
      user: id,
      title,
      content,
      category: categoryValue,
      date: 'Apr, 14,2021, 9:00 PM',
      path: [],
      replies: [],
      isResloved: false,
    };
    createTicket(ticketBody);
    // Form Reset
    setTicketData({
      title: '',
      content: '',
      categoryValue: '',
      errors: [],
    });
    document.querySelector('form').reset();
    history.push('/tickets');
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
          <form className='ticket-form' onSubmit={(e) => onSubmitHandler(e)}>
            <div className='row'>
              {/* Left Panel */}
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
              {/* Right Panel */}
              <div className='col'>
                <div className='block'>
                  <div className='title'>
                    <strong className='d-block'>Select Category</strong>
                  </div>
                  <div className='block-body'>
                    <TicketFormInput
                      categoryValue={1}
                      onChange={(e) => onChangeSwitchHandler(e)}
                      label='Department 1'
                    />
                    <TicketFormInput
                      categoryValue={2}
                      onChange={(e) => onChangeSwitchHandler(e)}
                      label='Department 2'
                    />
                    <TicketFormInput
                      categoryValue={3}
                      onChange={(e) => onChangeSwitchHandler(e)}
                      label='Department 3'
                    />
                    <TicketFormInput
                      categoryValue={4}
                      onChange={(e) => onChangeSwitchHandler(e)}
                      label='Department 4'
                    />
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

export default connect(mapStateToProps, { createTicket, setAlert })(TicketForm);
