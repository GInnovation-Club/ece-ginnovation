import React from 'react';
//-----------------------------------------------------------------
const ProjectCard = (props) => {
  return (
    <div className='profile-project-cards'>
      <iframe
        width='320'
        height='180'
        src={props.src}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullscreen
      ></iframe>
    </div>
  );
};
export default ProjectCard;
