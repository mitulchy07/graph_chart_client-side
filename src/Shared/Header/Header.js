import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <div className='navbar bg-black text-white'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-warning rounded-box w-52'
            >
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </ul>
          </div>

          <Link className='btn btn-ghost normal-case text-xl' to='/dashboard'>
            <img
              src='https://i.ibb.co/M68HY1R/Data-Glossary-Icons-Pie-Chart.jpg'
              width='50'
              height='50'
              className='d-none d-lg-block align-top rounded text-white mx-1'
              alt=''
            />
            <span>
              <span className='text-info'>Graph</span>Chart
            </span>
          </Link>
          <label
            tabIndex={1}
            htmlFor='dashboard-drawer'
            className='ml-9 btn btn-ghost lg:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            {user?.uid ? (
              <li>
                <Link onClick={logout}>Logout</Link>
              </li>
            ) : (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
          </ul>
        </div>
        <div className='navbar-end mx-5 hidden lg:flex'></div>
      </div>
    </div>
  );
};

export default Header;
