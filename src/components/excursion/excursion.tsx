import React, { useMemo } from 'react';

import {
  ExcursionCoverFragment,
  ExcursionGalleryImageFragment,
  Mdx,
  MdxFrontmatter,
  Maybe,
} from 'types/graphql';
import Container from 'components/container';
import { formatExcursionFrontmatterData } from 'utils/data';
import ExcursionCover from './excursion-cover';
import ExcursionContent from './excursion-content';
import ExcursionGallery from './excursion-gallery';
import css from './excursion.module.scss';

export type ExcursionProps = {
  excursion: Pick<Mdx, 'body'> & {
    frontmatter?: Maybe<
      Pick<MdxFrontmatter, 'duration' | 'price' | 'title'> & {
        coverImage?: Maybe<ExcursionCoverFragment>;
        gallery?: Maybe<Array<Maybe<ExcursionGalleryImageFragment> | undefined>>;
      }
    >;
  };
};

function Excursion({ excursion }: ExcursionProps) {
  const { body, frontmatter } = excursion;

  const excursionData = useMemo(
    () => formatExcursionFrontmatterData(frontmatter),
    [frontmatter],
  );

  return (
    <Container variant="page">
      <ExcursionCover title={excursionData.title} coverImage={excursionData.coverImage} />

      <div className={css.grid}>
        <div className={css.gridItem}>
          <ExcursionContent
            duration={excursionData.duration}
            price={excursionData.price}
            body={body}
          />
        </div>

        <div className={css.gridItem}>
          <ExcursionGallery images={excursionData.gallery} />
        </div>
      </div>
    </Container>
  );
}

export default Excursion;
