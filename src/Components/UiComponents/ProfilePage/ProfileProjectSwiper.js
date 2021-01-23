import React, { useEffect, useState } from 'react';
//swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
//components import
import ProjectCard from './ProjectCard';
//----------------------------------------------------------------
const ProfileProjectSwiper = () => {
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
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={windowDimensions.width < 600 ? 1 : 3}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className='swiper'
    >
      <SwiperSlide>
        <ProjectCard src='https://www.youtube.com/embed/1JxImoxlq_Q' />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard src='https://www.youtube.com/embed/JU0zEznezZ4' />
      </SwiperSlide>
    </Swiper>
  );
};
export default ProfileProjectSwiper;
