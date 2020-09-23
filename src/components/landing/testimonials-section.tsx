import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { MEDIA_QUERIES } from 'constants/style';
import { TESTIMONIALS } from 'constants/config';
import SectionTitle from 'components/ui/section-title';
import Section from './section';
import Testimonials from './testimonials';
import MobileTestimonials from './mobile-testimonials';

function TestimonialsSection() {
  const [isClientRender, setIsClientRender] = useState(false);

  // We should rerender the component after hydration to display the proper Testimonials
  useEffect(() => {
    setIsClientRender(true);
  }, []);

  const isBigScreen = useMediaQuery({
    query: MEDIA_QUERIES.tabLand,
  });

  return (
    <Section variant="secondary">
      <SectionTitle align="center">Отзывы</SectionTitle>

      {isBigScreen && isClientRender ? (
        <Testimonials testimonials={TESTIMONIALS} />
      ) : (
        <MobileTestimonials testimonials={TESTIMONIALS} />
      )}
    </Section>
  );
}

export default TestimonialsSection;
