import React, { useState } from 'react';
import ProfileProjectSwiper from '../../UiComponents/ProfilePage/ProfileProjectSwiper';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import VideoSwiper from '../../UiComponents/CommonUiComponents/VideoSwiper';
import ProjectEditModal from '../../UiComponents/ProfilePage/Modals/ProjectEditModal';

const ProfileProject = (props) => {
  const [editProject, seteditProject] = useState(false);
  return (
    <section className='projects'>
      <div className='container'>
        <h4 className='section-head'>Projects by {props.username}</h4>
        <VideoSwiper />
        <div className='edit-btn type2' onClick={() => seteditProject(true)}>
          <EditOutlined />
        </div>
      </div>
      {editProject && (
        <ProjectEditModal handleClose={() => seteditProject(false)} />
      )}
    </section>
  );
};

export default ProfileProject;
