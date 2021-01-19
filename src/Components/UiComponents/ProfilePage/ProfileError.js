import React from 'react';
import { NavLink } from 'react-router-dom';
//assets imports
import ErrorAnimation from '../../AnimationComponents/ErrorAnimation';
const ProfileError = () => {
  return (
    <div className='error-page'>
      <header>
        <ErrorAnimation />
        <h2>It seems like your session has expired!</h2>
        <p>No worries, you can logout and login again</p>
        <NavLink to='/ece-ginnovation'>
          <button>Back To Home</button>
        </NavLink>
      </header>
    </div>
  );
};
export default ProfileError;
