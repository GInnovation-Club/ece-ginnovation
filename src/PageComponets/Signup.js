import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import LoginPanel from '../SectionComponents/Login/LoginPanel';
import LoginImg from '../assets/login.svg';
import RegistrationImg from '../assets/registration.svg';
import logo from '../assets/logo.png';
import RegistrationPanel from '../SectionComponents/Login/RegistrationPanel';
import { motion } from 'framer-motion';

const Signup = () => {
  const [login, setLogin] = useState(true);

  const fetchData = (loginValue) => {
    setLogin(loginValue);
  };

  const registrationStyle = {
    background: '#00f260',
    background: '-webkit-linear-gradient(to right, #00f260, #0575e6)',
    background: 'linear-gradient(to right, #00f260, #0575e6)',
  };
  const loginStyle = {
    background: '#8360c3',
    background: '-webkit-linear-gradient(to right, #2ebf91, #8360c3)',
    background: 'linear-gradient(to right, #2ebf91, #8360c3)',
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <Row className='row'>
          <Col md={6} className='col-div'>
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5 }}
              className='image'
              style={login ? loginStyle : registrationStyle}
            >
              <img src={login ? LoginImg : RegistrationImg} alt='login' />
            </motion.div>
          </Col>
          <Col md={6} className='col-div'>
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5 }}
              className='content'
            >
              <img src={logo} alt={logo} />
              <div className='login-board'>
                <header>
                  <h2>Sign Up</h2>
                  <small>Enter the details to register</small>
                </header>
                <RegistrationPanel sendData={fetchData} />
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Signup;
