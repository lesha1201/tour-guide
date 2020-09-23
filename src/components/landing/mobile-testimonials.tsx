import React, { useCallback, useMemo, useState } from 'react';

import { ReactComponent as ChevronLeft } from 'assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg';
import { TestimonialData } from 'types/common';
import Button from 'components/ui/button';
import Testimonial from 'components/testimonial';
import * as css from './mobile-testimonials.module.scss';

export type MobileTestimonialsProps = {
  testimonials: TestimonialData[];
};

function MobileTestimonials({ testimonials }: MobileTestimonialsProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  const testimonialsCount = testimonials.length;
  const currentTestimonial = testimonials[slideIndex];

  const onClickPrevious = useCallback(() => {
    setSlideIndex(s => Math.max(0, s - 1));
  }, []);

  const onClickNext = useCallback(() => {
    setSlideIndex(s => Math.min(testimonialsCount - 1, s + 1));
  }, [testimonialsCount]);

  const canClickPrevious = testimonialsCount > 1 && slideIndex > 0;
  const canClickNext = testimonialsCount > 1 && slideIndex < testimonialsCount - 1;

  const controlButtons = useMemo(
    () => (
      <div className={css.controls}>
        <Button onClick={onClickPrevious} disabled={!canClickPrevious} mainColor="white">
          <ChevronLeft width="1.2em" />
        </Button>
        <Button onClick={onClickNext} disabled={!canClickNext} mainColor="white">
          <ChevronRight width="1.2em" />
        </Button>
      </div>
    ),
    [canClickNext, canClickPrevious, onClickNext, onClickPrevious],
  );

  return (
    <div>
      {controlButtons}
      <div className={css.testimonialWrapper}>
        <Testimonial testimonial={currentTestimonial} />
      </div>
      {controlButtons}
    </div>
  );
}

export default MobileTestimonials;
