import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import { formatExcursionFrontmatterData } from 'utils/data';
import { ExcursionsSection_ExcursionsQuery } from 'types/graphql';
import { Button, SectionTitle } from 'components/ui';
import ExcursionCard from 'components/excursion-card';
import Section, { SectionProps } from './section';
import * as css from './excursions-section.module.scss';

export type ExcursionsSectionProps = Partial<SectionProps>;

function ExcursionsSection(props: ExcursionsSectionProps) {
  const {
    allMarkdownRemark: { nodes: excursions },
  } = useStaticQuery<ExcursionsSection_ExcursionsQuery>(graphql`
    query ExcursionsSection_Excursions {
      allMarkdownRemark(limit: 6) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            coverImage {
              childImageSharp {
                fluid(
                  maxWidth: 460
                  maxHeight: 260
                  cropFocus: CENTER
                  sizes: "(min-width: 92.5em) 462px, (min-width: 56.25em) 30vw, 220px"
                  srcSetBreakpoints: [340, 690, 920, 1380]
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
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
                <Link key={id} to={fields.slug} className={css.excursionCardWrapper}>
                  <ExcursionCard {...formatExcursionFrontmatterData(frontmatter)} />
                </Link>
              ),
          )}
        </div>
      </div>
      <Button className={css.button} size="lg" isRounded>
        Смотреть все
      </Button>
    </Section>
  );
}

export default ExcursionsSection;
