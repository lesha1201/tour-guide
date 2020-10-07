import React from 'react';
import { graphql, Link as RouterLink, useStaticQuery } from 'gatsby';

import { formatExcursionFrontmatterData } from 'utils/data';
import { ExcursionsSection_ExcursionsQuery } from 'types/graphql';
import { PATH } from 'constants/routes';
import { Button, SectionTitle } from 'components/ui';
import ExcursionCard from 'components/excursion-card';
import Section, { SectionProps } from './section';
import * as css from './excursions-section.module.scss';

export type ExcursionsSectionProps = Partial<SectionProps>;

function ExcursionsSection(props: ExcursionsSectionProps) {
  const {
    allMdx: { nodes: excursions },
  } = useStaticQuery<ExcursionsSection_ExcursionsQuery>(graphql`
    query ExcursionsSection_Excursions {
      allMdx(limit: 6, sort: { fields: [frontmatter___createdAt], order: [DESC] }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            coverImage {
              ...ExcursionCardCover
            }
            description
            duration
            price
            title
          }
        }
      }
    }
  `);

  return (
    <Section {...props}>
      <SectionTitle align="center">Экскурсии</SectionTitle>

      <div className={css.excursions}>
        <div className={css.excursionsWrapper}>
          {excursions.map(
            ({ id, frontmatter, fields }) =>
              frontmatter &&
              fields?.slug && (
                <RouterLink
                  key={id}
                  to={fields.slug}
                  className={css.excursionCardWrapper}
                >
                  <ExcursionCard {...formatExcursionFrontmatterData(frontmatter)} />
                </RouterLink>
              ),
          )}
        </div>
      </div>

      <Button
        as={RouterLink}
        to={PATH.excursions}
        className={css.button}
        size="lg"
        isRounded
      >
        Смотреть все
      </Button>
    </Section>
  );
}

export default ExcursionsSection;
