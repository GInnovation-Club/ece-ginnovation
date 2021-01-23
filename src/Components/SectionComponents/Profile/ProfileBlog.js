import { Col, Row } from 'antd';
import React, { useState } from 'react';
//icons import
import {
  FieldTimeOutlined,
  EditOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import FullAricle from '../../UiComponents/ProfilePage/Modals/FullAricle';
import AddBlog from '../../UiComponents/ProfilePage/Modals/AddBlog';
const ProfileBlog = (props) => {
  const [fullArticle, setfullArticle] = useState(false);
  // const [editBlog, setEditBlog] = useState(false);
  const [addBlog, setAddBlog] = useState(false);
  // const data = props.userdata;
  return (
    <section className='blogs'>
      <div className='container'>
        <h4 className='section-head'>Blogs by {props.username}</h4>
        <Row gutter={12} className='blog-container'>
          <Col md={8}>
            <div className='blog-card'>
              <div className='card-top'>
                <span className='about'>About</span>
                <span className='date'>27th MAR</span>
              </div>
              <div className='card-content'>
                <h5>City Lights in New York</h5>
                <p className='sub-heading'>The city that never sleeps</p>
                <p className='content'>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </p>
                <div className='card-bottom'>
                  <span>
                    <FieldTimeOutlined className='icon' />6 mins ago
                  </span>
                  <button
                    onClick={() => {
                      setfullArticle(true);
                    }}
                  >
                    Full Article
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className='blog-card'>
              <div className='card-top'>
                <span className='about'>About</span>
                <span className='date'>27th MAR</span>
              </div>
              <div className='card-content'>
                <h5>City Lights in New York</h5>
                <p className='sub-heading'>The city that never sleeps</p>
                <p className='content'>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </p>
                <div className='card-bottom'>
                  <span>
                    <FieldTimeOutlined className='icon' />6 mins ago
                  </span>
                  <button
                    onClick={() => {
                      setfullArticle(true);
                    }}
                  >
                    Full Article
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className='blog-card'>
              <div className='card-top'>
                <span className='about'>About</span>
                <span className='date'>27th MAR</span>
              </div>
              <div className='card-content'>
                <h5>City Lights in New York</h5>
                <p className='sub-heading'>The city that never sleeps</p>
                <p className='content'>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </p>
                <div className='card-bottom'>
                  <span>
                    <FieldTimeOutlined className='icon' />6 mins ago
                  </span>
                  <button
                    onClick={() => {
                      setfullArticle(true);
                    }}
                  >
                    Full Article
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className='edit-btn type2 add'>
          <PlusOutlined onClick={() => setAddBlog(true)} />
        </div>
        <div className='edit-btn type2'>
          <EditOutlined />
        </div>
      </div>
      {fullArticle && <FullAricle close={() => setfullArticle(false)} />}
      {addBlog && (
        <AddBlog
          handleClose={() => {
            setAddBlog(false);
          }}
        />
      )}
    </section>
  );
};

export default ProfileBlog;
