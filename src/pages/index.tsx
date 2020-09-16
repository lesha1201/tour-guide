import React from 'react';

import HeroSection from 'components/landing/hero-section';
import VideoSection from 'components/landing/video-section';
import FeaturesSection from 'components/landing/features-section';
import Footer from 'components/footer';

function IndexPage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default IndexPage;
