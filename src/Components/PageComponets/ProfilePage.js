import React, { useEffect, useState } from 'react';
//antd imports
import { Steps, Popover, Spin, message } from 'antd';
//icons import
import { LogoutOutlined } from '@ant-design/icons';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { authFunction, userNameChange } from '../../store';
//components import
import ProfileProjectSwiper from '../UiComponents/CommonUiComponents/VideoSwiper';
import HeaderEditModal from '../UiComponents/ProfilePage/Modals/HeaderEditForm';
import BioEditModal from '../UiComponents/ProfilePage/Modals/BioEditModal';
import AchievementEditModal from '../UiComponents/ProfilePage/Modals/AchievementEditModal';
import SkillEditModal from '../UiComponents/ProfilePage/Modals/SkillEditModal';
import MoreAchievementModal from '../UiComponents/ProfilePage/Modals/MoreAchievementModal';
//react-router-dom
import { Redirect } from 'react-router-dom';
//axios
import axios from 'axios';
//animation
import { motion } from 'framer-motion';
import ProfileTop from '../SectionComponents/Profile/ProfileTop';
import BioAchievement from '../SectionComponents/Profile/BioAchievement';
import Skills from '../SectionComponents/Profile/Skills';
import ProfileError from '../UiComponents/ProfilePage/ProfileError';
import LogoutConfirmation from '../UiComponents/ProfilePage/LogoutConfirmation';
//
const { Step } = Steps;
//---------------------------------------------------------------------
const ProfilePage = () => {
  const [spin, setSpin] = useState(false);
  const [refreshKey, setRefreshKey] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [userData, setUserData] = useState();
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [moreAchievements, setMoreAchievements] = useState(false);
  //edit modals
  const [headerEdit, setHeaderEdit] = useState(false);
  const [bioEdit, setBioEdit] = useState(false);
  const [achievementEdit, setAchievementEdit] = useState(false);
  const [skillEdit, setSkillEdit] = useState(false);
  //
  const dispatch = useDispatch();
  //
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
        setUserData(resp.data);
        console.log(resp.data);
        localStorage.setItem('username', resp.data.fullname);
        dispatch(userNameChange(localStorage.getItem('username')));
      })
      .catch((err) => {
        setSpin(false);
        console.log(err);
      });
  }, [refreshKey]);

  const userMailAddress = userData ? `mailto:${userData.email}` : '';

  return (
    <div>
      {spin && (
        <div className='modal-container'>
          <Spin size='large' />
        </div>
      )}
      {loggedIn ? (
        <div className='profile-page'>
          {userData ? (
            <>
              <ProfileTop
                data={userData}
                mail={userMailAddress}
                openModal={() => {
                  setHeaderEdit(true);
                }}
              />
              <BioAchievement
                data={userData}
                openBio={() => {
                  setBioEdit(true);
                }}
                openAchievement={() => {
                  setAchievementEdit(true);
                }}
                moreAchievements={() => {
                  setMoreAchievements(true);
                }}
              />
              <Skills
                data={userData}
                username={userName}
                openModal={() => {
                  setSkillEdit(true);
                }}
              />

              {/* ----------------------------------------- */}

              {moreAchievements && (
                <MoreAchievementModal
                  data={userData.achievements}
                  handleClose={() => {
                    setMoreAchievements(false);
                  }}
                />
              )}
              {headerEdit && (
                <HeaderEditModal
                  data={userData}
                  handleClose={(changed) => {
                    setHeaderEdit(false);
                    changed && setRefreshKey(refreshKey + 1);
                  }}
                />
              )}
              {bioEdit && (
                <BioEditModal
                  data={userData}
                  handleClose={(changed) => {
                    setBioEdit(false);
                    changed && setRefreshKey(refreshKey + 1);
                  }}
                />
              )}
              {achievementEdit && (
                <AchievementEditModal
                  data={userData}
                  handleClose={(changed) => {
                    setAchievementEdit(false);
                    changed && setRefreshKey(refreshKey + 1);
                  }}
                />
              )}
              {skillEdit && (
                <SkillEditModal
                  data={userData}
                  handleClose={(changed) => {
                    setSkillEdit(false);
                    changed && setRefreshKey(refreshKey + 1);
                  }}
                />
              )}
            </>
          ) : (
            <ProfileError />
          )}
          {confirmLogout && (
            <LogoutConfirmation
              openModal={(value) => {
                setConfirmLogout(value);
              }}
            />
          )}
          <ul className='more-options'>
            <motion.li
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5 }}
              className='logout'
              onClick={() => {
                setConfirmLogout(true);
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
{
  /* <section className='projects'>
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
               */
}