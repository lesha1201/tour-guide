import React from 'react';
import Img, { GatsbyImageProps } from 'gatsby-image';

import { ReactComponent as ZoomInIcon } from 'assets/icons/zoom-in.svg';
import css from './gallery-item.module.scss';

export type GalleryItemProps = {
  image: GatsbyImageProps;
  title?: string;
};

function GalleryItem({ image, title }: GalleryItemProps) {
  return (
    <div className={css.galleryItem}>
      <div className={css.galleryImageWrapper}>
        <Img className={css.galleryImage} {...image} />
      </div>
      <div className={css.galleryImageOverlay}>
        <ZoomInIcon className={css.galleryImageOverlayIcon} />
        {title && <div className={css.galleryImageOverlayTitle}>{title}</div>}
      </div>
    </div>
  );
}

export default GalleryItem;
