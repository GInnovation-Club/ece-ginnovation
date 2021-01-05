import React from 'react';
import Badge from 'react-bootstrap/Badge';
import img1 from '../../assets/bg1.jpg';
import student1 from '../../assets/student1.jpg';

const BlogCard = () => {
  const coverImgStyle = {
    backgroundImage: `linear-gradient(rgba(245, 246, 252, 0.73), rgba(0, 0, 0, 0.73)),url(${img1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const profileImgStyle = {
    backgroundImage: `url(${student1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className='blog-card'>
      <div className='cover-image' style={coverImgStyle}></div>
      <div className='content'>
        <div className='profile-image' style={profileImgStyle}></div>
        <div className='head'>
          <h5 className='title'>Creating Responsive Design</h5>
          <div className='badge-container'>
            <Badge pill variant='dark' className='badge'>
              WebDev
            </Badge>
            <Badge pill variant='dark' className='badge'>
              ResponsiveDesign
            </Badge>
            <Badge pill variant='dark' className='badge'>
              CSS
            </Badge>
          </div>
          <span className='author'>by Ashutosh Bisoyi</span>
          <p className='date'>Uploaded on Mon 21th April 2021</p>
        </div>
        <div className='description'>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
