import React from 'react';
import { graphql } from 'gatsby';

import { ExcursionBySlugQuery } from 'types/graphql';

type ExcursionTemplateProps = {
  data: ExcursionBySlugQuery;
};

function ExcursionTemplate({ data }: ExcursionTemplateProps) {
  if (!data.markdownRemark) {
    return null;
  }

  const { frontmatter, html } = data.markdownRemark;
  const { title } = frontmatter || {};

  return (
    <div>
      {title && <h1>{title}</h1>}
      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
    </div>
  );
}

export const query = graphql`
  query ExcursionBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        createdAt
        description
        title
      }
    }
  }
`;

export default ExcursionTemplate;
