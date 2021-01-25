import { Col, Row } from 'antd';
import React from 'react';
import AboutImg from '../../assets/about-ginno.svg';
import One from '../../assets/one.png';
import Two from '../../assets/two.png';
import Three from '../../assets/three.png';
import Learning from '../../assets/mission-learning.svg';
import Thinking from '../../assets/mission-critical-thinking.svg';
import Experts from '../../assets/mission-experts.svg';
//animation
import { motion } from 'framer-motion';
const AboutGinnovation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='about-common-page about-ginnovation'
    >
      <div className='top'>
        <div className='pattern'></div>
        <motion.header
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2>About Ginnovation Club</h2>
          <p>The club that focous more on practicals</p>
        </motion.header>
      </div>
      <div className='container'>
        <div className='about'>
          {/* <figure>
            <img src={AboutImg} className='img-fluid' alt='about' />
          </figure> */}
          <p className='about-text text-justify'>
            <strong>‘THE GINNOVATION CLUB’</strong> is an initiative of the
            Department of Electronics which exhibits the idea of providing a
            platform to young technocrats in order to intensify their knowledge.
            It focuses on the overall development of any student willing to put
            in hard labor for boundless experience. The club holds an open
            platform for all, without any discrimination and indulges in
            building a competitive environment which aims at enhancing the
            skills of students. It aims at teaching the students to have a
            practical approach and how they can apply the texts well-read in the
            real world. It provides the scholars an atmosphere which helps them
            develop critical thinking abilities which facilitates their creative
            activities. It seeks to bind the minds of young pupils from various
            fields as it strives to work on enriching the education imparted.
          </p>
        </div>
        <div className='mission'>
          <h2>Our Mission</h2>
          <Row gutter={12}>
            <Col md={8}>
              <div
                // data-aos='zoom-in'
                // data-aos-duration='600'
                className='mission-card'
              >
                <img src={Learning} className='img-fluid' alt='about' />
                <p>
                  Educating young scholars to operate efficiently with real life
                  problems and their solutions.
                </p>
              </div>
            </Col>
            <Col md={8}>
              <div
                // data-aos='zoom-in'
                // data-aos-duration='600'
                // data-aos-delay='200'
                className='mission-card'
              >
                <img src={Thinking} className='img-fluid' alt='about' />
                <p>
                  Crafting the minds of students in order to enhance their
                  critical thinking abilities.
                </p>
              </div>
            </Col>
            <Col md={8}>
              <div
                // data-aos='zoom-in'
                // data-aos-duration='600'
                // data-aos-delay='400'
                className='mission-card'
              >
                <img src={Experts} className='img-fluid' alt='about' />
                <p>
                  Yielding technocrats with profound knowledge, who expertise in
                  their area of concern.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className='mission vission'>
          <h2>Our Vission</h2>
          <div className='vission-card-container'>
            <div
              data-aos='fade-left'
              data-aos-duration='600'
              data-aos-delay='100'
              className='card'
            >
              <img src={One} className='img-fluid' alt='one' />
              <span>
                Educating young scholars to operate efficiently with real life
                problems and their solutions.
              </span>
            </div>
            <div
              data-aos='fade-right'
              data-aos-duration='600'
              data-aos-delay='200'
              className='card'
            >
              <span>
                Educating young scholars to operate efficiently with real life
                problems and their solutions.
              </span>
              <img src={Two} className='img-fluid' alt='one' />
            </div>
            <div
              data-aos='fade-left'
              data-aos-duration='600'
              data-aos-delay='100'
              className='card'
            >
              <img src={Three} className='img-fluid' alt='one' />
              <span>
                Educating young scholars to operate efficiently with real life
                problems and their solutions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutGinnovation;
