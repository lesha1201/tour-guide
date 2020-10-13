import React from 'react';

import HeroSection from 'components/landing/hero-section';
import VideoSection from 'components/landing/video-section';
import FeaturesSection from 'components/landing/features-section';
import ExcursionsSection from 'components/landing/excursions-section';
import GallerySection from 'components/landing/gallery-section';
import TestimonialsSection from 'components/landing/testimonials-section';
import ContactsSection from 'components/landing/contacts-section';
import { SectionProps } from 'components/landing/section';
import Footer from 'components/footer';
import {
  CONTACTS_SECTION,
  EXCURSIONS_SECTION,
  FEATURES_SECTION,
  GALLERY_SECTION,
  HERO_SECTION,
  SECTIONS,
  TESTIMONIALS_SECTION,
  VIDEO_SECTION,
} from 'constants/sections';
import SEO from 'components/seo';

type ComponentRenderer = (props: {
  id: string;
  key: string;
  variant: SectionProps['variant'];
}) => JSX.Element;

const SECTIONS_COMPONENT_RENDERER: Record<string, ComponentRenderer> = {
  [HERO_SECTION.id]: ({ id, key }) => <HeroSection key={key} id={id} />,
  [VIDEO_SECTION.id]: props => <VideoSection {...props} />,
  [FEATURES_SECTION.id]: props => <FeaturesSection {...props} />,
  [EXCURSIONS_SECTION.id]: props => <ExcursionsSection {...props} />,
  [GALLERY_SECTION.id]: props => <GallerySection {...props} />,
  [TESTIMONIALS_SECTION.id]: props => <TestimonialsSection {...props} />,
  [CONTACTS_SECTION.id]: props => <ContactsSection {...props} />,
};

function IndexPage() {
  return (
    <>
      <SEO hasTitleTemplate={false} />
      {SECTIONS.map(({ id }, index) => {
        const componentRenderer = SECTIONS_COMPONENT_RENDERER[id];

        return componentRenderer({
          key: id,
          id,
          variant: index % 2 === 0 ? 'primary' : 'secondary',
        });
      })}
      <Footer />
    </>
  );
}

export default IndexPage;
