import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { ExcursionsContent_ExcursionsQuery } from 'types/graphql';
import { SectionTitle } from 'components/ui';
import Container from 'components/container';
import Excursions from './excursions';

function ExcursionsContent() {
  const {
    allMdx: { nodes: excursions },
  } = useStaticQuery<ExcursionsContent_ExcursionsQuery>(graphql`
    query ExcursionsContent_Excursions {
      allMdx(sort: { fields: [frontmatter___createdAt], order: [DESC] }) {
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
    <Container variant="page">
      <SectionTitle align="left">Экскурсии</SectionTitle>

      <Excursions excursions={excursions} />
    </Container>
  );
}

export default ExcursionsContent;
