import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Avatar } from 'antd';
import projectSvg from '../../assets/project.svg';
import { InfoCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';

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
                    <h6>Team Innovation Geeks</h6>
                  </div>
                  <PlayCircleOutlined className='more' />
                </div>
                <h4 className='title'>Salinedo</h4>
                <p className='subtitle'>Smart saline system</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <button className='btn2'>
                  More Info <InfoCircleOutlined className='icon' />
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
                      U
                    </Avatar>
                    <h6>Team Titans</h6>
                  </div>
                  <PlayCircleOutlined className='more' />
                </div>
                <h4 className='title'>Agro Robot</h4>
                <p className='subtitle'>All purpose agriculture robot</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <button className='btn2'>
                  More Info <InfoCircleOutlined className='icon' />
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
                      className='avatar'
                      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                    >
                      V
                    </Avatar>
                    <h6>Team Vikings</h6>
                  </div>
                  <PlayCircleOutlined className='more' />
                </div>
                <h4 className='title'>Bluetooh Tracker</h4>
                <p className='subtitle'>A advanced contact tracing device</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <button className='btn2'>
                  More Info <InfoCircleOutlined className='icon' />
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
                      className='avatar'
                      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                    >
                      P
                    </Avatar>
                    <h6>Team Pistons</h6>
                  </div>
                  <PlayCircleOutlined className='more' />
                </div>
                <h4 className='title'>Spider Robot</h4>
                <p className='subtitle'>A tiny powerful robo spider</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <button className='btn2'>
                  More Info <InfoCircleOutlined className='icon' />
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
