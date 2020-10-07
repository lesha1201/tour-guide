import React from 'react';
import { graphql } from 'gatsby';

import { ExcursionBySlugQuery } from 'types/graphql';
import Layout from 'components/layout';
import Header from 'components/header';
import Footer from 'components/footer';
import Excursion from 'components/excursion/excursion';

type ExcursionTemplateProps = {
  data: ExcursionBySlugQuery;
};

function ExcursionTemplate({ data }: ExcursionTemplateProps) {
  if (!data.mdx) {
    return null;
  }

  return (
    <Layout
      header={<Header variant="default" />}
      content={<Excursion excursion={data.mdx} />}
      footer={<Footer />}
    />
  );
}

export const query = graphql`
  query ExcursionBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        duration
        price
        coverImage {
          ...ExcursionCover
        }
        gallery {
          ...ExcursionGalleryImage
        }
      }
    }
  }
`;

export default ExcursionTemplate;
