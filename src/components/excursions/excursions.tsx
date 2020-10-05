import React from 'react';
import { Link } from 'gatsby';

import {
  ExcursionCardCoverFragment,
  MarkdownRemark,
  MarkdownRemarkFields,
  MarkdownRemarkFrontmatter,
  Maybe,
} from 'types/graphql';
import ExcursionCard from 'components/excursion-card';
import { formatExcursionFrontmatterData } from 'utils/data';
import * as css from './excursions.module.scss';

export type ExcursionsProps = {
  excursions: Array<
    Pick<MarkdownRemark, 'id'> & {
      fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>;
      frontmatter?: Maybe<
        Pick<
          MarkdownRemarkFrontmatter,
          'description' | 'duration' | 'price' | 'title'
        > & {
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
