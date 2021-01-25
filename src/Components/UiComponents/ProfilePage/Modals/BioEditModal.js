import React, { useState } from 'react';
//antd imports
import { Form, Input, Button, Spin, message } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
//axios
import axios from 'axios';
//
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

//-----------------------------------------------------------------------
const BioEditModal = (props) => {
  const [spin, setSpin] = useState(false);
  const [dataChanged, setDataChanged] = useState(false);
  const [form] = Form.useForm();
  const token = localStorage.getItem('token');
  //
  const onFinish = (values) => {
    setSpin(true);
    setDataChanged(true);
    const updatedData = {
      biodata: values.bio,
    };
    console.log(updatedData);
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
          message.success('Successfully Edited Data');
          props.handleClose(true);
        } else {
          message.warning('Oops! Something went wrong');
        }
      })
      .catch((err) => {
        setSpin(false);
        console.log(err.response);
        message.error('Ouch! An error ocured');
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
          <CloseOutlined
            className='close-btn'
            onClick={() => {
              props.handleClose(dataChanged);
            }}
          />
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
