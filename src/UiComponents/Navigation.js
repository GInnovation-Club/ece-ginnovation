import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import HowToRegOutlinedIcon from '@material-ui/icons/HowToRegOutlined';
const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg' sticky='top'>
      <Navbar.Brand href='#home'>Ginnovation</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='#home'>
            <BookOutlinedIcon className='icon' />
            Exams
          </Nav.Link>
          <Nav.Link href='#link'>
            <FilterVintageOutlinedIcon className='icon' />
            Blogs
          </Nav.Link>
          <Nav.Link href='#home'>
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
          </NavDropdown>
          <Nav.Link href='#home'>
            <HowToRegOutlinedIcon className='icon' /> LogIn/SignUp
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
