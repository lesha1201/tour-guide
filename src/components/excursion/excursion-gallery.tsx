import React, { useCallback, useMemo, useState } from 'react';

import { ExcursionGalleryImageFragment, Maybe } from 'types/graphql';
import { Lightbox } from 'components/ui';
import GalleryItem, { GalleryItemProps } from 'components/gallery-item';
import * as css from './excursion-gallery.module.scss';

export type ExcursionGalleryProps = {
  images: Maybe<Array<Maybe<ExcursionGalleryImageFragment['childImageSharp']>>>;
};

type ExcursionGalleryImageFluid = NonNullable<
  NonNullable<ExcursionGalleryImageFragment['childImageSharp']>['fluid']
>;

type ExcursionGalleryImageOriginal = NonNullable<
  NonNullable<ExcursionGalleryImageFragment['childImageSharp']>['original']
>;

type FilteredImages = Array<{
  fluid: ExcursionGalleryImageFluid;
  original: ExcursionGalleryImageOriginal & { src: string };
}>;

function filterImages(images: ExcursionGalleryProps['images']) {
  return (images?.filter(image => image?.fluid && image.original?.src) ||
    []) as FilteredImages;
}

function convertToLightboxImages(images: FilteredImages) {
  return images.map(image => ({ src: image.original.src }));
}

function ExcursionGallery({ images }: ExcursionGalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);

  const lightboxOnClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const filteredImages = useMemo(() => filterImages(images), [images]);

  const lightboxImage = useMemo(() => convertToLightboxImages(filteredImages), [
    filteredImages,
  ]);

  return (
    <>
      <div className={css.gallery}>
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className={css.galleryImageBox}
            onClick={() => {
              setIsModalOpen(true);
              setLightboxInitialIndex(index);
            }}
          >
            <GalleryItem image={image as GalleryItemProps['image']} />
          </div>
        ))}
      </div>

      <Lightbox
        isOpen={isModalOpen}
        onClose={lightboxOnClose}
        images={lightboxImage}
        initialIndex={lightboxInitialIndex}
      />
    </>
  );
}

export default ExcursionGallery;
