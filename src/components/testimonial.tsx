import React, { CSSProperties } from 'react';
import Img, { FixedObject } from 'gatsby-image';

import { TestimonialFragment } from 'types/graphql';
import Avatar from './ui/avatar';
import css from './testimonial.module.scss';

export type TestimonialProps = {
  testimonial: TestimonialFragment;
};

const IMG_STYLE: CSSProperties = {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
};

function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className={css.base}>
      <div className={css.personInfo}>
        <Avatar size="md">
          {testimonial.avatar?.childImageSharp?.fixed && (
            <Img
              style={IMG_STYLE}
              fixed={testimonial.avatar.childImageSharp.fixed as FixedObject}
            />
          )}
        </Avatar>
        <div className={css.personName}>{testimonial.fullName || '-'}</div>
        <div className={css.excursionName}>{testimonial.excursion?.name || '-'}</div>
      </div>
      <div className={css.text}>{testimonial.text || ''}</div>
    </div>
  );
}

export default Testimonial;
