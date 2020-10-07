import React, { useCallback, useMemo, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {
  GallerySection_GalleryQuery,
  GatsbyImageSharpFluid_WithWebpFragment,
} from 'types/graphql';
import GalleryItem, { GalleryItemProps } from 'components/gallery-item';
import { Lightbox, SectionTitle } from 'components/ui';
import Section, { SectionProps } from './section';
import * as css from './gallery-section.module.scss';

export type GallerySectionProps = Partial<SectionProps>;

type GalleryFluidImage = GatsbyImageSharpFluid_WithWebpFragment;

type GalleryOriginalImage = { src: string };

type GalleryImage = {
  title?: string;
  image: {
    childImageSharp: {
      fluid: GalleryFluidImage;
      original: GalleryOriginalImage;
    };
  };
};

type FilteredGallery = GalleryImage[];

function filterGallery(gallery: GallerySection_GalleryQuery['allGalleryYaml']['nodes']) {
  return gallery.filter(
    ({ image }) => image?.childImageSharp?.fluid && image.childImageSharp.original?.src,
  ) as FilteredGallery;
}

function convertToLightboxImages(gallery: FilteredGallery) {
  return gallery.map(({ image, title }) => ({
    title,
    src: image.childImageSharp.original.src,
  }));
}

function GallerySection(props: GallerySectionProps) {
  const {
    allGalleryYaml: { nodes: gallery },
  } = useStaticQuery<GallerySection_GalleryQuery>(graphql`
    query GallerySection_Gallery {
      allGalleryYaml(limit: 6) {
        nodes {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 478) {
                ...GatsbyImageSharpFluid_withWebp
              }
              original {
                src
              }
            }
          }
        }
      }
    }
  `);

  const filteredGallery = useMemo(() => filterGallery(gallery), [gallery]);

  const lightboxImages = useMemo(() => convertToLightboxImages(filteredGallery), [
    filteredGallery,
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);

  const lightboxOnClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <Section {...props}>
      <SectionTitle align="center">Галерея</SectionTitle>
      <div className={css.gallery}>
        {filteredGallery.map(({ title, image }, index) => (
          <div
            key={index}
            className={css.galleryImageBox}
            onClick={() => {
              setIsModalOpen(true);
              setLightboxInitialIndex(index);
            }}
          >
            <GalleryItem
              image={image.childImageSharp as GalleryItemProps['image']}
              title={title}
            />
          </div>
        ))}
      </div>

      <Lightbox
        isOpen={isModalOpen}
        onClose={lightboxOnClose}
        images={lightboxImages}
        initialIndex={lightboxInitialIndex}
      />
    </Section>
  );
}

export default GallerySection;
