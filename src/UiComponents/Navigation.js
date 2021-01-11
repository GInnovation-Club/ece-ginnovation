import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Avatar, Image } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { authFunction } from '../store';
const Navigation = () => {
  const auth = useSelector((state) => state.loginReducer.isAuth);
  const dispatch = useDispatch();
  return (
    <Navbar bg='light' expand='lg' sticky='top' className='navigation'>
      <Navbar.Brand as={Link} to='/ece-ginnovation'>
        <img src={logo} alt='logo' className='nav-logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {auth && (
            <Nav.Link as={Link} to='/ece-ginnovation/profile'>
              Ashutosh
              <Avatar
                className='icon'
                style={{
                  color: '#fff',
                  background: 'linear-gradient(to right, #373b44, #4286f4)',
                }}
              >
                A
              </Avatar>
            </Nav.Link>
          )}

          {auth && (
            <Nav.Link
              as={Link}
              onClick={() => {
                dispatch(authFunction(false));
                localStorage.removeItem('token');
              }}
              to='/ece-ginnovation/'
            >
              <LogoutOutlined className='icon' /> LogOut
            </Nav.Link>
          )}
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
  );
};
export default Navigation;
