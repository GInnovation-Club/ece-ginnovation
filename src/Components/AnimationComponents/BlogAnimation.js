import React, { useEffect, useRef } from 'react';
//assets import
import lottie from 'lottie-web';
//---------------------------------------------------
const BlogAnimation = (props) => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/Animations/Blogging Animation.json'),
    });
  }, []);
  return (
    <>
      <div className='container' ref={container}></div>
    </>
  );
};
export default BlogAnimation;
