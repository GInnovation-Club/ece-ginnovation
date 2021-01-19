import React from 'react';
//bootstrap imports
import { Col, Row } from 'react-bootstrap';
//component import
import MotoCardFrame from '../../UiComponents/HomePage/MotoCardFrame';
//assets import
import think from '../../../assets/think.svg';
import learn from '../../../assets/learn.svg';
import implement from '../../../assets/implement.svg';
import innovate from '../../../assets/innovate.svg';
//------------------------------------------------------------------------
const Moto = () => {
  return (
    <section className='moto'>
      <Row>
        <Col md={2} className='title'>
          <h2>Our Moto</h2>
          <div className='left-circle-border'></div>
        </Col>
        <Col md={10}>
          <Row>
            <MotoCardFrame
              delay='100'
              imgSrc={think}
              header='Think'
              description='Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s'
              id='card-1'
            />
            <MotoCardFrame
              delay='200'
              imgSrc={learn}
              header='Learn'
              id='card-2'
              description='Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s'
            />
            <MotoCardFrame
              delay='100'
              imgSrc={implement}
              header='Implement'
              id='card-3'
              description='Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s'
            />
            <MotoCardFrame
              delay='300'
              imgSrc={innovate}
              header='Innovate'
              id='card-4'
              description='Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s'
            />
          </Row>
        </Col>
      </Row>
    </section>
  );
};
export default Moto;
