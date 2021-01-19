import React, { useState } from 'react';
//antd imports
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Space,
  Rate,
  Spin,
  message,
} from 'antd';
import {
  EditOutlined,
  CloseOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
//axios
import axios from 'axios';
//-------------------------------------------------------------------
const SkillEditModal = (props) => {
  const [spin, setSpin] = useState();
  const [data, setData] = useState(props.data.skills);
  const [form] = Form.useForm();
  const token = localStorage.getItem('token');
  const onFinish = (values) => {
    const updatedData = {
      skills: values.skills,
    };

    if (values.skills.length < 2) {
      alert('You have to atleast add 2 of your best skills');
    } else if (values.skills.length == 3) {
      alert('You have to add 4 of your best skills');
    } else if (values.skills.length > 4) {
      alert('More than 4! Please add your top 4 skills');
    } else {
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
    }
    // console.log(values);
    // console.log(token);
    // console.log(updatedData);
  };
  return (
    <div className='modal-container'>
      {spin && (
        <div className='modal-container'>
          <Spin size='large' />
        </div>
      )}
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
              {(fields, { add, remove }, { errors }) => (
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
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Please input the title!',
                                    },
                                  ]}
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
                                rules={[
                                  {
                                    required: true,
                                    message: 'Rate yourself out of 5!',
                                  },
                                ]}
                              >
                                <Rate className='ml-3' />
                              </Form.Item>
                            </Col>
                            <Col span={24}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'description']}
                                fieldKey={[field.fieldKey, 'description']}
                                rules={[
                                  {
                                    required: true,
                                    message:
                                      'Please input description about your skill!',
                                  },
                                ]}
                              >
                                <Input.TextArea
                                  placeholder='Your Bio'
                                  rows={2}
                                  showCount
                                  maxLength={130}
                                />
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
                      Add New Skill
                    </Button>
                  </Form.Item>
                  <Form.ErrorList errors={errors} />
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
