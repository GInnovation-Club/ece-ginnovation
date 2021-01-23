import React from 'react';
//assets imports
import popAnimation from '../../../assets/Animations/alertPop.png';
//redux
import { useDispatch } from 'react-redux';
import { authFunction } from '../../../store';
//react-router-dom
import { useHistory } from 'react-router-dom';
//---------------------------------------------------------
const LogoutConfirmation = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();
  return (
    <div className='modal-container'>
      <div className='pop-confirm logout'>
        <img src={popAnimation} alt='logout' />
        <p>we will miss you :(</p>
        <h4>Are you sure to Logout ?</h4>
        <div className='btn-container'>
          <button
            onClick={() => {
              dispatch(authFunction(false));
              localStorage.removeItem('token');
              localStorage.setItem('username', 'Username');
              history.push('/ece-ginnovation');
              props.openModal(false);
            }}
            className='yes'
          >
            Yes
          </button>
          <button
            onClick={() => {
              props.openModal(false);
            }}
            className='no'
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
export default LogoutConfirmation;
