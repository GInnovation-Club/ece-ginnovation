import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Select, Spin } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import axios from 'axios';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};
const { Option } = Select;
const branches = [
  'Electronics & Communication Engineering',
  'Computer Science & Engineering',
  'Mechanical Engineering',
  'Chemical Engineering',
  'Civil Engineering',
  'Electrical Engineering',
  'Electrical and Electronics Engineering',
];
const HeaderEditModal = (props) => {
  const [spin, setSpin] = useState(false);
  const [form] = Form.useForm();
  const data = props.data;
  const token = localStorage.getItem('token');
  const onFinish = (values) => {
    const updatedData = {
      fullname: values.fullname,
      designation: values.designation,
      role: values.role,
      education: [
        {
          semester: values.semester ? values.semester : '',
          branch: values.branch ? values.branch : '',
        },
      ],
      address: [
        {
          district: values.district ? values.district : '',
          state: values.state ? values.state : '',
        },
      ],
    };
    // console.log(values);
    // console.log(token);
    // console.log(updatedData);
    setSpin(true);
    axios
      .put(
        `https://ginnovation-server.herokuapp.com/api/profile/data`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((resp) => {
        setSpin(false);
        console.log(resp);
        if (resp.data.status === 'success') {
          alert('Successfully Edited Data');
          props.handleClose();
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

  return (
    <div className='modal-container'>
      {spin && (
        <div className='modal-container'>
          <Spin size='large' />
        </div>
      )}
      <div className='edit-modal'>
        <h4>
          Edit Your Details <EditOutlined className='icon' />
          <CloseOutlined className='close-btn' onClick={props.handleClose} />
        </h4>

        <div className='form-container'>
          <Form
            {...layout}
            form={form}
            name='control-hooks'
            onFinish={onFinish}
            initialValues={{
              fullname: data.fullname,
              designation: data.designation,
              role: data.role,
              semester: data.education[0].semester,
              branch: data.education[0].branch,
              district: data.address[0].district,
              state: data.address[0].state,
            }}
          >
            <Form.Item
              name='fullname'
              rules={[
                { required: true, message: 'Please input your fullname!' },
              ]}
            >
              <Input placeholder='Full Name' />
            </Form.Item>
            <Form.Item>
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name='designation'
                    rules={[
                      {
                        required: true,
                        message: 'This field can not be blank!',
                      },
                    ]}
                  >
                    <Input placeholder='Designation' />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name='role'
                    rules={[
                      {
                        required: true,
                        message: 'Please select a role!',
                      },
                    ]}
                  >
                    <Select placeholder='Select your role'>
                      <Option value='Student'>Student</Option>
                      <Option value='Mentor'>Mentor</Option>
                      <Option value='Teacher'>Teacher</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Row gutter={8}>
                <Col span={9}>
                  <Form.Item name='semester'>
                    <Select placeholder='Select your current semester'>
                      <Option value='1st'>1st</Option>
                      <Option value='2nd'>2nd</Option>
                      <Option value='3rd'>3rd</Option>
                      <Option value='4th'>4th</Option>
                      <Option value='5th'>5th</Option>
                      <Option value='6th'>6th</Option>
                      <Option value='7th'>7th</Option>
                      <Option value='8th'>8th</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={15}>
                  <Form.Item name='branch'>
                    <Select
                      placeholder='Select your branch'
                      initialValue={data.education[0].branch}
                    >
                      {branches.map((value, index) => {
                        return (
                          <Option value={value} key={index}>
                            {value}
                          </Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Row gutter={8}>
                <Col span={16}>
                  <Form.Item name='district'>
                    <Input
                      placeholder='Village, District'
                      initialValue={data.address[0].district}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item name='state'>
                    <Input
                      placeholder='State'
                      initialValue={data.address[0].state}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item className='btn-container'>
              <Button
                type='secondary'
                className='mr-2'
                onClick={props.handleClose}
              >
                Cancel
              </Button>
              <Button type='primary' htmlType='submit'>
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default HeaderEditModal;
