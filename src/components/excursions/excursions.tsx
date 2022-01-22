import React from 'react';
import { Link } from 'gatsby';

import {
  ExcursionCardCoverFragment,
  Mdx,
  MdxFields,
  MdxFrontmatter,
  Maybe,
} from 'types/graphql';
import ExcursionCard from 'components/excursion-card';
import { formatExcursionFrontmatterData } from 'utils/data';
import css from './excursions.module.scss';

export type ExcursionsProps = {
  excursions: Array<
    Pick<Mdx, 'id'> & {
      fields?: Maybe<Pick<MdxFields, 'slug'>>;
      frontmatter?: Maybe<
        Pick<MdxFrontmatter, 'description' | 'duration' | 'price' | 'title'> & {
          coverImage?: Maybe<ExcursionCardCoverFragment>;
        }
      >;
    }
  >;
};

function Excursions({ excursions }: ExcursionsProps) {
  return (
    <div className={css.excursions}>
      <div className={css.excursionsWrapper}>
        {excursions.map(
          ({ id, frontmatter, fields }) =>
            frontmatter &&
            fields?.slug && (
              <Link key={id} to={fields.slug} className={css.excursionCardWrapper}>
                <ExcursionCard {...formatExcursionFrontmatterData(frontmatter)} />
              </Link>
            ),
        )}
      </div>
    </div>
  );
}

export default Excursions;
