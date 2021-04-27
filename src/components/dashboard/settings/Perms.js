import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PermsRoles from './PermsRoles';
import PermsUsers from './PermsUsers';

const Perms = () => {
  return (
    <Fragment>
      {/* Page Header */}
      <div className='page-header no-margin-bottom'>
        <div className='container-fluid'>
          <h2 className='h5 no-margin-bottom'>Permissions</h2>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className='container-fluid'>
        <ul className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/home'>Home</Link>
          </li>
          <li className='breadcrumb-item active'>Permissions</li>
        </ul>
      </div>
      {/* Page Section */}
      <section>
        <div className='container-fluid'>
          <div className='block'>
            <div className='perms-block'>
              <div className='row'>
                <div className='col-lg-6'>
                  <PermsRoles />
                </div>
                <div className='col'>
                  <PermsUsers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Perms;
