import React, { useEffect, useState } from 'react';
//swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
//assets import
import VideoCard from '../../UiComponents/HomePage/VideoCard';

const FeaturedVideoSwiper = (props) => {
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
        disableOnInteraction: true,
      }}
      allowTouchMove={true}
      grabCursor={true}
      className='swiper'
    >
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
      <SwiperSlide>
        <VideoCard />
      </SwiperSlide>
    </Swiper>
  );
};
export default FeaturedVideoSwiper;
