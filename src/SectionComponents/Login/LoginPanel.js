import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authFunction } from '../../store';

const LoginPanel = (props) => {
  const [authentication, setAuthentication] = useState();
  const auth = useSelector((state) => state.loginReducer.isAuth); //to get data from redux
  let history = useHistory();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log(values);
    axios
      .post(`https://ginnovation-server.herokuapp.com/api/login`, {
        email: values.email,
        password: values.password,
      })
      .then((resp) => {
        console.log(resp);
        if (resp.data.status === 'success') {
          message.success('LogIn Successful');
          alert('LogIn Successful');
          localStorage.setItem('token', resp.data.token);
          dispatch(authFunction(true));
          history.push('/ece-ginnovation/profile');
        } else {
          alert('Oops! There is a error');
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Something went wrong!');
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
  );
};
export default LoginPanel;
