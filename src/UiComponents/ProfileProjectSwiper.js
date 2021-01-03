import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import projectDemo from '../assets/project-demo.jpg';

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
  console.log(windowDimensions.width);

  const imgStyle = {
    backgroundImage: `url( ${projectDemo} )`,
  };
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={windowDimensions.width < 600 ? 1 : 3}
      onSlideChange={() => console.log('slide change')}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className='swiper'
    >
      <SwiperSlide>
        <div className='profile-project-cards'>
          <iframe
            width='360'
            height='200'
            src='https://www.youtube.com/embed/1JxImoxlq_Q'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='profile-project-cards'>
          <iframe
            width='360'
            height='200'
            src='https://www.youtube.com/embed/1JxImoxlq_Q'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='profile-project-cards'>
          <iframe
            width='360'
            height='200'
            src='https://www.youtube.com/embed/1JxImoxlq_Q'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='profile-project-cards'>
          <iframe
            width='360'
            height='200'
            src='https://www.youtube.com/embed/1JxImoxlq_Q'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='profile-project-cards'>
          <iframe
            width='360'
            height='200'
            src='https://www.youtube.com/embed/1JxImoxlq_Q'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default ProfileProjectSwiper;
