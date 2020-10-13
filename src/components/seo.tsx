import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  isArticle?: boolean;
  hasTitleTemplate?: boolean;
};

function SEO({ title, description, image, isArticle, hasTitleTemplate }: SEOProps) {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl: url
          defaultImage: image
        }
      }
    }
  `);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={hasTitleTemplate ? titleTemplate : undefined}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isArticle ? 'article' : 'website'} />
      <meta property="og:url" content={seo.url} />
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      <link rel="canonical" href={seo.url} />
    </Helmet>
  );
}

SEO.defaultProps = {
  hasTitleTemplate: true,
};

export default SEO;
