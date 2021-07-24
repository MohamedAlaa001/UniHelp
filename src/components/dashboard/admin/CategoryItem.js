import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { connect } from "react-redux";
import { setConfirmation } from "../../../actions/confirmation";

import { editCategory, deleteCategory } from "../../../actions/tickets";

const CategoryItem = ({
  category,
  editCategory,
  deleteCategory,
  setConfirmation,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { category_id, title } = category;

  return (
    <div className='category-item'>
      <div className='category-item-header lead'>
        <div>{title}</div>
        <div>
          <strong
            className='icon-edit'
            style={open ? { color: "var(--color-success)" } : {}}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          ></strong>
          <strong
            className='icon-delete'
            onClick={() => {
              setConfirmation(
                "Category Delete Request",
                `Are you sure you want to delete category ${title}?`,
                (value) => {
                  if (value) {
                    deleteCategory(category_id);
                  }
                }
              );
            }}
          ></strong>
        </div>
      </div>
      <Collapse in={open}>
        <div>
          <form
            autoComplete='off'
            onSubmit={(e) => {
              e.preventDefault();
              setConfirmation(
                "Rename Request",
                `Are you sure you want to change category name from ${title} to ${value} ?`,
                (returnValue) => {
                  if (returnValue) {
                    editCategory(category_id, value.trim());
                    setValue("");
                  }
                }
              );
            }}
          >
            <div className='d-flex align-items-center justify-content-between flex-column flex-md-row my-2 '>
              <input
                type='text'
                className='form-control flex-grow-1'
                value={value}
                placeholder='Category name...'
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                autoCapitalize='off'
              />
              <button
                type='submit'
                className='btn btn-primary align-self-end mt-2 mt-md-0 ms-0 ms-md-2'
                disabled={value.trim().length === 0}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </Collapse>
    </div>
  );
};

export default connect(null, { editCategory, deleteCategory, setConfirmation })(
  CategoryItem
);
