import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import PanelStat from './PanelStat';

import PieChart from './PieChart';
import BarChart from './BarChart';

const Panel = () => {
  return (
    <Fragment>
      {/* Page Header */}
      <div className='page-header no-margin-bottom'>
        <div className='container-fluid'>
          <h2 className='h5 no-margin-bottom'>Dashboard</h2>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className='container-fluid'>
        <ul className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/home'>Home</Link>
          </li>
          <li className='breadcrumb-item active'>Dashboard</li>
        </ul>
      </div>
      {/* Stats Section */}
      <section>
        <div className='container-fluid'>
          <PanelStat />
        </div>
      </section>
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <PieChart />
            </div>
            <div className='col-sm-12 col-md-6'>
              <BarChart />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Panel;
