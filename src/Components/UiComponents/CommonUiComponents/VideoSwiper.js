import React, { useEffect, useState } from 'react';
//swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
//antd import
import { Avatar } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
//assets import
import projectDemo from '../../../assets/project-demo.jpg';

const VideoSwiper = () => {
  SwiperCore.use([Autoplay]);
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // console.log(windowDimensions.width);

  const imgStyle = {
    backgroundImage: `url( ${projectDemo} )`,
  };
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={windowDimensions.width < 600 ? 1 : 3}
      // onSlideChange={() => console.log('slide change')}
      loop={true}
      // onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className='swiper'
    >
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
    </Swiper>
  );
};
export default VideoSwiper;
