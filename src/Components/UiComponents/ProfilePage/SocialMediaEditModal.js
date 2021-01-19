import React, { useState } from 'react';
//antd imports
import { Form, Input, Button, Spin } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
//axios
import axios from 'axios';
//--------------------------------------------------------------
const SocialMediaEditModal = (props) => {
  const [spin, setSpin] = useState();
  const [form] = Form.useForm();
  const token = localStorage.getItem('token');

  const onFinish = (values) => {
    const updatedData = {
      socialLinks: [
        {
          linkedin: values.linkedin,
          github: values.github,
          youtube: values.youtube,
          facebook: values.facebook,
        },
      ],
    };
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
          Social Media <EditOutlined className='icon' />
          <CloseOutlined className='close-btn' onClick={props.handleClose} />
        </h4>

        <div className='form-container'>
          <Form form={form} name='social-media' onFinish={onFinish}>
            <Form.Item name='linkedin'>
              <Input placeholder='LinkedIn' />
            </Form.Item>
            <Form.Item name='github'>
              <Input placeholder='Github' />
            </Form.Item>
            <Form.Item name='youtube'>
              <Input placeholder='Youtube' />
            </Form.Item>
            <Form.Item name='facebook'>
              <Input placeholder='Facebook' />
            </Form.Item>

            <div className='form-btn-row btn-container'>
              <Button type='primary' htmlType='submit'>
                Save Changes
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default SocialMediaEditModal;
