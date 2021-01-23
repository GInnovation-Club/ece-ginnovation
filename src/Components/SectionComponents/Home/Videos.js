import React from 'react';
import FeaturedVideoSwiper from '../../UiComponents/HomePage/FeaturedVideoSwiper';
//componets import
//----------------------------------------------------------------
const Videos = () => {
  return (
    <section className='videos'>
      <h2>Video Playlists</h2>
      <div className='square'></div>
      <div className='square-border'></div>
      <div>
        <FeaturedVideoSwiper />
      </div>
    </section>
  );
};
export default Videos;
