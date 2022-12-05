import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../images/login.jpg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
  const { login, loading } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        navigate('/dashboard');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 container items-center'>
      <div className='md:w-96 px-8'>
        {loading ? <Spinner animation='border' /> : <></>}
        <img src={img} alt='' className='rounded-lg' />
      </div>
      <div className=' py-8'>
        <Form onSubmit={handleLogin} className='grid justify-center'>
          <h1 className='text-xl text-center'>Login here:</h1>
          <div className='grid gap-y-3 my-2 p-3 text-black card md:w-96'>
            <input
              type='text'
              name='email'
              placeholder='email'
              defaultValue='admin@gmail.com'
              className='input input-bordered bg-transparent '
            />

            <input
              type='password'
              name='password'
              placeholder='password'
              className='input input-bordered bg-transparent'
              defaultValue='admin123'
            />
            <Link to='/register' className='label-text-alt link link-hover'>
              Need an account?
            </Link>
            <input className='btn btn-primary' type='submit' value='Login' />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
