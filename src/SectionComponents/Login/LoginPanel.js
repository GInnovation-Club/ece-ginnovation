import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const LoginPanel = (props) => {
  const [login, setLogin] = useState();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    message.success('Done');
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
        <button
          onClick={() => {
            setLogin(false);
            props.sendData(login);
          }}
          className='trans-btn'
        >
          register now!
        </button>
      </Form.Item>
    </Form>
  );
};
export default LoginPanel;
