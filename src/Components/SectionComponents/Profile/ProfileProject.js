import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import VideoSwiper from '../../UiComponents/CommonUiComponents/VideoSwiper';

const ProfileProject = (props) => {
  return (
    <section className='projects'>
      <div className='container'>
        <h4 className='section-head'>Projects by {props.username}</h4>
        <VideoSwiper data={props.data.projects} />
        <div className='edit-btn type2' onClick={props.openModal}>
          <EditOutlined />
        </div>
      </div>
    </section>
  );
};

export default ProfileProject;
