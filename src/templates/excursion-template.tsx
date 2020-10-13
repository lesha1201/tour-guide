import React from 'react';
import { graphql } from 'gatsby';

import { ExcursionBySlugQuery } from 'types/graphql';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Header from 'components/header';
import Footer from 'components/footer';
import Excursion from 'components/excursion/excursion';

type ExcursionTemplateProps = {
  data: ExcursionBySlugQuery;
};

type ExcursionFrontmatter = NonNullable<
  NonNullable<ExcursionBySlugQuery['mdx']>['frontmatter']
>;

function ExcursionTemplate({ data }: ExcursionTemplateProps) {
  if (!data.mdx) {
    return null;
  }

  const excursionFrontmatter =
    data.mdx.frontmatter || ({} as Partial<ExcursionFrontmatter>);

  return (
    <>
      <SEO
        title={excursionFrontmatter.title}
        description={excursionFrontmatter.description || undefined}
        image={excursionFrontmatter.coverImage?.childImageSharp?.seo?.src}
      />
      <Layout
        header={<Header variant="default" />}
        content={<Excursion excursion={data.mdx} />}
        footer={<Footer />}
      />
    </>
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
        description
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
