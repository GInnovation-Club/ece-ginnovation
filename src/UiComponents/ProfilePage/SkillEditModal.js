import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Space, Rate } from 'antd';
import {
  EditOutlined,
  CloseOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
const SkillEditModal = (props) => {
  const [data, setData] = useState(props.data.skills);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className='modal-container'>
      <div className='edit-modal skill-edit-modal'>
        <h4>
          Edit Skills <EditOutlined className='icon' />
          <CloseOutlined className='close-btn' onClick={props.handleClose} />
        </h4>

        <div className='form-container'>
          <Form
            form={form}
            initialValues={{ skills: data }}
            name='dynamic_form_nest_item'
            onFinish={onFinish}
            autoComplete='off'
          >
            <Form.List name='skills'>
              {(fields, { add, remove }) => (
                <>
                  <Row gutter={8}>
                    {fields.map((field) => (
                      <Col md={{ span: 12 }}>
                        <Space key={field.key} align='baseline'>
                          <Row>
                            <Col md={{ span: 12 }}>
                              <Form.Item noStyle>
                                <Form.Item
                                  {...field}
                                  name={[field.name, 'title']}
                                  fieldKey={[field.fieldKey, 'title']}
                                >
                                  <Input />
                                </Form.Item>
                              </Form.Item>
                            </Col>
                            <Col md={{ span: 12 }}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'rating']}
                                fieldKey={[field.fieldKey, 'rating']}
                              >
                                <Rate className='ml-3' />
                              </Form.Item>
                            </Col>
                            <Col span={24}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'description']}
                                fieldKey={[field.fieldKey, 'description']}
                              >
                                <Input.TextArea />
                              </Form.Item>
                            </Col>
                          </Row>
                          <MinusCircleOutlined
                            onClick={() => remove(field.name)}
                          />
                        </Space>
                      </Col>
                    ))}
                  </Row>

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
export default SkillEditModal;
