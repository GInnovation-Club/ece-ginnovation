import React, { useEffect, useState } from 'react';
//bootstrap imports
import { Col, Row } from 'react-bootstrap';
//antd imports
import { Steps, Popover, Empty, Spin } from 'antd';
//icons import
import {
  PlusOutlined,
  PushpinFilled,
  CrownFilled,
  MessageFilled,
  MailFilled,
  InfoCircleTwoTone,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
//image imports
import dp from '../assets/student2.jpg';
import fb from '../assets/SM-Icons/facebook.png';
import li from '../assets/SM-Icons/linkedin.png';
import gh from '../assets/SM-Icons/github.png';
import yt from '../assets/SM-Icons/youtube.png';
import trophy from '../assets/Icons/trophy.png';
import popAnimation from '../assets/Animations/alertPop.png';
//components import
import ProfileProjectSwiper from '../UiComponents/ProfileProjectSwiper';
import SkillCard from '../UiComponents/ProfilePage/SkillCard';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { authFunction } from '../store';
//others
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import HeaderEditModal from '../UiComponents/ProfilePage/HeaderEditForm';
import BioEditModal from '../UiComponents/ProfilePage/BioEditModal';
import AchievementEditModal from '../UiComponents/ProfilePage/AchievementEditModal';
import SkillEditModal from '../UiComponents/ProfilePage/SkillEditModal';

const { Step } = Steps;
//---------------------------------------------------------------------
const ProfilePage = () => {
  const [spin, setSpin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [userData, setUserData] = useState();
  const [popConfirm, setPopConfirm] = useState(false);
  //edit modals
  const [headerEdit, setHeaderEdit] = useState(false);
  const [bioEdit, setBioEdit] = useState(false);
  const [achievementEdit, setAchievementEdit] = useState(false);
  const [skillEdit, setSkillEdit] = useState(false);
  //
  const dispatch = useDispatch();
  let history = useHistory();
  const userFullName = useSelector((state) => state.userNameReducer.userName);
  const userName = userFullName.split(' ')[0];
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
    setSpin(true);
    const token = localStorage.getItem('token');
    if (token == null) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
    axios
      .get(`https://ginnovation-server.herokuapp.com/api/profile/data`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        setSpin(false);
        // console.log(resp.data);
        setUserData(resp.data);
        localStorage.setItem('username', resp.data.fullname);
        // dispatch(userNameChange(resp.data.fullname));
      })
      .catch((err) => {
        setSpin(false);
        console.log(err);
      });
  }, []);

  return (
    <div>
      {spin && (
        <div className='modal-container'>
          <Spin size='large' />
        </div>
      )}
      {popConfirm ? (
        <div className='modal-container'>
          <div className='pop-confirm logout'>
            <img src={popAnimation} alt='logout' />
            <p>we will miss you :(</p>
            <h4>Are you sure to Logout ?</h4>
            <div className='btn-container'>
              <button
                onClick={() => {
                  dispatch(authFunction(false));
                  localStorage.removeItem('token');
                  localStorage.removeItem('username');
                  history.push('/ece-ginnovation');
                  setPopConfirm(false);
                }}
                className='yes'
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setPopConfirm(false);
                }}
                className='no'
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      {loggedIn ? (
        <div className='profile-page'>
          {userData ? (
            <>
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
                      <h3 className='profile-name'>{userData.fullname}</h3>
                      <h6 className='headline'>{userData.designation}</h6>
                      <div className='role'>
                        <span
                          className={
                            userData.role === 'Student' ? 'active' : ''
                          }
                        >
                          Student
                        </span>
                        <span
                          className={userData.role === 'Mentor' ? 'active' : ''}
                        >
                          Mentor
                        </span>
                        <span
                          className={
                            userData.role === 'Teacher' ? 'active' : ''
                          }
                        >
                          Teacher
                        </span>
                      </div>
                      <div className='bio'>
                        <p>
                          <MailFilled className='icon' />
                          {userData.email}
                        </p>
                        <p className='education'>
                          <CrownFilled className='icon crown' />
                          {userData.education[0].semester +
                            ', ' +
                            userData.education[0].branch}
                        </p>
                        <p>
                          <PushpinFilled className='icon' />
                          {userData.address[0].district +
                            ', ' +
                            userData.address[0].state}
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
                      {userData.socialLinks[0].linkedin && (
                        <a
                          href={userData.socialLinks[0].linkedin}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img src={li} alt='linkedin icon' />
                        </a>
                      )}
                      {userData.socialLinks[0].github && (
                        <a
                          href={userData.socialLinks[0].github}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img src={gh} alt='github icon' />
                        </a>
                      )}
                      {userData.socialLinks[0].youtube && (
                        <a
                          href={userData.socialLinks[0].youtube}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img src={yt} alt='youtube icon' />
                        </a>
                      )}
                      {userData.socialLinks[0].facebook && (
                        <a
                          href={userData.socialLinks[0].facebook}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img src={fb} alt='facebook icon' />
                        </a>
                      )}
                    </div>
                    <a href='mailto:'>
                      <button className='message'>
                        <MessageFilled className='icon' />
                        Send Message
                      </button>
                    </a>

                    <button
                      className='edit-btn'
                      onClick={() => {
                        setHeaderEdit(true);
                      }}
                    >
                      <EditOutlined className='icon' />
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
                        <p>{userData.biodata}</p>
                        <div
                          className='edit-btn'
                          onClick={() => {
                            setBioEdit(true);
                          }}
                        >
                          <EditOutlined />
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className='achievements'>
                        <h4>
                          <img src={trophy} alt='trophy icon' />
                          Top Achievements
                        </h4>
                        <div>
                          {userData.achievements.map((value, index) => {
                            return (
                              <div className='achievement' key={index}>
                                <span>{value.title}</span>
                                <a
                                  href={value.link}
                                  target='_blank'
                                  rel='noreferrer'
                                >
                                  <InfoCircleTwoTone className='icon' />
                                </a>
                              </div>
                            );
                          })}
                        </div>
                        <div
                          className='edit-btn'
                          onClick={() => {
                            setAchievementEdit(true);
                          }}
                        >
                          <EditOutlined />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </section>

              <section className='skills'>
                <div className='container'>
                  <h4>{userName}'s Skills</h4>
                  <Row className='skill-container'>
                    {userData.skills.map((value, index) => {
                      return (
                        <SkillCard
                          skillName={value.title}
                          stars={value.rating}
                          description={value.description}
                          percent={75}
                          key={index}
                        />
                      );
                    })}
                  </Row>
                  <div
                    className='edit-btn'
                    onClick={() => {
                      setSkillEdit(true);
                    }}
                  >
                    <EditOutlined />
                  </div>
                </div>
              </section>
              <section className='projects'>
                <div className='container'>
                  <h4>Projects done by {userName}</h4>
                  <ProfileProjectSwiper />
                  <center>
                    <button>
                      <EditOutlined className='icon' />
                      Edit
                    </button>
                  </center>
                </div>
              </section>
              <section className='performance'>
                <div className='container'>
                  <h4>{userName}'s Performance</h4>
                  <Steps current={1} progressDot={customDot}>
                    <Step
                      title='Beginner'
                      description='Start of a long journey'
                    />
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
                  <h4>Blogs by {userName}</h4>
                  <Empty
                    description={
                      <h5 style={{ color: '#cccccc' }}>No Blogs Found :(</h5>
                    }
                  />
                </div>
              </section>

              {headerEdit && (
                <HeaderEditModal
                  data={userData}
                  handleClose={() => {
                    setHeaderEdit(false);
                  }}
                />
              )}
              {bioEdit && (
                <BioEditModal
                  data={userData}
                  handleClose={() => {
                    setBioEdit(false);
                  }}
                />
              )}
              {achievementEdit && (
                <AchievementEditModal
                  data={userData}
                  handleClose={() => {
                    setAchievementEdit(false);
                  }}
                />
              )}
              {skillEdit && (
                <SkillEditModal
                  data={userData}
                  handleClose={() => {
                    setSkillEdit(false);
                  }}
                />
              )}
            </>
          ) : (
            ''
          )}
          <ul className='more-options'>
            <motion.li
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5 }}
              className='logout'
              onClick={() => {
                setPopConfirm(true);
              }}
            >
              <LogoutOutlined />
            </motion.li>
          </ul>
        </div>
      ) : (
        <Redirect to='/ece-ginnovation' />
      )}
    </div>
  );
};
export default ProfilePage;
