import { Col, Row } from 'antd';
import React from 'react';
import PeopleCard from '../UiComponents/CommonUiComponents/PeopleCard';
//animation
import { motion } from 'framer-motion';
const AboutDevelopers = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='about-common-page'
    >
      <div className='top'>
        <div className='pattern'></div>
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2>About The Developers</h2>
          <p>Young minds who have developed this application</p>
        </motion.header>
      </div>
      <div className='container developers'>
        <Row gutter={8}>
          <Col md={4}></Col>
          <Col md={8}>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <PeopleCard
                name='Amarjeet Sahoo'
                headline='Backend developer at Ginnovation'
                about='Hi, I’m Amarjeet, a learner, who is passionate about mobile application development.'
                img='amarjeet'
                liLink='https://www.linkedin.com/in/amarjeetsahoo2000'
                ghLink='https://github.com/amarjeetsahoo'
                igLink='https://www.instagram.com/amarjeethappysahoo'
                ttLink='https://twitter.com/amarjeetsahoo09'
              />
            </motion.div>
          </Col>
          <Col md={8}>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <PeopleCard
                name='Ashutosh Bisoyi'
                headline='Frontend developer at Ginnovation'
                about="Hey there! I'm Ashutosh, I Design, Code, Create and Innovate."
                img='ashutosh'
                liLink='https://www.linkedin.com/in/ashutoshbisoyi/'
                ghLink='https://github.com/ashutoshbisoyi'
                igLink='https://www.instagram.com/ashutoshbisoyi/'
                fbLink='https://www.facebook.com/ashutoshbisoyi205/'
              />
            </motion.div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default AboutDevelopers;
