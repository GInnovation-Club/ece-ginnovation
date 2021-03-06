import React, { useEffect, useState } from 'react';
//bootstrap imports
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
//antd imports
import { Avatar } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
//router imports
import { Link } from 'react-router-dom';
//redux
import { useSelector } from 'react-redux';
//assets import
import logo from '../../../assets/logo.png';
//-------------------------------------------------------------------------
const Navigation = () => {
  const [userDisplayName, setUserDisplayName] = useState('');
  const [userIcon, setuserIcon] = useState('');
  const userFullNamee = useSelector((state) => state.userNameReducer.userName);

  useEffect(() => {
    const userFullName = userFullNamee;
    if (userFullName !== null) {
      const userName = userFullName.split(' ')[0];
      setUserDisplayName(userName);
      const icon = userName.charAt(0);
      setuserIcon(icon);
    }
  }, [userFullNamee]);
  const auth = useSelector((state) => state.loginReducer.isAuth);
  return (
    <>
      <Navbar bg='light' expand='lg' sticky='top' className='navigation'>
        <Navbar.Brand as={Link} to='/ece-ginnovation'>
          <img src={logo} alt='logo' className='nav-logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <NavDropdown title='About' id='basic-nav-dropdown'>
              <NavDropdown.Item
                as={Link}
                to='/ece-ginnovation/about/developers'
              >
                About Developers
              </NavDropdown.Item>
              {/* <NavDropdown.Item
                as={Link}
                to='/ece-ginnovation/about/developers'
              >
                About Core Team
              </NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/ece-ginnovation/about'>
                About Ginnovation
              </NavDropdown.Item>
            </NavDropdown>
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
                {userDisplayName}
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
    </>
  );
};
export default Navigation;
