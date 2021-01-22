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
import ProjectCard from '../ProfilePage/ProjectCard';

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
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      allowTouchMove={true}
      grabCursor={true}
      className='swiper'
    >
      <SwiperSlide>
        <ProjectCard
          onMouseEnter={() => Swiper.autoplay.stop()}
          onMouseLeave={() => Swiper.autoplay.start()}
          src='https://www.youtube.com/embed/1JxImoxlq_Q'
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard
          onMouseEnter={() => Swiper.autoplay.stop()}
          onMouseLeave={() => Swiper.autoplay.start()}
          src='https://www.youtube.com/embed/JU0zEznezZ4'
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard
          onMouseEnter={() => Swiper.autoplay.stop()}
          onMouseLeave={() => Swiper.autoplay.start()}
          src='https://www.youtube.com/embed/1JxImoxlq_Q'
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard
          onMouseEnter={() => Swiper.autoplay.stop()}
          onMouseLeave={() => Swiper.autoplay.start()}
          src='https://www.youtube.com/embed/JU0zEznezZ4'
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard
          onMouseEnter={() => Swiper.autoplay.stop()}
          onMouseLeave={() => Swiper.autoplay.start()}
          src='https://www.youtube.com/embed/1JxImoxlq_Q'
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default VideoSwiper;
