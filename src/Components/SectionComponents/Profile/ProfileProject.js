import React from 'react';
import { EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import VideoSwiper from '../../UiComponents/CommonUiComponents/VideoSwiper';

const ProfileProject = (props) => {
  const data = props.data;
  return (
    <section className='projects'>
      <div className='container'>
        {data.projects.length != 0 ? (
          <>
            <h4 className='section-head'>Projects by {props.username}</h4>
            <VideoSwiper data={data.projects} />
            <div className='edit-btn type2' onClick={props.openModal}>
              <EditOutlined />
            </div>
          </>
        ) : (
          <div className='fresh-section'>
            <header>
              <PlusCircleOutlined
                className='fresh-icon'
                onClick={props.openModal}
              />
              <p>Add Your Projects</p>
              <p>
                Remember, The more projects you will do, the more you will learn
              </p>
            </header>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfileProject;
