import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { ExcursionsContent_ExcursionsQuery } from 'types/graphql';
import { SectionTitle } from 'components/ui';
import Container from 'components/container';
import Excursions from './excursions';
import * as css from './content.module.scss';

function ExcursionsContent() {
  const {
    allMarkdownRemark: { nodes: excursions },
  } = useStaticQuery<ExcursionsContent_ExcursionsQuery>(graphql`
    query ExcursionsContent_Excursions {
      allMarkdownRemark(sort: { fields: [frontmatter___createdAt], order: [DESC] }) {
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
    <Container className={css.container}>
      <SectionTitle align="left">Экскурсии</SectionTitle>

      <Excursions excursions={excursions} />
    </Container>
  );
}

export default ExcursionsContent;
