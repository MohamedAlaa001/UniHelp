import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import ChangePasswordForm from "./ChangePasswordForm";
import Alert from "../../layout/Alert";
import { connect } from "react-redux";
import { changeUserPassword } from "../../../actions/auth";
import { setAlert } from "../../../actions/alert";

class ChangePassword extends Component {
  state = {
    formData: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    errors: [],
  };

  onChangeHandler = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  changePassword = (e) => {
    e.preventDefault();

    if (this.state.formData.currentPassword.trim() === "") {
      this.state.errors.push("Current Password is Required");
    }
    if (this.state.formData.newPassword.trim() === "") {
      this.state.errors.push("New Password is Required");
    }
    if (this.state.formData.confirmNewPassword.trim() === "") {
      this.state.errors.push("Confirm New Password is Required");
    }
    if (
      this.state.formData.newPassword.trim() !==
      this.state.formData.confirmNewPassword.trim()
    ) {
      this.state.errors.push("New Password & Confirm New Password don't match");
    }
    if (
      this.state.formData.currentPassword.trim() ===
      this.state.formData.newPassword
    ) {
      this.state.errors.push("You can't use an old password at the moment");
    }

    // set Errors
    this.setState({ errors: this.state.errors });

    if (this.state.errors.length > 0) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.state.errors.forEach((err) => {
        this.props.setAlert(err, "danger", false, 3000);
      });

      // Reset Data
      this.setState({ errors: [] });

      return;
    }

    const body = {
      password: this.state.formData.currentPassword,
      new_password: this.state.formData.newPassword,
    };

    this.props.changeUserPassword(body);

    // Rest State
    this.setState({
      formData: {
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      errors: [],
    });
  };
  render() {
    return (
      <Fragment>
        {/* Page Header */}
        <div className='page-header no-margin-bottom'>
          <div className='container-fluid'>
            <h2 className='h5 no-margin-bottom'>Change Password</h2>
          </div>
        </div>
        {/* Breadcrumb */}
        <div className='container-fluid'>
          <ul className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/home'>Home</Link>
            </li>
            <li className='breadcrumb-item active'>Change Password</li>
          </ul>
        </div>
        {/* Page Section */}
        <section>
          <div className='container-fluid'>
            <Alert />
            <div className='add-user block'>
              <div className='title'>
                <strong className='d-block'>Change Password</strong>
              </div>
              <ChangePasswordForm
                formData={this.state.formData}
                onChangeHandler={this.onChangeHandler}
                changePassword={this.changePassword}
              />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default connect(null, { changeUserPassword, setAlert })(ChangePassword);
