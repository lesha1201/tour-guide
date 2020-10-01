import React, { useCallback, useState } from 'react';

import imageOne from 'static/media/image-1.jpg';
import imageTwo from 'static/landing-bg.jpg';
import { ReactComponent as ZoomInIcon } from 'assets/icons/zoom-in.svg';
import Lightbox from 'components/ui/lightbox';
import SectionTitle from 'components/ui/section-title';
import Section, { SectionProps } from './section';
import * as css from './gallery-section.module.scss';

export type GallerySectionProps = Partial<SectionProps>;

const GALLERY = [
  {
    original: imageOne,
    preview: imageOne,
    title: 'Изображение 1',
  },
  {
    original: imageTwo,
    preview: imageTwo,
  },
  {
    original: imageOne,
    preview: imageOne,
  },
  {
    original: imageTwo,
    preview: imageTwo,
  },
  {
    original: imageOne,
    preview: imageOne,
  },
  {
    original: imageTwo,
    preview: imageTwo,
  },
];

const LIGHTBOX_IMAGES = GALLERY.map(({ original, title }) => ({
  src: original,
  title,
}));

function GallerySection(props: GallerySectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);

  const lightboxOnClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <Section {...props}>
      <SectionTitle align="center">Галерея</SectionTitle>
      <div className={css.gallery}>
        {GALLERY.map((image, index) => (
          <div
            key={index}
            className={css.galleryImageBox}
            onClick={() => {
              setIsModalOpen(true);
              setLightboxInitialIndex(index);
            }}
          >
            <div className={css.galleryImageWrapper}>
              <img className={css.galleryImage} src={image.preview} />
              <div className={css.galleryImageOverlay}>
                <ZoomInIcon className={css.galleryImageOverlayIcon} />
                <div className={css.galleryImageOverlayTitle}>Название</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        isOpen={isModalOpen}
        onClose={lightboxOnClose}
        images={LIGHTBOX_IMAGES}
        initialIndex={lightboxInitialIndex}
      />
    </Section>
  );
}

export default GallerySection;
