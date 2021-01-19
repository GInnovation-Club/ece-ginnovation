import React from 'react';
//componets import
import VideoSwiper from '../../UiComponents/CommonUiComponents/VideoSwiper';
//----------------------------------------------------------------
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
