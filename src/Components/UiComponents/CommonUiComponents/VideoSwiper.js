import React, { useEffect, useState } from 'react';
//swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
//assets import
import ProjectCard from '../ProfilePage/ProjectCard';

const VideoSwiper = (props) => {
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

  const data = props.data;
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
      {data.map((value, index) => {
        const link = value.link;
        const embedLink = [
          link.slice(0, 13),
          'be.com/embed/',
          link.slice(17),
        ].join('');
        return (
          <SwiperSlide>
            <ProjectCard src={embedLink} key={index} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default VideoSwiper;
