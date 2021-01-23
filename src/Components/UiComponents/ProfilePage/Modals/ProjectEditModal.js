import React, { useState } from 'react';
//antd imports
import { Form, Input, Button, Space, Spin, message, Row, Col } from 'antd';
import {
  EditOutlined,
  CloseOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
//axios
import axios from 'axios';
//-----------------------------------------------------------------------------
const ProjectEditModal = (props) => {
  // const [data, setData] = useState(props.data.projects);
  const [spin, setSpin] = useState();
  const [dataChanged, setDataChanged] = useState(false);
  const [form] = Form.useForm();
  const token = localStorage.getItem('token');
  const data = props.data;

  const onFinish = (values) => {
    const updatedData = {
      projects: values.projects,
    };
    setDataChanged(true);
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
          message.success('Successfully Edited Data');
          props.handleClose(true);
        } else {
          message.error('Oops! Something went wrong');
        }
      })
      .catch((err) => {
        setSpin(false);
        console.log(err);
        message.error('An error occured!');
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
          Edit Projects <EditOutlined className='icon' />
          <CloseOutlined
            className='close-btn'
            onClick={() => {
              props.handleClose(dataChanged);
            }}
          />
        </h4>

        <div className='form-container'>
          <Form
            form={form}
            initialValues={{ projects: data }}
            name='dynamic_form_nest_item'
            onFinish={onFinish}
            autoComplete='off'
          >
            <Form.List name='projects'>
              {(fields, { add, remove }) => (
                <>
                  <Row>
                    {fields.map((field) => (
                      <Col md={12}>
                        <Space key={field.key} align='baseline'>
                          <Form.Item noStyle>
                            <Form.Item
                              {...field}
                              label='Video Link'
                              name={[field.name, 'link']}
                              fieldKey={[field.fieldKey, 'link']}
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input the link!',
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                          </Form.Item>
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
                      Add New Project
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
export default ProjectEditModal;
