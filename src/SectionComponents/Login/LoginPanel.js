import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { authFunction } from '../../store';

const LoginPanel = (props) => {
  const [authentication, setAuthentication] = useState();
  const auth = useSelector((state) => state.loginReducer.isAuth); //to get data from redux
  console.log(auth);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    props.sendData(values);
    message.success('Done');
    axios
      .post('https://reqres.in/api/login', {
        email: values.username,
        password: values.password,
      })
      .then((res) => {
        console.log('success', res.data);
        message.success('Login Successful');
        setAuthentication(true);
        dispatch(authFunction(true)); //setting data in redux
      })
      .catch((err) => {
        console.log(err);
        message.error('Oops! something went wrong');
      });
  };

  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name='username'
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Username'
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
          // cityslicka
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
  );
};
export default LoginPanel;
