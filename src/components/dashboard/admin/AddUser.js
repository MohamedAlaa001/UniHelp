import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Alert from "../../layout/Alert";
import { setAlert } from "../../../actions/alert";
import { addUser } from "../../../actions/auth";
import AddUserForm from "./AddUserForm";

class AddUser extends Component {
  state = {
    formData: {
      username: { value: "", label: "Username" },
      password: { value: "", label: "Password" },
      confirmPassword: { value: "", label: "Confirm Password" },
      first_name: { value: "", label: "First Name" },
      last_name: { value: "", label: "Last Name" },
      role: "none",
    },
    errors: [],
  };

  textChangeHandler = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: {
          ...this.state.formData[e.target.name],
          value: e.target.value,
        },
      },
    });
  };

  roleChangeHandler = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        role: e.target.value,
      },
    });
  };

  createUser = (e) => {
    e.preventDefault();
    Object.keys(this.state.formData).forEach((item) => {
      if (item !== "role" && this.state.formData[item]["value"].trim() === "") {
        this.state.errors.push(
          `${this.state.formData[item]["label"]} is required`
        );
      }
    });
    if (this.state.formData.role === "none") {
      this.state.errors.push("User Role is Required");
    }
    if (
      this.state.formData.password["value"].trim() !==
      this.state.formData.confirmPassword["value"].trim()
    ) {
      this.state.errors.push("Password & Confirm Password don't match");
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

    const user = {
      username: this.state.formData.username["value"],
      password: this.state.formData.password["value"],
      first_name: this.state.formData.first_name["value"],
      last_name: this.state.formData.last_name["value"],
      role: this.state.formData.role,
    };

    this.props.addUser(user);

    // Reset Data
    this.setState({
      formData: {
        username: { value: "", label: "Username" },
        password: { value: "", label: "Password" },
        confirmPassword: { value: "", label: "Confirm Password" },
        first_name: { value: "", label: "First Name" },
        last_name: { value: "", label: "Last Name" },
        role: "none",
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
            <h2 className='h5 no-margin-bottom'>Add User</h2>
          </div>
        </div>
        {/* Breadcrumb */}
        <div className='container-fluid'>
          <ul className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/home'>Home</Link>
            </li>
            <li className='breadcrumb-item active'>Add User</li>
          </ul>
        </div>
        {/* Page Section */}
        <section>
          <div className='container-fluid'>
            <Alert />
            <div className='add-user block'>
              <div className='title'>
                <strong className='d-block'>Add User</strong>
              </div>
              <AddUserForm
                formData={this.state.formData}
                onTextChange={this.textChangeHandler}
                onRoleChange={this.roleChangeHandler}
                createUser={this.createUser}
              />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default connect(null, { setAlert, addUser })(AddUser);
