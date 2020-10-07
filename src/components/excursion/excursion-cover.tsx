import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

import * as css from './excursion-cover.module.scss';

export type ExcursionCoverProps = {
  title: string;
  coverImage?: {
    fluid?: FluidObject;
  };
};

function ExcursionCover({ title, coverImage }: ExcursionCoverProps) {
  return (
    <div className={css.base}>
      <div className={css.inner}>
        {coverImage?.fluid && <Img className={css.image} fluid={coverImage.fluid} />}
        <div className={css.gradient} />
        <div className={css.content}>
          <h1 className={css.title}>{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default ExcursionCover;
