import React from 'react';
import { Col, Row } from 'react-bootstrap';
import GrowAnimation from '../../AnimationComponents/GrowAnimation';
import FbIcon from '../../assets/Icons/facebook.png';
import IgIcon from '../../assets/Icons/instagram.png';
import YtIcon from '../../assets/Icons/youtube.png';
import { motion } from 'framer-motion';
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
            <motion.button
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className='btn1'
            >
              Join Now
            </motion.button>
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
            <img src={IgIcon} alt='ginnovation-instagram' />
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
