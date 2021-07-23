import React from "react";

const TicketSolution = ({ solution, lang }) => {
  return (
    <div>
      <button
        className='btn btn-primary mb-3'
        type='button'
        data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasTop'
        aria-controls='offcanvasTop'
      >
        Suggested Solution
      </button>

      <div
        className='offcanvas offcanvas-top'
        tabIndex='-1'
        id='offcanvasTop'
        aria-labelledby='offcanvasTopLabel'
      >
        <div className='offcanvas-header'>
          <h4 id='offcanvasTopLabel'>Solution</h4>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className={lang === "ar" ? "offcanvas-body ar" : "offcanvas-body"}>
          {solution}
        </div>
      </div>
    </div>
  );
};

export default TicketSolution;
