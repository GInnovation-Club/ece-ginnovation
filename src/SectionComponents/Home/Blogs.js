import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ArrowRightOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import studentImg from '../../assets/student1.jpg';
import bulbImg from '../../assets/bulb.png';

const Blogs = () => {
  return (
    <section className='blog'>
      <Row>
        <Col md={{ span: 2, order: 2 }} sm={{ order: 1 }}>
          <div
            data-aos='zoom-in'
            data-aos-duration='600'
            data-aos-delay='100'
            className='title'
          >
            <h2>Blog Point</h2>
            <img src={bulbImg} alt='idea' />
          </div>
        </Col>
        <Col md={{ span: 10, order: 1 }} sm={{ order: 2 }}>
          <Row>
            <Col md={12}>
              <div
                data-aos='slide-right'
                data-aos-duration='600'
                data-aos-delay='200'
                className='cards'
              >
                <div className='cover-img'>
                  <button>
                    <ArrowRightOutlined />
                  </button>
                </div>
                <Avatar alt='Cindy Baker' src={studentImg} />
                <h4>Recent trends in IoT</h4>
                <span>By Anuradha Basu</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div
                data-aos='slide-up'
                data-aos-duration='600'
                data-aos-delay='100'
                className='cards'
              >
                <div className='cover-img'>
                  <button>
                    <ArrowRightOutlined />
                  </button>
                </div>
                <Avatar alt='Cindy Baker' src={studentImg} />
                <h4>Recent trends in IoT</h4>
                <span>By Anuradha Basu</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div
                data-aos='slide-up'
                data-aos-duration='600'
                data-aos-delay='300'
                className='cards'
              >
                <div className='cover-img'>
                  <button>
                    <ArrowRightOutlined />
                  </button>
                </div>
                <Avatar alt='Cindy Baker' src={studentImg} />
                <h4>Recent trends in IoT</h4>
                <span>By Anuradha Basu</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div
                data-aos='slide-up'
                data-aos-duration='600'
                data-aos-delay='500'
                className='cards'
              >
                <div className='cover-img'>
                  <button>
                    <ArrowRightOutlined />
                  </button>
                </div>
                <Avatar alt='Cindy Baker' src={studentImg} />
                <h4>Recent trends in IoT</h4>
                <span>By Anuradha Basu</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};
export default Blogs;
