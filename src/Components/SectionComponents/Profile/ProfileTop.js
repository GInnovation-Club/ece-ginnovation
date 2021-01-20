import React from 'react';
//bootstrap imports
import { Col, Row } from 'react-bootstrap';
//icons import
import {
  PlusOutlined,
  PushpinFilled,
  CrownFilled,
  MessageFilled,
  MailFilled,
  EditOutlined,
} from '@ant-design/icons';
//assets imports
import dp from '../../../assets/student2.jpg';
import fb from '../../../assets/SM-Icons/facebook.png';
import li from '../../../assets/SM-Icons/linkedin.png';
import gh from '../../../assets/SM-Icons/github.png';
import yt from '../../../assets/SM-Icons/youtube.png';
import { message } from 'antd';
//----------------------------------------------------------------
const ProfileTop = (props) => {
  const data = props.data;
  const userMailAddress = props.mail;
  return (
    <section className='top'>
      <div className='container'>
        {
          <div className='profile-picture'>
            <div style={{ backgroundImage: `url(${dp})` }} className='dp'>
              <button className='img-edit'>
                <EditOutlined />
              </button>
            </div>
          </div>
        }
        <div className='profile-details'>
          <header>
            <h3 className='profile-name'>{data.fullname}</h3>
            <h6 className='headline'>
              {data.designation
                ? data.designation
                : 'Your Designation goes Here'}
            </h6>
            <div className='role'>
              <span className={data.role === 'Student' && 'active'}>
                Student
              </span>
              <span className={data.role === 'Mentor' && 'active'}>Mentor</span>
              <span className={data.role === 'Teacher' && 'active'}>
                Teacher
              </span>
            </div>
            <div className='bio'>
              <p>
                <MailFilled className='icon' />
                {data.email}
              </p>
              {data.education[0] ? (
                <p className='education'>
                  <CrownFilled className='icon crown' />
                  {data.education[0].semester +
                    ' Semester' +
                    ', ' +
                    data.education[0].branch}
                </p>
              ) : (
                <p className='education'>
                  <CrownFilled className='icon crown' />
                  Your Education Goes Here
                </p>
              )}
              {data.address[0] ? (
                <p>
                  <PushpinFilled className='icon' />
                  {data.address[0].district === ''
                    ? ''
                    : data.address[0].district + ', '}

                  {data.address[0].state === '' ? '' : data.address[0].state}
                </p>
              ) : (
                <p>
                  <PushpinFilled className='icon' />
                  Your Address goes here
                </p>
              )}
            </div>
          </header>
          <Row className='action-bar'>
            <Col md={3} className='bar'>
              <h4>22+</h4>Projects
            </Col>
            <Col md={3} className='bar'>
              <h4>{data.achievements.length}</h4>Achievements
            </Col>
            <Col md={6} className='bar btn-bar'>
              <button
                onClick={() => {
                  message.success('Follow Request Sent');
                }}
              >
                <PlusOutlined className='icon' />
                Follow
              </button>
            </Col>
          </Row>
          {data.socialLinks[0] ? (
            <div className='social-media'>
              {data.socialLinks[0].linkedin && (
                <a
                  href={data.socialLinks[0].linkedin}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={li} alt='linkedin icon' />
                </a>
              )}
              {data.socialLinks[0].github && (
                <a
                  href={data.socialLinks[0].github}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={gh} alt='github icon' />
                </a>
              )}
              {data.socialLinks[0].youtube && (
                <a
                  href={data.socialLinks[0].youtube}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={yt} alt='youtube icon' />
                </a>
              )}
              {data.socialLinks[0].facebook && (
                <a
                  href={data.socialLinks[0].facebook}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={fb} alt='facebook icon' />
                </a>
              )}
            </div>
          ) : (
            <div className='social-media fresh-social-media'>
              <img src={li} alt='linkedin icon' />
              <img src={gh} alt='github icon' />
              <img src={yt} alt='youtube icon' />
              <img src={fb} alt='facebook icon' />
            </div>
          )}
          <a href={userMailAddress}>
            <button className='message'>
              <MessageFilled className='icon' />
              Send Message
            </button>
          </a>

          <button className='message edit-btn' onClick={props.openModal}>
            <EditOutlined className='icon' />
          </button>
        </div>
      </div>
    </section>
  );
};
export default ProfileTop;
