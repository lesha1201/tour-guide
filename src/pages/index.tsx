import React from 'react';

import HeroSection from 'components/landing/hero-section';
import VideoSection from 'components/landing/video-section';

function IndexPage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <div style={{ height: '1000px', backgroundColor: 'dodgerblue' }}></div>
    </>
  );
}

export default IndexPage;
