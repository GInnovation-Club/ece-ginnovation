import { Col, Row } from 'antd';
import React from 'react';
import PeopleCard from '../UiComponents/CommonUiComponents/PeopleCard';

const AboutDevelopers = () => {
  return (
    <div className='about-developers'>
      <div className='top'>
        <div className='pattern'></div>
        <header>
          <h2>About The Developers</h2>
          <p>Young minds who have developed this application</p>
        </header>
      </div>
      <div className='container developers'>
        <Row gutter={8}>
          <Col md={8}>
            <PeopleCard
              name='Amarjeet Sahoo'
              headline='Backend developer at Ginnovation'
              img='amarjeet'
              liLink='https://www.linkedin.com/in/amarjeetsahoo2000'
              ghLink='https://github.com/amarjeetsahoo'
              igLink='https://www.instagram.com/amarjeethappysahoo'
              ttLink='https://twitter.com/amarjeetsahoo09'
            />
          </Col>
          <Col md={8}>
            <PeopleCard
              name='Ashutosh Bisoyi'
              headline='Frontend developer at Ginnovation'
              img='ashutosh'
              liLink='https://www.linkedin.com/in/ashutoshbisoyi/'
              ghLink='https://github.com/ashutoshbisoyi'
              igLink='https://www.instagram.com/ashutoshbisoyi/'
              fbLink='https://www.facebook.com/AshutoshBisoyiFB'
            />
          </Col>
          <Col md={8}>
            <PeopleCard
              name='Mr. Gulua'
              headline='Backend developer at Ginnovation'
              img='another'
              liLink='https://www.linkedin.com/in/amarjeetsahoo2000'
              ghLink='https://github.com/amarjeetsahoo'
              igLink='https://www.instagram.com/amarjeethappysahoo'
              ttLink='https://twitter.com/amarjeetsahoo09'
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutDevelopers;
