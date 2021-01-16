import React from 'react';
import { Form, Input, Button } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};
const BioEditModal = (props) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className='modal-container'>
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
          >
            <Form.Item name='bio' className='mb-5'>
              <Input.TextArea
                placeholder='Your Bio'
                defaultValue={props.data.biodata}
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
