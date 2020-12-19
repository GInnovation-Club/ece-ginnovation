import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
const TestingAnimation = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/Testig.json'),
    });
  }, []);
  return (
    <>
      <div className='container' ref={container}></div>
    </>
  );
};
export default TestingAnimation;
