import React from 'react';
import { Form, Input, Button, Row, Col, Select } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';

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
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className='modal-container'>
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
          >
            <Form.Item name='fullname'>
              <Input
                placeholder='Full Name'
                defaultValue={props.data.fullname}
              />
            </Form.Item>
            <Form.Item>
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item name='designation'>
                    <Input
                      placeholder='Designation'
                      defaultValue={props.data.designation}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name='role'>
                    <Input
                      disabled
                      placeholder='Role'
                      defaultValue={props.data.role}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item name='address'>
              <Input
                placeholder='Address'
                defaultValue={
                  props.data.address[0].district +
                  ', ' +
                  props.data.address[0].state
                }
              />
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
                    <Select placeholder='Select your branch'>
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
                      defaultValue={props.data.address[0].district}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item name='state'>
                    <Input
                      placeholder='State'
                      defaultValue={props.data.address[0].state}
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
