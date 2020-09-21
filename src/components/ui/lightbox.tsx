import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import Modal from 'react-modal';
import { useKeenSlider } from 'keen-slider/react';

import { CLASS_NAMES as KEEN_SLIDER_CN } from 'constants/keen-slider';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { ReactComponent as ChevronLeft } from 'assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg';
import * as css from './lightbox.module.scss';

export type LightboxImage = {
  src: string;
  title?: string;
};

export type LightboxProps = {
  onClose: () => void;
  isOpen: boolean;
  initialIndex: number;
  images: LightboxImage[];
};

type SliderProps = Pick<LightboxProps, 'images' | 'initialIndex' | 'onClose'>;

// -- Slider

function updateLoadedImages(loadedImages: boolean[], currentIndex: number) {
  return loadedImages.map((isLoaded, index) => {
    const distance = Math.abs(currentIndex - index);

    return distance <= 1 ? true : isLoaded;
  });
}

function Slider({ images, initialIndex, onClose }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const [loadedImages, setLoadedImages] = useState<boolean[]>(() =>
    updateLoadedImages(
      images.map(() => false),
      currentIndex,
    ),
  );

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: initialIndex,
    slideChanged: slide => {
      const details = slide.details();
      const newIndex = details.absoluteSlide;

      setCurrentIndex(newIndex);

      setLoadedImages(currentLoadedImages =>
        updateLoadedImages(currentLoadedImages, newIndex),
      );
    },
  });

  const onClickBack = useCallback(() => {
    slider.prev();
  }, [slider]);

  const onClickNext = useCallback(() => {
    slider.next();
  }, [slider]);

  const currentNumber = currentIndex + 1;
  const currentImage = images[currentIndex] as LightboxImage | undefined;
  const imagesCount = images.length;

  const hasPreviousSlides = imagesCount > 0 && currentIndex > 0;
  const hasNextSlides = imagesCount > 0 && currentIndex < imagesCount - 1;

  return (
    <div className={css.lightbox}>
      <div className={css.lightboxBar}>
        <div className={css.lightboxCounter}>
          {currentNumber} / {imagesCount}
        </div>

        <div className={css.lightboxToolbar}>
          <button className={css.lightboxButton} onClick={onClose} title="Закрыть">
            <CloseIcon width="1em" />
          </button>
        </div>
      </div>

      <div className={css.lightboxSliderWrapper}>
        {hasPreviousSlides && (
          <button
            className={css.lightboxBackButton}
            onClick={onClickBack}
            title="Предыдущий"
          >
            <ChevronLeft width="1em" />
          </button>
        )}
        <div ref={sliderRef} className={clsx(KEEN_SLIDER_CN.slider, css.lightboxSlider)}>
          {images.map((img, index) => (
            <div key={index} className={KEEN_SLIDER_CN.slide}>
              <div className={css.lightboxLoader}>Loading...</div>
              <img
                className={css.lightboxImage}
                src={loadedImages[index] ? img.src : ''}
              />
            </div>
          ))}
        </div>
        {hasNextSlides && (
          <button
            className={css.lightboxNextButton}
            onClick={onClickNext}
            title="Следующий"
          >
            <ChevronRight width="1em" />
          </button>
        )}
      </div>

      <div className={css.lightboxBar}>
        <div className={css.lightboxImageTitle}>{currentImage?.title}</div>
      </div>
    </div>
  );
}

// -- Lightbox

const LIGHTBOX_CN = {
  base: css.modalBase,
  afterOpen: '',
  beforeClose: '',
};

function Lightbox({ isOpen, onClose, ...sliderProps }: LightboxProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={LIGHTBOX_CN}
      shouldCloseOnEsc
    >
      <Slider onClose={onClose} {...sliderProps} />
    </Modal>
  );
}

export default Lightbox;
