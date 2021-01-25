import React, { useEffect, useState } from 'react';
//bootstrap imports
import { Col, Row } from 'react-bootstrap';
//antd imports
import { Form, Input, Select, Button, message, Spin } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
//router
import { Link, Redirect } from 'react-router-dom';
//axios
import axios from 'axios';
//animation
import { motion } from 'framer-motion';
//assets
import RegistrationImg from '../../assets/registration.svg';
import logo from '../../assets/logo.png';
import popAnimation from '../../assets/Animations/signupSuccess.png';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

// import { useHistory } from 'react-router-dom';
// let history = useHistory();
// history.push('/ece-ginnovation/login');

const Signup = () => {
  const [spin, setSpin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [popConfirm, setPopConfirm] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token == null) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  }, []);

  const onFinish = (values) => {
    setSpin(true);
    console.log('Received values of form: ', values);
    axios
      .post(`https://ginnovation-server.herokuapp.com/api/register`, {
        fullname: values.Name,
        email: values.email,
        mobile: values.phone,
        password: values.password,
      })
      .then((resp) => {
        setSpin(false);
        console.log(resp);
        if (resp.data.status === 'success') {
          message.success('Registration Complete');
          setPopConfirm(true);
        } else {
          message.warning('Oops! Something went wrong');
        }
      })
      .catch((err) => {
        setSpin(false);
        console.log(err.response);
        message.error(err.response.data.message);
      });
  };

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value='91'>+91</Option>
        <Option value='977'>+977</Option>
      </Select>
    </Form.Item>
  );
  //
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
              <div className='pop-confirm registration'>
                <img src={popAnimation} alt='success' />
                <p>You have Registered Successfully</p>
                <h4>Just a step remain ;)</h4>
                <div className='btn-container'>
                  <Link to='/ece-ginnovation/login'>
                    <button>Headback to LogIn</button>
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
                  className='image signup'
                >
                  <img src={RegistrationImg} alt='login' />
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
                    <Form
                      {...formItemLayout}
                      form={form}
                      name='register'
                      onFinish={onFinish}
                      initialValues={{
                        prefix: '91',
                      }}
                      scrollToFirstError
                    >
                      <Form.Item
                        name='Name'
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Name!',
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <UserOutlined className='site-form-item-icon' />
                          }
                          placeholder='Full Name'
                        />
                      </Form.Item>
                      <Form.Item
                        name='email'
                        rules={[
                          {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                          },
                          {
                            required: true,
                            message: 'Please input your E-mail!',
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <MailOutlined className='site-form-item-icon' />
                          }
                          placeholder='Email'
                        />
                      </Form.Item>
                      <Form.Item
                        name='phone'
                        rules={[
                          {
                            required: true,
                            message: 'Please input your phone number!',
                          },
                        ]}
                      >
                        <Input
                          addonBefore={prefixSelector}
                          style={{
                            width: '100%',
                          }}
                          placeholder='Mobile Number'
                        />
                      </Form.Item>

                      <Form.Item
                        name='password'
                        rules={[
                          {
                            required: true,
                            message: 'Please input your password!',
                          },
                        ]}
                        hasFeedback
                      >
                        <Input.Password
                          prefix={
                            <LockOutlined className='site-form-item-icon' />
                          }
                          placeholder='Password'
                        />
                      </Form.Item>

                      <Form.Item
                        name='confirm'
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please confirm your password!',
                          },
                          ({ getFieldValue }) => ({
                            validator(rule, value) {
                              if (
                                !value ||
                                getFieldValue('password') === value
                              ) {
                                return Promise.resolve();
                              }

                              return Promise.reject(
                                'The two passwords that you entered do not match!'
                              );
                            },
                          }),
                        ]}
                      >
                        <Input.Password
                          prefix={
                            <LockOutlined className='site-form-item-icon' />
                          }
                          placeholder='Confirm Password'
                        />
                      </Form.Item>

                      <div {...tailFormItemLayout} className='form-btn-row'>
                        <div className='register-btn-container'>
                          <Button type='primary' htmlType='submit'>
                            Register
                          </Button>
                          Or
                          <Link to='/ece-ginnovation/login'>
                            <button className='trans-btn'>
                              You are already a member!
                            </button>
                          </Link>
                        </div>
                      </div>
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
export default Signup;
