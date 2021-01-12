import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Form, Input, Button, Checkbox, message, Spin, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
//redux
import { useDispatch } from 'react-redux';
import { authFunction } from '../store';
//
import popAnimation from '../assets/popAnimation.png';
import LoginImg from '../assets/login.svg';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
const Login = (props) => {
  const [spin, setSpin] = useState(false);
  const [popConfirm, setPopConfirm] = useState(false);
  const dispatch = useDispatch(); //redux

  const onFinish = (values) => {
    setSpin(true);
    console.log(values);
    axios
      .post(`https://ginnovation-server.herokuapp.com/api/login`, {
        email: values.email,
        password: values.password,
      })
      .then((resp) => {
        setSpin(false);
        console.log(resp);
        if (resp.data.status === 'success') {
          message.success('LogIn Successful');
          localStorage.setItem('token', resp.data.token);
          dispatch(authFunction(true));
          setPopConfirm(true);
        } else {
          alert('Oops! There is a error');
        }
      })
      .catch((err) => {
        setSpin(false);
        console.log(err);
        alert('Something went wrong!');
      });
  };

  const loginStyle = {
    background: '#8360c3',
    background: '-webkit-linear-gradient(to right, #2ebf91, #8360c3)',
    background: 'linear-gradient(to right, #2ebf91, #8360c3)',
  };

  return (
    <div className='login-page'>
      {spin && (
        <div className='modal-container'>
          <Spin size='large' />
        </div>
      )}
      {popConfirm ? (
        <div className='modal-container'>
          <div className='pop-confirm'>
            <img src={popAnimation} />
            <p>You have Successfully loggedIn</p>
            <h4>Welcome to Ginnovation :)</h4>
            <div className='btn-container'>
              <Link to='/ece-ginnovation/profile'>
                <button>Headback to your Profile</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      <div className='login-container'>
        <Row className='row'>
          <Col md={6} className='col-div'>
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5 }}
              className='image'
              style={loginStyle}
            >
              <img src={LoginImg} alt='login' />
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
                  <h2>Log In</h2>
                  <small>
                    Enter the email and password to login your dashboard
                  </small>
                </header>
                <Form
                  name='normal_login'
                  className='login-form'
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name='email'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Email!',
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className='site-form-item-icon' />}
                      type='email'
                      placeholder='Email'
                    />
                  </Form.Item>
                  <Form.Item
                    name='password'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Password!',
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className='site-form-item-icon' />}
                      type='password'
                      placeholder='Password'
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name='remember' valuePropName='checked' noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className='login-form-forgot' href=''>
                      Forgot password
                    </a>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type='primary'
                      htmlType='submit'
                      className='login-form-button mr-2'
                    >
                      Log in
                    </Button>
                    Or
                    <Link to='/ece-ginnovation/signup'>
                      <button className='trans-btn'>register now!</button>
                    </Link>
                  </Form.Item>
                </Form>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Login;
