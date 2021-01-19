import React, { useEffect, useState } from 'react';
//UI imports from antd
import { Col, Row } from 'react-bootstrap';
import { Form, Input, Button, Checkbox, message, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
//redux
import { useDispatch } from 'react-redux';
import { authFunction } from '../../store';
//farmer motion for animation
import { motion } from 'framer-motion';
//asset imports
import popAnimation from '../../assets/Animations/popAnimation.png';
import LoginImg from '../../assets/login.svg';
import logo from '../../assets/logo.png';
//--------------------------------------------------------------------------
const Login = (props) => {
  const [spin, setSpin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [popConfirm, setPopConfirm] = useState(false);
  const dispatch = useDispatch(); //redux

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token == null) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  });

  const onFinish = (values) => {
    setSpin(true);
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
          message.warning('Oops! Something went wrong');
        }
      })
      .catch((err) => {
        setSpin(false);
        message.error(
          err.response.data.status == 'invalid credentials'
            ? 'Invalid Credentials! Check your email and password'
            : 'Something went wrong!'
        );
      });
  };

  return (
    <>
      {showLogin ? (
        <div className='login-page'>
          {spin && (
            <div className='modal-container'>
              <Spin size='large' />
            </div>
          )}
          {popConfirm ? (
            <div className='modal-container'>
              <div className='pop-confirm'>
                <img src={popAnimation} alt='success' />
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
                  className='image login'
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
                          prefix={
                            <UserOutlined className='site-form-item-icon' />
                          }
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
                          prefix={
                            <LockOutlined className='site-form-item-icon' />
                          }
                          type='password'
                          placeholder='Password'
                        />
                      </Form.Item>
                      <Form.Item>
                        <Form.Item
                          name='remember'
                          valuePropName='checked'
                          noStyle
                        >
                          <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a
                          className='login-form-forgot'
                          href='https://www.dictionary.com/e/wp-content/uploads/2020/01/Zip_Zero_Zilch_1000x700_jpg_2ZuoCxRf.jpg'
                        >
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
      ) : (
        <Redirect to='/ece-ginnovation' />
      )}
    </>
  );
};
export default Login;
