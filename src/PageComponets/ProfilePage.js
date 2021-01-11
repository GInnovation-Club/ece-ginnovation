import React, { useEffect, useState } from 'react';
//bootstrap imports
import { Col, Row } from 'react-bootstrap';
//antd imports
import { Steps, Popover, Divider, Empty } from 'antd';
//icons import
import {
  PlusOutlined,
  PushpinFilled,
  CrownFilled,
  MessageFilled,
  MailFilled,
  InfoCircleTwoTone,
} from '@ant-design/icons';
//image imports
import dp from '../assets/student2.jpg';
import fb from '../assets/SM-Icons/facebook.png';
import li from '../assets/SM-Icons/linkedin.png';
import gh from '../assets/SM-Icons/github.png';
import yt from '../assets/SM-Icons/youtube.png';
import trophy from '../assets/Icons/trophy.png';
//components import
import ProfileProjectSwiper from '../UiComponents/ProfileProjectSwiper';
import SkillCard from '../UiComponents/ProfilePage/SkillCard';
import { Redirect } from 'react-router-dom';
const { Step } = Steps;
//---------------------------------------------------------------------
const ProfilePage = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );

  //login logic
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token == null) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  });

  return (
    <div>
      {loggedIn ? (
        <div className='profile-page'>
          <section className='top'>
            <div className='container'>
              {
                <div className='profile-picture'>
                  <div
                    style={{ backgroundImage: `url(${dp})` }}
                    className='dp'
                  ></div>
                </div>
              }
              <div className='profile-details'>
                <header>
                  <h3 className='profile-name'>Amarjit Sahu</h3>
                  <h6 className='headline'>Graphic Designer at Teckat</h6>
                  <div className='role'>
                    <span className='active'>Student</span>
                    <span>Mentor</span>
                    <span>Teacher</span>
                  </div>
                  <div className='bio'>
                    <p>
                      <MailFilled className='icon' />
                      amarjit158@gmail.com
                    </p>
                    <p>
                      <CrownFilled className='icon crown' />
                      5th sem, Electronics and Communication Engineering
                    </p>
                    <p>
                      <PushpinFilled className='icon' />
                      From Cuttack, Odisha
                    </p>
                  </div>
                </header>
                <Row className='action-bar'>
                  <Col md={3} className='bar'>
                    <h4>22+</h4>Projects
                  </Col>
                  <Col md={3} className='bar'>
                    <h4>10</h4>Achievements
                  </Col>
                  <Col md={6} className='bar btn-bar'>
                    <button>
                      <PlusOutlined className='icon' />
                      Follow
                    </button>
                  </Col>
                </Row>
                <div className='social-media'>
                  <img src={li} alt='linkedin icon' />
                  <img src={gh} alt='github icon' />
                  <img src={yt} alt='youtube icon' />
                  <img src={fb} alt='facebook icon' />
                </div>
                <button className='message'>
                  <MessageFilled className='icon' />
                  Send Message
                </button>
              </div>
            </div>
          </section>
          <section className='about-section'>
            <div className='container'>
              <Row>
                <Col md={8}>
                  <div className='bio'>
                    <h4>Professional Bio</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries,
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className='achievements'>
                    <h4>
                      <img src={trophy} alt='trophy icon' />
                      Top Achievements
                    </h4>
                    <div>
                      <div className='achievement'>
                        <span>Top 10 Python Coder</span>
                        <InfoCircleTwoTone className='icon' />
                      </div>
                      <div className='achievement'>
                        <span>Top 10 Python Coder</span>
                        <InfoCircleTwoTone className='icon' />
                      </div>
                      <div className='achievement'>
                        <span>Top 10 Python Coder</span>
                        <InfoCircleTwoTone className='icon' />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
          <section className='skills'>
            <div className='container'>
              <h4>Amarjit's Skills</h4>
              <Row className='skill-container'>
                <SkillCard skillName='Photoshop' stars={5} percent={80} />
                <SkillCard skillName='Illustrator' stars={4} percent={75} />
                <SkillCard skillName='Node JS' stars={2} percent={57} />
                <SkillCard skillName='Video Editing' stars={1} percent={30} />
              </Row>
            </div>
          </section>

          <section className='projects'>
            <div className='container'>
              <h4>Projects done by Amarjit</h4>
              <ProfileProjectSwiper />
            </div>
          </section>
          <section className='performance'>
            <div className='container'>
              <h4>Amarjit's Performance</h4>
              <Steps current={1} progressDot={customDot}>
                <Step title='Beginner' description='Start of a long journey' />
                <Step
                  title='Intermediate'
                  description='5+ Projects and 2+ Blogs'
                />
                <Step
                  title='Enthusiastic'
                  description='10+ Projects and 5+ Blogs'
                />
                <Step
                  title='Expert'
                  description='20+ Projects and 10+ Blogs.'
                />
              </Steps>
            </div>
          </section>
          <section className='blogs'>
            <div className='container'>
              <h4>Blogs by Amarjit</h4>
              <Empty
                description={
                  <h5 style={{ color: '#cccccc' }}>No Blogs Found :(</h5>
                }
              />
            </div>
          </section>
        </div>
      ) : (
        <Redirect to='/ece-ginnovation' />
      )}
    </div>
  );
};
export default ProfilePage;

{
  /* <section className='skills'>
        <div className='container'>
          <h5>My Core Skills:</h5>
          <div className='skill-container'>
            <div className='skill-tab'>
              Adobe Photoshop <StarFilled className='icon' />
              <StarFilled className='icon' />
              <StarFilled className='icon' />
              <StarFilled className='icon' />
            </div>
            <div className='skill-tab'>
              Adobe Illustrator <StarFilled className='icon' />
              <StarFilled className='icon' />
              <StarFilled className='icon' />
            </div>
            <div className='skill-tab'>
              Android Studio <StarFilled className='icon' />
              <StarFilled className='icon' />
            </div>
            <div className='skill-tab'>
              Graphic Designing <StarFilled className='icon' />
            </div>
          </div>
        </div>
      </section> */
}
{
  /* <section className='experience'>
        <div className='container'>
          <h4>Experience</h4>
          <Steps progressDot current={10} direction='vertical'>
            <Step
              title='App developer and motion graphic designer'
              description='Teckat Service Pvt. Ltd.'
            />
            <Step title='Campus Ambassador' description='Campus Ninja' />
            <Step title='Campus Ambassador' description='What after college' />
          </Steps>
        </div>
      </section> */
}
