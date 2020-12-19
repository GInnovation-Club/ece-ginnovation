import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Avatar from '@material-ui/core/Avatar';
import studentImg from '../../assets/student1.jpg';
import { makeStyles } from '@material-ui/core/styles';
import bulbImg from '../../assets/bulb.png';
import {
  deepOrange,
  deepPurple,
  lightGreen,
  teal,
} from '@material-ui/core/colors';
const Blogs = () => {
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
    large: {
      width: theme.spacing(9),
      height: theme.spacing(9),
      margin: 'auto',
      transform: 'translate(0,-40%)',
    },
  }));
  const classes = useStyles();
  return (
    <section className='blog'>
      <Row>
        <Col md={{ span: 10, order: 1 }}>
          <Row>
            <Col md={12}>
              <div
                data-aos='slide-right'
                data-aos-duration='600'
                data-aos-delay='200'
                className='cards'
              >
                <div className='cover-img'>
                  <button>
                    <PlayArrowIcon />
                  </button>
                </div>
                <Avatar
                  alt='Cindy Baker'
                  src={studentImg}
                  className={classes.large}
                />
                <h4>Recent trends in IoT</h4>
                <span>By Anuradha Basu</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div
                data-aos='slide-up'
                data-aos-duration='600'
                data-aos-delay='100'
                className='cards'
              >
                <div className='cover-img'>
                  <button>
                    <PlayArrowIcon />
                  </button>
                </div>
                <Avatar
                  alt='Cindy Baker'
                  src={studentImg}
                  className={classes.large}
                />
                <h4>Recent trends in IoT</h4>
                <span>By Anuradha Basu</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div
                data-aos='slide-up'
                data-aos-duration='600'
                data-aos-delay='300'
                className='cards'
              >
                <div className='cover-img'>
                  <button>
                    <PlayArrowIcon />
                  </button>
                </div>
                <Avatar
                  alt='Cindy Baker'
                  src={studentImg}
                  className={classes.large}
                />
                <h4>Recent trends in IoT</h4>
                <span>By Anuradha Basu</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div
                data-aos='slide-up'
                data-aos-duration='600'
                data-aos-delay='500'
                className='cards'
              >
                <div className='cover-img'>
                  <button>
                    <PlayArrowIcon />
                  </button>
                </div>
                <Avatar
                  alt='Cindy Baker'
                  src={studentImg}
                  className={classes.large}
                />
                <h4>Recent trends in IoT</h4>
                <span>By Anuradha Basu</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={{ span: 2, order: 2 }}>
          <div
            data-aos='zoom-in'
            data-aos-duration='600'
            data-aos-delay='100'
            className='title'
          >
            <h2>Blog Point</h2>
            <img src={bulbImg} alt='idea' />
          </div>
        </Col>
      </Row>
    </section>
  );
};
export default Blogs;
