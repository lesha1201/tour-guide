import React from 'react';

import { TestimonialData } from 'types/common';
import Avatar from './ui/avatar';
import * as css from './testimonial.module.scss';

export type TestimonialProps = {
  testimonial: TestimonialData;
};

function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className={css.base}>
      <div className={css.personInfo}>
        <Avatar src={testimonial.avatar} size="md" />
        <div className={css.personName}>{testimonial.fullName}</div>
        <div className={css.excursionName}>{testimonial.excursion.name}</div>
      </div>
      <div className={css.text}>{testimonial.text}</div>
    </div>
  );
}

export default Testimonial;
