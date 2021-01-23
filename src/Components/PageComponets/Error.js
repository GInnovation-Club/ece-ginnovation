import React from 'react';
import { NavLink } from 'react-router-dom';
import ErrorAnimation from '../AnimationComponents/ErrorAnimation';
const Error = () => {
  return (
    <div className='error-page'>
      <header>
        <ErrorAnimation />
        <h1>404 Error!</h1>
        <h2>The page you are looking for does not exist</h2>
        <p>No worries, there's always a way to back home</p>
        <NavLink to='/ece-ginnovation'>
          <button>Back To Home</button>
        </NavLink>
      </header>
    </div>
  );
};
export default Error;
