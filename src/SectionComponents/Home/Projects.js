import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import projectSvg from '../../assets/project.svg';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {
  deepOrange,
  deepPurple,
  lightGreen,
  teal,
} from '@material-ui/core/colors';

const Projects = () => {
  const useStyles = makeStyles((theme) => ({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
    green: {
      color: '#fff',
      backgroundColor: lightGreen[500],
    },
    teal: {
      color: '#fff',
      backgroundColor: teal[500],
    },
  }));
  const classes = useStyles();
  return (
    <section className='projects'>
      <Row>
        <Col md={4} className='title-container'>
          <div className='title'>
            <h2>Student Projects</h2>
            <img src={projectSvg} alt='project' />
          </div>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <div
                data-aos='zoom-in'
                data-aos-duration='600'
                className='project-card pc1'
              >
                <div className='top'>
                  <div className='name'>
                    <Avatar className={classes.orange}>H</Avatar>
                    <span>Team Innovation Geeks</span>
                  </div>
                  <div className='more'>
                    <KeyboardArrowRightIcon />
                  </div>
                </div>
                <h4 className='title'>Salinedo</h4>
                <p className='subtitle'>Smart saline system</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <button className='btn2'>
                  More Info <PlayArrowIcon />
                </button>
              </div>
            </Col>
            <Col md={6}>
              <div
                data-aos='zoom-in'
                data-aos-duration='600'
                data-aos-delay='200'
                className='project-card pc2'
              >
                <div className='top'>
                  <div className='name'>
                    <Avatar className={classes.purple}>T</Avatar>
                    <span>Team Titans</span>
                  </div>
                  <div className='more'>
                    <KeyboardArrowRightIcon />
                  </div>
                </div>
                <h4 className='title'>Agro Robot</h4>
                <p className='subtitle'>All purpose agriculture robot</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <button className='btn2'>
                  More Info <PlayArrowIcon />
                </button>
              </div>
            </Col>
            <Col md={6}>
              <div
                data-aos='zoom-in'
                data-aos-duration='600'
                data-aos-delay='400'
                className='project-card pc3'
              >
                <div className='top'>
                  <div className='name'>
                    <Avatar className={classes.green}>V</Avatar>
                    <span>Team Vikings</span>
                  </div>
                  <div className='more'>
                    <KeyboardArrowRightIcon />
                  </div>
                </div>
                <h4 className='title'>Bluetooh Tracker</h4>
                <p className='subtitle'>A advanced contact tracing device</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <button className='btn2'>
                  More Info <PlayArrowIcon />
                </button>
              </div>
            </Col>
            <Col md={6}>
              <div
                data-aos='zoom-in'
                data-aos-duration='600'
                data-aos-delay='600'
                className='project-card pc4'
              >
                <div className='top'>
                  <div className='name'>
                    <Avatar className={classes.teal}>P</Avatar>
                    <span>Team Pistons</span>
                  </div>
                  <div className='more'>
                    <KeyboardArrowRightIcon />
                  </div>
                </div>
                <h4 className='title'>Spider Robot</h4>
                <p className='subtitle'>A tiny powerful robo spider</p>
                <p className='description'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <button className='btn2'>
                  More Info <PlayArrowIcon />
                </button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className='left-circle-border'></div>
      <div className='circle-design'></div>
    </section>
  );
};
export default Projects;
