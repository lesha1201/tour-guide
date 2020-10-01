import React from 'react';

import HeroSection from 'components/landing/hero-section';
import VideoSection from 'components/landing/video-section';
import FeaturesSection from 'components/landing/features-section';
import ExcursionsSection from 'components/landing/excursions-section';
import GallerySection from 'components/landing/gallery-section';
import TestimonialsSection from 'components/landing/testimonials-section';
import ContactsSection from 'components/landing/contacts-section';
import Footer from 'components/footer';

function IndexPage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <ExcursionsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactsSection />
      <Footer />
    </>
  );
}

export default IndexPage;
