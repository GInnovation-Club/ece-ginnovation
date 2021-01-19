import React, { useState } from 'react';
//antd imports
import { Form, Input, Button, Spin } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
//axios
import axios from 'axios';
//
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};
const token = localStorage.getItem('token');
//-----------------------------------------------------------------------
const BioEditModal = (props) => {
  const [spin, setSpin] = useState(false);
  const [form] = Form.useForm();
  //
  const onFinish = (values) => {
    const updatedData = {
      biodata: values.bio,
    };
    console.log(token);
    console.log(updatedData);
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
        console.log(err.response);
        alert('Something went wrong!');
      });
  };
  //
  return (
    <div className='modal-container'>
      {spin && (
        <div className='modal-container'>
          <Spin size='large' />
        </div>
      )}
      <div className='edit-modal'>
        <h4>
          Edit Your Bio <EditOutlined className='icon' />
          <CloseOutlined className='close-btn' onClick={props.handleClose} />
        </h4>

        <div className='form-container'>
          <Form
            {...layout}
            form={form}
            name='control-hooks'
            onFinish={onFinish}
            initialValues={{
              bio: props.data.biodata,
            }}
          >
            <Form.Item
              name='bio'
              rules={[{ required: true, message: 'The bio can not be empty!' }]}
              className='mb-5'
            >
              <Input.TextArea
                placeholder='Your Bio'
                rows={4}
                showCount
                maxLength={250}
              />
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
export default BioEditModal;
