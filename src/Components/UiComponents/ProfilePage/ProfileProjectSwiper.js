import React, { useEffect, useState } from 'react';
//swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
//components import
import ProjectCard from './ProfilePage/ProjectCard';
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
  // console.log(windowDimensions.width);
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
        <ProjectCard />
      </SwiperSlide>
    </Swiper>
  );
};
export default ProfileProjectSwiper;
