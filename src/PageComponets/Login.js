import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import LoginPanel from '../SectionComponents/Login/LoginPanel';
import LoginImg from '../assets/login.svg';
import logo from '../assets/logo.png';
import RegistrationPanel from '../SectionComponents/Login/RegistrationPanel';
import { motion } from 'framer-motion';

const Login = () => {
  const [login, setLogin] = useState(true);

  const fetchData = (loginValue) => {
    setLogin(loginValue);
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <Row className='row'>
          <Col md={6} className='col-div'>
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5 }}
              className='image'
            >
              <img src={LoginImg} alt='login' />
            </motion.div>
          </Col>
          <Col md={6} className='col-div'>
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5 }}
              className='content'
            >
              <img src={logo} alt={logo} />
              <div className='login-board'>
                <header>
                  <h2>{login ? 'Log In' : 'Registration'}</h2>
                  <small>
                    {login
                      ? 'Enter the email and password to login your dashboard'
                      : 'Enter the details to register'}
                  </small>
                </header>
                {login ? (
                  <LoginPanel sendData={fetchData} />
                ) : (
                  <RegistrationPanel sendData={fetchData} />
                )}
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Login;
