import React from 'react';
//antd imports
import { Row, Col } from 'antd';
import { CloseOutlined, InfoCircleOutlined } from '@ant-design/icons';

const MoreAchievementModal = (props) => {
  return (
    <div className='modal-container'>
      <div className='edit-modal more-achievement-modal'>
        <h4>
          Achievements
          <CloseOutlined className='close-btn' onClick={props.handleClose} />
        </h4>
        <Row gutter={12}>
          {props.data.map((value, index) => {
            return (
              <Col md={12} sm={24} className='achievement-bar-container'>
                <div className='achievement-bar'>
                  <p>{value.title}</p>
                  <a href={value.link} target='_blank' rel='noreferrer'>
                    Certificate
                    <InfoCircleOutlined className='icon' />
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
export default MoreAchievementModal;
