import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <div className='drawer drawer-mobile'>
          <input
            id='dashboard-drawer'
            type='checkbox'
            className='drawer-toggle'
          />
          <div className='drawer-content'>
            <Outlet></Outlet>
          </div>
          <div className='drawer-side bg-gray-300 text-white '>
            <label
              htmlFor='dashboard-drawer'
              className='drawer-overlay'
            ></label>
            <ul className='menu p-4 w-80 bg-black-100 text-base-content'>
              {/* <!-- Sidebar content here --> */}

              <li>
                <Link to='/country'>Country</Link>
              </li>

              <li>
                <Link to='/city'>City</Link>
              </li>
              <li>
                <Link to='/topics'>Topics</Link>
              </li>
              <li>
                <Link to='/sector'>Sector</Link>
              </li>
              <li>
                <Link to='/region'>Region</Link>
              </li>
              <li>
                <Link to='/pest'>PEST</Link>
              </li>
              <li>
                <Link to='/source'>Source</Link>
              </li>
              <li>
                <Link to='/swot'>SWOT</Link>
              </li>
              <li>
                <Link to='/date'>Date</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
