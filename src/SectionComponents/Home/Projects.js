import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Avatar } from 'antd';
import projectSvg from '../../assets/project.svg';
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons';

const Projects = () => {
  return (
    <section className='projects'>
      <Row>
        <Col md={4} className='title-container'>
          <div className='title'>
            <h2>Student Projects</h2>
            <img src={projectSvg} alt='project' />
          </div>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <div
                data-aos='zoom-in'
                data-aos-duration='600'
                className='project-card pc1'
              >
                <div className='top'>
                  <div className='name'>
                    <Avatar
                      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                    >
                      U
                    </Avatar>
                    <span>Team Innovation Geeks</span>
                  </div>
                  <div className='more'>
                    <ArrowRightOutlined />
                  </div>
                </div>
                <h4 className='title'>Salinedo</h4>
                <p className='subtitle'>Smart saline system</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <button className='btn2'>
                  More Info <PlayCircleOutlined />
                </button>
              </div>
            </Col>
            <Col md={6}>
              <div
                data-aos='zoom-in'
                data-aos-duration='600'
                data-aos-delay='200'
                className='project-card pc2'
              >
                <div className='top'>
                  <div className='name'>
                    <Avatar
                      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                    >
                      T
                    </Avatar>
                    <span>Team Titans</span>
                  </div>
                  <div className='more'>
                    <ArrowRightOutlined />
                  </div>
                </div>
                <h4 className='title'>Agro Robot</h4>
                <p className='subtitle'>All purpose agriculture robot</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <button className='btn2'>
                  More Info <PlayCircleOutlined />
                </button>
              </div>
            </Col>
            <Col md={6}>
              <div
                data-aos='zoom-in'
                data-aos-duration='600'
                data-aos-delay='400'
                className='project-card pc3'
              >
                <div className='top'>
                  <div className='name'>
                    <Avatar
                      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                    >
                      V
                    </Avatar>
                    <span>Team Vikings</span>
                  </div>
                  <div className='more'>
                    <ArrowRightOutlined />
                  </div>
                </div>
                <h4 className='title'>Bluetooh Tracker</h4>
                <p className='subtitle'>A advanced contact tracing device</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <button className='btn2'>
                  More Info <PlayCircleOutlined />
                </button>
              </div>
            </Col>
            <Col md={6}>
              <div
                data-aos='zoom-in'
                data-aos-duration='600'
                data-aos-delay='600'
                className='project-card pc4'
              >
                <div className='top'>
                  <div className='name'>
                    <Avatar
                      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                    >
                      P
                    </Avatar>
                    <span>Team Pistons</span>
                  </div>
                  <div className='more'>
                    <ArrowRightOutlined />
                  </div>
                </div>
                <h4 className='title'>Spider Robot</h4>
                <p className='subtitle'>A tiny powerful robo spider</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <button className='btn2'>
                  More Info <PlayCircleOutlined />
                </button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className='left-circle-border'></div>
      <div className='circle-design'></div>
    </section>
  );
};
export default Projects;
