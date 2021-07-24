import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addCategory, getCategories } from "../../../actions/tickets";
import { setConfirmation } from "../../../actions/confirmation";

import Alert from "../../layout/Alert";
import Spinner from "../../layout/Spinner";
import CategoryItem from "./CategoryItem";

class ManageCategory extends Component {
  state = {
    value: "",
  };
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    return this.props.categories === undefined ? (
      <Spinner />
    ) : (
      <Fragment>
        {/* Page Header */}
        <div className='page-header no-margin-bottom'>
          <div className='container-fluid'>
            <h2 className='h5 no-margin-bottom'>Categories</h2>
          </div>
        </div>
        {/* Breadcrumb */}
        <div className='container-fluid'>
          <ul className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/home'>Home</Link>
            </li>
            <li className='breadcrumb-item active'>Categories</li>
          </ul>
        </div>
        {/* Page Section */}
        <section>
          <div className='container-fluid'>
            <Alert />
            <div className='categories-block block'>
              <div className='title'>
                <strong className='d-block'>Manage Categories</strong>
              </div>

              <form
                autoComplete='off'
                className='col-12 col-md-6'
                onSubmit={(e) => {
                  e.preventDefault();
                  this.props.setConfirmation(
                    "Category Request",
                    `Are you sure you want to add a category ${this.state.value}?`,
                    (value) => {
                      if (value) {
                        this.props.addCategory(this.state.value.trim());
                      }
                    }
                  );
                }}
              >
                <div className='form-floating'>
                  <input
                    type='text'
                    className='form-control input-material'
                    value={this.state.value}
                    placeholder=' '
                    onChange={(e) => this.setState({ value: e.target.value })}
                    autoCapitalize='off'
                  />
                  <label className='label-material'>Add Category...</label>
                </div>
                <div className='d-grid my-2 me-auto col-6 col-lg-4'>
                  <button
                    type='submit'
                    className='btn btn-primary'
                    disabled={this.state.value.trim().length === 0}
                  >
                    Add Category
                  </button>
                </div>
              </form>

              <div className='row categories'>
                {this.props.categories.map((category) => (
                  <CategoryItem
                    key={category.category_id}
                    category={category}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

ManageCategory.propTypes = {
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.tickets.categories,
});
export default connect(mapStateToProps, {
  setConfirmation,
  getCategories,
  addCategory,
})(ManageCategory);
