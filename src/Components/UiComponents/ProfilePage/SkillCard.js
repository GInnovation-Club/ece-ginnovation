import React from 'react';
//bootstrap imports
import { Col } from 'react-bootstrap';
//antd imports
import { Progress } from 'antd';
import { StarFilled } from '@ant-design/icons';
//---------------------------------------------------------------
const SkillCard = (props) => {
  const starRatings = <StarFilled className='icon' />;
  return (
    <Col md={6}>
      <div className='skill-card'>
        <div className='content'>
          <div className='header'>
            <h5>{props.skillName}</h5>
            <div className='icon-container'>
              {props.stars === 5 ? (
                <>
                  {starRatings}
                  {starRatings}
                  {starRatings}
                  {starRatings}
                  {starRatings}
                </>
              ) : (
                ''
              )}
              {props.stars === 4 ? (
                <>
                  {starRatings}
                  {starRatings}
                  {starRatings}
                  {starRatings}
                </>
              ) : (
                ''
              )}
              {props.stars === 3 ? (
                <>
                  {starRatings}
                  {starRatings}
                  {starRatings}
                </>
              ) : (
                ''
              )}
              {props.stars === 2 ? (
                <>
                  {starRatings}
                  {starRatings}
                </>
              ) : (
                ''
              )}
              {props.stars === 1 ? <>{starRatings}</> : ''}
            </div>
          </div>
          <p>{props.description}</p>
        </div>
        <Progress
          strokeColor={{
            from: '#108ee9',
            to: '#87d068',
          }}
          percent={props.percent}
          status='active'
        />
      </div>
    </Col>
  );
};
export default SkillCard;
