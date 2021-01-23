import React, { useState } from 'react';
//antd imports
import { Form, Input, Upload, Button, Row, Col } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { PlusOutlined, CloseOutlined, UploadOutlined } from '@ant-design/icons';
//
const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};
const AddBlog = (props) => {
  const [dataChanged, setDataChanged] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    // setSpin(true);
    console.log('Received values of form: ', values);
    // axios
    //   .post(`https://ginnovation-server.herokuapp.com/api/register`, {
    //     fullname: values.Name,
    //     email: values.email,
    //     mobile: values.phone,
    //     password: values.password,
    //   })
    //   .then((resp) => {
    //     setSpin(false);
    //     console.log(resp);
    //     if (resp.data.status === 'success') {
    //       message.success('Registration Complete');
    //       setPopConfirm(true);
    //     } else {
    //       message.warning('Oops! Something went wrong');
    //     }
    //   })
    //   .catch((err) => {
    //     setSpin(false);
    //     console.log(err.response);
    //     message.error(err.response.data.message);
    //   });
  };
  return (
    <div className='modal-container'>
      <div className='edit-modal'>
        <h4>
          Add a New Blog <PlusOutlined className='icon' />
          <CloseOutlined
            className='close-btn'
            onClick={() => {
              props.handleClose(dataChanged);
            }}
          />
        </h4>
        <Form form={form} name='addBlog' onFinish={onFinish}>
          <Form.Item
            name='BlogTitle'
            rules={[
              {
                required: true,
                message: 'Please input the title!',
              },
            ]}
          >
            <Input
              prefix={<FormOutlined className='site-form-item-icon' />}
              placeholder='Blog Title'
            />
          </Form.Item>
          <Row gutter={5}>
            <Col md={18}>
              <Form.Item name='BlogSubTitle'>
                <Input
                  prefix={<FormOutlined className='site-form-item-icon' />}
                  placeholder='Blog Sub-Title'
                />
              </Form.Item>
            </Col>
            <Col md={6}>
              <Form.Item
                name='Cover Image'
                valuePropName='fileList'
                getValueFromEvent={normFile}
                // extra='Upload Cover Image'
              >
                <Upload name='logo' action='/upload.do' listType='picture'>
                  <Button icon={<UploadOutlined />}>Upload Cover Image</Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name='content'
            rules={[
              { required: true, message: 'Please input the blog content!' },
            ]}
          >
            <Input.TextArea
              placeholder='Blog Content'
              rows={4}
              showCount
              maxLength={250}
            />
          </Form.Item>
          <div className='form-btn-row'>
            <div className='register-btn-container btn-container mt-5'>
              <Button
                type='secondary'
                className='mr-2'
                onClick={props.handleClose}
              >
                Cancel
              </Button>
              <Button type='primary' htmlType='submit'>
                Upload
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddBlog;
