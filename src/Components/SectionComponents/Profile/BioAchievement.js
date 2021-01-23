import React from 'react';
//bootstrap imports
import { Col, Row } from 'react-bootstrap';
//icons import
import {
  InfoCircleTwoTone,
  EditOutlined,
  DownOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
//assets imports
import trophy from '../../../assets/Icons/trophy.png';
const BioAchievement = (props) => {
  const data = props.data;
  return (
    <section className='about-section'>
      <div className='container'>
        <Row>
          <Col md={8}>
            <div className='bio'>
              {data.biodata ? (
                <>
                  <h4>Professional Bio</h4>
                  <p>{data.biodata}</p>
                  <div className='edit-btn' onClick={props.openBio}>
                    <EditOutlined />
                  </div>
                </>
              ) : (
                <div className='fresh-bio'>
                  <header>
                    <PlusCircleOutlined
                      className='fresh-icon'
                      onClick={props.openBio}
                    />
                    <p>Add Your Bio</p>
                    <p>
                      Write something intresting about you to let people know
                      about you
                    </p>
                  </header>
                </div>
              )}
            </div>
          </Col>
          <Col md={4}>
            <div className='achievements'>
              {data.achievements.length !== 0 ? (
                <>
                  <h4>
                    <img src={trophy} alt='trophy icon' />
                    Top Achievements
                  </h4>
                  <div>
                    {data.achievements.slice(0, 3).map((value, index) => {
                      return (
                        <div className='achievement' key={index}>
                          <span>{value.title}</span>
                          <a href={value.link} target='_blank' rel='noreferrer'>
                            <InfoCircleTwoTone className='icon' />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                  {data.achievements.length > 3 && (
                    <div className='more-btn' onClick={props.moreAchievements}>
                      <DownOutlined className='icon' />
                    </div>
                  )}
                  <div className='edit-btn' onClick={props.openAchievement}>
                    <EditOutlined />
                  </div>
                </>
              ) : (
                <div className='fresh-bio'>
                  <header>
                    <PlusCircleOutlined
                      className='fresh-icon'
                      onClick={props.openAchievement}
                    />
                    <p>Add Your Achievements</p>
                    <p>Let people know about your glories</p>
                  </header>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default BioAchievement;
