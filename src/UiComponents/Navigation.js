import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Avatar, Image } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg' sticky='top' className='navigation'>
      <Navbar.Brand as={Link} to='/ece-ginnovation'>
        <img src={logo} alt='logo' className='nav-logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {/* <Nav.Link href='/'>
            <BookOutlinedIcon className='icon' />
            Exams
          </Nav.Link>
          <Nav.Link href='#link'>
            <FilterVintageOutlinedIcon className='icon' />
            Blogs
          </Nav.Link>
          <Nav.Link href='/'>
            <EmojiObjectsOutlinedIcon className='icon' />
            Mentors
          </Nav.Link>
          <Nav.Link href='#link'>
            <QuestionAnswerOutlinedIcon className='icon' />
            Chats
          </Nav.Link>
          <NavDropdown title='Teams' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Team Udaan</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Team Robosocors
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Team Sparx</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='More' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Alumni</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Faculty Advisors
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>
              Team Ginnovation
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.4'>About Us</NavDropdown.Item>
          </NavDropdown> */}

          <Nav.Link as={Link} to='/ece-ginnovation/login'>
            <LoginOutlined className='icon' /> LogIn/SignUp
          </Nav.Link>
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
