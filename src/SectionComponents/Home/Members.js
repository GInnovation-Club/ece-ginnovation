import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BlogAnimation from '../../AnimationComponents/BlogAnimation';
import StudentSwiper from '../../UiComponents/StudentsSwiper';
const Members = () => {
  return (
    <section className='proud-students'>
      <Row>
        <Col md={{ span: 3, order: 2 }} className='title'>
          <h2>Our Proud Members</h2>
          <BlogAnimation />
        </Col>
        <Col md={{ span: 9, order: 1 }}>
          <StudentSwiper />
        </Col>
      </Row>
      <div className='left-circle-border'></div>
    </section>
  );
};
export default Members;
