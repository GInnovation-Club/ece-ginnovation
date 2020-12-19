import React from 'react';
import VideoSwiper from '../../UiComponents/VideoSwiper';
const Videos = () => {
  return (
    <section className='videos'>
      <h2>Video Playlists</h2>
      <div className='square'></div>
      <div className='square-border'></div>
      <div>
        <VideoSwiper />
      </div>
    </section>
  );
};
export default Videos;
