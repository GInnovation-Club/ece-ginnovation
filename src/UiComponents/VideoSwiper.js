import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {
  deepOrange,
  deepPurple,
  lightGreen,
  teal,
} from '@material-ui/core/colors';
import projectDemo from '../assets/project-demo.jpg';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
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
  console.log(windowDimensions.width);
  const useStyles = makeStyles((theme) => ({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
    green: {
      color: '#fff',
      backgroundColor: lightGreen[500],
    },
    teal: {
      color: '#fff',
      backgroundColor: teal[500],
    },
  }));
  const classes = useStyles();
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
        <div className='video-cards'>
          <div className='card-info'>
            <div className='img' style={imgStyle}>
              <PlayCircleFilledIcon className='play' />
            </div>
            <div className='name'>
              <Avatar className={classes.teal}>P</Avatar>
              <span>Team Pistons</span>
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
              <PlayCircleFilledIcon className='play' />
            </div>
            <div className='name'>
              <Avatar className={classes.teal}>P</Avatar>
              <span>Team Pistons</span>
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
              <PlayCircleFilledIcon className='play' />
            </div>
            <div className='name'>
              <Avatar className={classes.teal}>P</Avatar>
              <span>Team Pistons</span>
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
              <PlayCircleFilledIcon className='play' />
            </div>
            <div className='name'>
              <Avatar className={classes.teal}>P</Avatar>
              <span>Team Pistons</span>
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
              <PlayCircleFilledIcon className='play' />
            </div>
            <div className='name'>
              <Avatar className={classes.teal}>P</Avatar>
              <span>Team Pistons</span>
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
              <PlayCircleFilledIcon className='play' />
            </div>
            <div className='name'>
              <Avatar className={classes.teal}>P</Avatar>
              <span>Team Pistons</span>
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
              <PlayCircleFilledIcon className='play' />
            </div>
            <div className='name'>
              <Avatar className={classes.teal}>P</Avatar>
              <span>Team Pistons</span>
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
              <PlayCircleFilledIcon className='play' />
            </div>
            <div className='name'>
              <Avatar className={classes.teal}>P</Avatar>
              <span>Team Pistons</span>
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
