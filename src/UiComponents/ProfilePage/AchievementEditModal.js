import React, { useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import {
  EditOutlined,
  CloseOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
const AchievementEditModal = (props) => {
  const [data, setData] = useState(props.data.achievements);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values.achievements);
  };
  return (
    <div className='modal-container'>
      <div className='edit-modal'>
        <h4>
          Edit Achievements <EditOutlined className='icon' />
          <CloseOutlined className='close-btn' onClick={props.handleClose} />
        </h4>

        <div className='form-container'>
          <Form
            form={form}
            initialValues={{ achievements: data }}
            name='dynamic_form_nest_item'
            onFinish={onFinish}
            autoComplete='off'
          >
            <Form.List name='achievements'>
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <Space key={field.key} align='baseline'>
                      <Form.Item noStyle>
                        <Form.Item
                          {...field}
                          label='Achievement Title'
                          name={[field.name, 'title']}
                          fieldKey={[field.fieldKey, 'title']}
                          rules={[{ message: 'Missing sight' }]}
                        >
                          <Input />
                        </Form.Item>
                      </Form.Item>
                      <Form.Item
                        {...field}
                        label='Certificate Link'
                        name={[field.name, 'link']}
                        fieldKey={[field.fieldKey, 'link']}
                        rules={[{ message: 'Missing Link' }]}
                      >
                        <Input />
                      </Form.Item>

                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type='dashed'
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add New Achievement
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
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
export default AchievementEditModal;
