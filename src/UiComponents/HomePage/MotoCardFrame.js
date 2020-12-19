import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
const MotoCardFrame = (props) => {
  return (
    <Col md={6}>
      <div
        data-aos='fade-up'
        data-aos-duration='600'
        data-aos-delay={props.delay}
        className='card'
        id={props.id}
      >
        <figure>
          <img src={props.imgSrc} alt={props.imgSrc} />
        </figure>
        <div>
          <h3>{props.header}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </Col>
  );
};
export default MotoCardFrame;
