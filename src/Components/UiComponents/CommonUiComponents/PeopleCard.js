import React from 'react';
import fb from '../../../assets/Icons/facebook.png';
import li from '../../../assets/Icons/linkedin.png';
import gh from '../../../assets/Icons/github.png';
import ig from '../../../assets/Icons/instagram.png';
import tt from '../../../assets/Icons/twitter.png';

const PeopleCard = (props) => {
  return (
    <div className='people-card'>
      <div className='cover'></div>
      <div className='people-card-body'>
        <div className='profile-picture' id={props.img}></div>
        <h5>{props.name}</h5>
        <p className='headline'>{props.headline}</p>
        <p className='about'>{props.about}</p>
        <div className='sm-container'>
          <a href={props.liLink} target='_blank' rel='noreferrer'>
            <img src={li} alt='social media' />
          </a>
          <a href={props.ghLink} target='_blank' rel='noreferrer'>
            <img src={gh} alt='social media' />
          </a>
          <a href={props.igLink} target='_blank' rel='noreferrer'>
            <img src={ig} alt='social media' />
          </a>
          {props.ttLink && (
            <a href={props.ttLink} target='_blank' rel='noreferrer'>
              <img src={tt} alt='social media' />
            </a>
          )}
          {props.fbLink && (
            <a href={props.fbLink} target='_blank' rel='noreferrer'>
              <img src={fb} alt='social media' />
            </a>
          )}
        </div>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default PeopleCard;
