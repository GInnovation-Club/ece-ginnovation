import React from 'react';
import { Col } from 'react-bootstrap';
import { Progress } from 'antd';
import { StarFilled } from '@ant-design/icons';
const SkillCard = (props) => {
  return (
    <Col md={3}>
      <div className='skill-card'>
        <div className='header'>
          <h5>{props.skillName}</h5>
          <div className='icon-container'>
            {props.stars == 5 ? (
              <>
                <StarFilled className='icon' />
                <StarFilled className='icon' />
                <StarFilled className='icon' />
                <StarFilled className='icon' />
                <StarFilled className='icon' />
              </>
            ) : (
              ''
            )}
            {props.stars == 4 ? (
              <>
                <StarFilled className='icon' />
                <StarFilled className='icon' />
                <StarFilled className='icon' />
                <StarFilled className='icon' />
              </>
            ) : (
              ''
            )}
            {props.stars == 3 ? (
              <>
                <StarFilled className='icon' />
                <StarFilled className='icon' />
                <StarFilled className='icon' />
              </>
            ) : (
              ''
            )}
            {props.stars == 2 ? (
              <>
                <StarFilled className='icon' />
                <StarFilled className='icon' />
              </>
            ) : (
              ''
            )}
            {props.stars == 1 ? (
              <>
                <StarFilled className='icon' />
              </>
            ) : (
              ''
            )}
          </div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
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
