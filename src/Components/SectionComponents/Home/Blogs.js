import React from 'react';
//bootstrap imports
import { Col, Row } from 'react-bootstrap';
//antd imports
import { Badge } from 'antd';
//componetns import
import BlogCard from '../../UiComponents/HomePage/BlogCard';
//---------------------------------------------------------------
const Blogs = () => {
  return (
    <section className='blog'>
      <header>
        <h4>Latest from Our Blogs</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
      </header>
      <Row>
        <Col md={4}>
          <div data-aos='zoom-in' data-aos-duration='600' data-aos-delay='100'>
            <Badge.Ribbon text='Ginnovation Top #1 Blog' color='#ec615b'>
              <BlogCard />
            </Badge.Ribbon>
          </div>
        </Col>
        <Col md={4}>
          <div data-aos='zoom-in' data-aos-duration='600' data-aos-delay='200'>
            <Badge.Ribbon text='Ginnovation Top #2 Blog' color='#ec615b'>
              <BlogCard />
            </Badge.Ribbon>
          </div>
        </Col>
        <Col md={4}>
          <div data-aos='zoom-in' data-aos-duration='600' data-aos-delay='300'>
            <Badge.Ribbon text='Ginnovation Top #3 Blog' color='#ec615b'>
              <BlogCard />
            </Badge.Ribbon>
          </div>
        </Col>
      </Row>
      {/* <Row>
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
                <Avatar size={60} alt='Cindy Baker' src={studentImg} />
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
                <Avatar size={60} alt='Cindy Baker' src={studentImg} />
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
                <Avatar size={60} alt='Cindy Baker' src={studentImg} />
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
                <Avatar size={60} alt='Cindy Baker' src={studentImg} />
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
      </Row> */}
    </section>
  );
};
export default Blogs;
