import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import student1 from '../assets/student1.jpg';
import student2 from '../assets/student2.jpg';
import student3 from '../assets/student3.jpg';
import ScreenWidth from '../CommonFunctions/ScreenWidth';
const StudentSwiper = () => {
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
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={windowDimensions.width < 600 ? 1 : 3}
      onSlideChange={() => console.log('slide change')}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      className='swiper'
    >
      <SwiperSlide>
        <img src={student1} alt='student-img' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={student2} alt='student-img' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={student3} alt='student-img' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={student1} alt='student-img' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={student1} alt='student-img' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={student2} alt='student-img' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={student3} alt='student-img' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={student1} alt='student-img' />
      </SwiperSlide>
    </Swiper>
  );
};
export default StudentSwiper;
