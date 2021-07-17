import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createTicket, getCategories } from "../../../actions/tickets";
import { setAlert } from "../../../actions/alert";

import Alert from "../../layout/Alert";
import Spinner from "../../layout/Spinner";

import TicketFormInput from "./TicketFormInput";
import TicketFormFiles from "./TicketFormFiles";

const TicketForm = ({
  getCategories,
  categories,
  createTicket,
  user: { id },
  setAlert,
  history,
}) => {
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const [ticketData, setTicketData] = useState({
    title: "",
    content: "",
    category_id: null,
    errors: [],
  });
  const [isValid, setIsValid] = useState(true);
  const [filesData, setFilesData] = useState({
    files: [],
    invalidFiles: [],
  });

  const { title, content, category_id, errors } = ticketData;

  const onChangeTextHandler = (e) => {
    setTicketData({
      ...ticketData,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSwitchHandler = (e) => {
    setTicketData({
      ...ticketData,
      category_id: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      errors.push("Ticket Title is Required");
    }
    if (content.trim() === "") {
      errors.push("Ticket Content is Required");
    }
    if (category_id === null) {
      errors.push("Ticket Category is Required");
    }

    setTicketData({
      ...ticketData,
      errors,
    });

    if (errors.length > 0) {
      // scroll up
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      errors.forEach((err) => {
        setAlert(err, "danger", false, 3000);
      });

      // reset errors
      if (document.querySelector('input[name="categorySwitch"]:checked')) {
        document.querySelector(
          'input[name="categorySwitch"]:checked'
        ).checked = false;
      }

      setTicketData({
        ...ticketData,
        category_id: null,
        errors: [],
      });
      return;
    }

    const ticketBody = {
      title,
      content,
      priority: 0,
      category_id,
    };
    createTicket(ticketBody);
    // Form Reset
    setTicketData({
      title: "",
      content: "",
      category_id: null,
      errors: [],
    });

    if (document.querySelector('input[name="categorySwitch"]:checked')) {
      document.querySelector(
        'input[name="categorySwitch"]:checked'
      ).checked = false;
    }
    history.push("/tickets");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // setAlert('Ticket Created', 'success', false, 3000);
  };

  return categories === null ? (
    <Spinner />
  ) : (
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
          <form
            className='ticket-form'
            autoComplete='off'
            autoCorrect='off'
            onSubmit={(e) => onSubmitHandler(e)}
          >
            <div className='row'>
              {/* Left Panel */}
              <div className='col-md-12 col-lg-8'>
                <div className='block'>
                  <div className='title'>
                    <strong className='d-block'>Create Ticket</strong>
                  </div>
                  <div className='block-body'>
                    {/* Title */}
                    <div className='form-floating mb-3'>
                      <input
                        type='text'
                        className='form-control input-material'
                        name='title'
                        value={title}
                        placeholder=' '
                        onChange={(e) => onChangeTextHandler(e)}
                      />
                      <label htmlFor='subject' className='label-material'>
                        Subject
                      </label>
                    </div>
                    {/* Attachments */}
                    <TicketFormFiles
                      filesData={filesData}
                      setFilesData={setFilesData}
                      setIsValid={setIsValid}
                    />

                    {/* Text Area */}
                    <div className='form-floating mb-3'>
                      <textarea
                        className='form-control input-material'
                        name='content'
                        value={content}
                        placeholder=' '
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
                    {categories.map((category) => (
                      <TicketFormInput
                        key={category.category_id}
                        categoryId={category.category_id}
                        onChange={(e) => onChangeSwitchHandler(e)}
                        label={category.title}
                      />
                    ))}
                    <div className='d-grid mt-3 mx-md-auto col-md-8 col-lg-12'>
                      <input
                        type='submit'
                        className='btn btn-primary'
                        value='Submit'
                        disabled={!isValid}
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
  categories: PropTypes.array,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  categories: state.tickets.categories,
});

export default connect(mapStateToProps, {
  getCategories,
  createTicket,
  setAlert,
})(TicketForm);
