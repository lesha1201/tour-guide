import React from 'react';

import HeroSection from 'components/landing/hero-section';
import VideoSection from 'components/landing/video-section';
import FeaturesSection from 'components/landing/features-section';

function IndexPage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <div style={{ height: '1000px', backgroundColor: 'dodgerblue' }}></div>
    </>
  );
}

export default IndexPage;
