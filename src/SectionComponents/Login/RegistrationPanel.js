import React, { useState } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
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

const RegistrationPanel = (props) => {
  const [login, setLogin] = useState(true);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
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
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  return (
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
          prefix={<UserOutlined className='site-form-item-icon' />}
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
          prefix={<MailOutlined className='site-form-item-icon' />}
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
          prefix={<LockOutlined className='site-form-item-icon' />}
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
              if (!value || getFieldValue('password') === value) {
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
          prefix={<LockOutlined className='site-form-item-icon' />}
          placeholder='Confirm Password'
        />
      </Form.Item>

      <div {...tailFormItemLayout} className='form-btn-row'>
        <div className='register-btn-container'>
          <Button type='primary' htmlType='submit'>
            Register
          </Button>
          Or
          <button
            onClick={() => {
              setLogin(true);
              props.sendData(login);
            }}
            className='trans-btn'
          >
            You are already a member!
          </button>
        </div>
      </div>
    </Form>
  );
};
export default RegistrationPanel;
