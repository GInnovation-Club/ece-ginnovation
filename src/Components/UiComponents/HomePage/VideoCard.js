import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import projectDemo from '../../../assets/project-demo.jpg';

const imgStyle = {
  backgroundImage: `url( ${projectDemo} )`,
};
//-----------------------------------------------------------------
const VideoCard = () => {
  return (
    <a href='https://youtu.be/p3mLeLMXxE0' target='_blank'>
      <div className='video-cards'>
        <div className='card-info'>
          <div className='img' style={imgStyle}>
            <PlayCircleOutlined className='play' />
          </div>
          <div className='name'>
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
              P
            </Avatar>
            <h6>Team Pistons</h6>
          </div>
          <h4>How to make a spyder robot</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
      </div>
    </a>
  );
};
export default VideoCard;
