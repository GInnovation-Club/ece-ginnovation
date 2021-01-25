import React from 'react';
//redux
import { useDispatch } from 'react-redux';
import { authFunction } from '../../../store';
//react-router-dom
import { useHistory } from 'react-router-dom';
//assets imports
import ErrorAnimation from '../../AnimationComponents/ErrorAnimation';
const ProfileError = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  return (
    <div className='error-page'>
      <header>
        <ErrorAnimation />
        <h2>It seems like your session has expired!</h2>
        <p>No worries, you can login again</p>

        <button
          onClick={() => {
            dispatch(authFunction(false));
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            history.push('/ece-ginnovation/login');
          }}
        >
          Headback to Login
        </button>
      </header>
    </div>
  );
};
export default ProfileError;
