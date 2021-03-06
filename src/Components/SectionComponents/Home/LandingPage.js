import React from 'react';
//bootstrap imports
import { Col, Row } from 'react-bootstrap';
//animation
import { motion } from 'framer-motion';
//assets import
import GrowAnimation from '../../AnimationComponents/GrowAnimation';
import FbIcon from '../../../assets/Icons/facebook-black.png';
import TtIcon from '../../../assets/Icons/twitter-black.png';
import YtIcon from '../../../assets/Icons/youtube-black.png';
import { Link } from 'react-router-dom';
//--------------------------------------------------------------------------
const LandingPage = () => {
  return (
    <section className='home'>
      <Row>
        <Col md={6}>
          <header>
            <motion.h1
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Ginnovation
            </motion.h1>
            <motion.h4
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Know More, Grow More
            </motion.h4>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </motion.p>
            <Link to='/ece-ginnovation/signup'>
              <motion.button
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className='btn1'
              >
                Join Now
              </motion.button>
            </Link>
          </header>
        </Col>
        <Col md={6}>
          <GrowAnimation src='../assets/Growth Animation.json' />
        </Col>
      </Row>
      <ul className='social-bar'>
        <motion.li
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a href='https://www.facebook.com/AshutoshBisoyiFB'>
            <img src={FbIcon} alt='ginnovation-facebook' />
          </a>
        </motion.li>
        <motion.li
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a href='https://www.youtube.com/channel/UC53GDmiSYagG-cdZeMHuINw'>
            <img src={YtIcon} alt='ginnovation-youtube' />
          </a>
        </motion.li>
        <motion.li
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href='https://www.instagram.com/ashutoshbisoyi/'>
            <img src={TtIcon} alt='ginnovation-instagram' />
          </a>
        </motion.li>
      </ul>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='circle-design'
      ></motion.div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='left-circle-border'
      ></motion.div>
    </section>
  );
};
export default LandingPage;
