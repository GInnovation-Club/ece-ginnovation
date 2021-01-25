import React from 'react';
//bootstrap imports
import { Row } from 'react-bootstrap';
//icons import
import { EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
//componets import
import SkillCard from '../../UiComponents/ProfilePage/SkillCard';
//---------------------------------------------------------------------
const Skills = (props) => {
  const data = props.data;
  return (
    <section className='skills'>
      <div className='container'>
        {data.skills.length !== 0 ? (
          <>
            <h4 className='section-head'>{props.username}'s Skills</h4>
            <Row className='skill-container'>
              {data.skills.map((value, index) => {
                return (
                  <SkillCard
                    skillName={value.title}
                    stars={value.rating}
                    description={value.description}
                    percent={75}
                    key={index}
                  />
                );
              })}
            </Row>
            <div className='edit-btn type2' onClick={props.openModal}>
              <EditOutlined />
            </div>
          </>
        ) : (
          <div className='fresh-section'>
            <header>
              <PlusCircleOutlined
                className='fresh-icon'
                onClick={props.openModal}
              />
              <p>Add Your Top Skills</p>
              <p>
                Remember, Reading is the gateway skill that makes all other
                learning possibles
              </p>
            </header>
          </div>
        )}
      </div>
    </section>
  );
};
export default Skills;
