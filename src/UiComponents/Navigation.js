import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Avatar } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';
import popAnimation from '../assets/Animations/alertPop.png';
import { Link, useHistory } from 'react-router-dom';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { authFunction } from '../store';
const Navigation = () => {
  const [popConfirm, setPopConfirm] = useState(false);
  const auth = useSelector((state) => state.loginReducer.isAuth);
  const userFullName = useSelector((state) => state.userNameReducer.userName);
  const userName = userFullName.split(' ')[0];
  const userIcon = userName.charAt(0);
  const dispatch = useDispatch();
  let history = useHistory();
  return (
    <>
      {popConfirm ? (
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
                  history.push('/ece-ginnovation');
                  setPopConfirm(false);
                }}
                className='yes'
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setPopConfirm(false);
                }}
                className='no'
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      <Navbar bg='light' expand='lg' sticky='top' className='navigation'>
        <Navbar.Brand as={Link} to='/ece-ginnovation'>
          <img src={logo} alt='logo' className='nav-logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {auth && (
              <Nav.Link as={Link} to='/ece-ginnovation/profile'>
                <Avatar
                  className='icon'
                  style={{
                    color: '#fff',
                    background: 'linear-gradient(to right, #373b44, #4286f4)',
                  }}
                >
                  {userIcon}
                </Avatar>
                {userName}
              </Nav.Link>
            )}

            {/* {auth && (
              <Nav.Link
                as={Link}
                onClick={() => {
                  setPopConfirm(true);
                }}
              >
                <LogoutOutlined className='icon' /> LogOut
              </Nav.Link>
            )} */}
            {auth ? (
              ''
            ) : (
              <Nav.Link as={Link} to='/ece-ginnovation/login'>
                <LoginOutlined className='icon' /> LogIn/SignUp
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Navigation;
