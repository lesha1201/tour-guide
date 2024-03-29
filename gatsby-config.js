require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

const siteConfig = require('./config.js');

module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: siteConfig.metadata,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, 'src', 'assets', 'images'),
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, 'content'),
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, 'data'),
        name: 'data',
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              withWebp: true,
              ignoreFileExtensions: [],
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links',
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.metadata.title,
        short_name: siteConfig.metadata.title,
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#F7A046',
        display: 'standalone',
        icon: 'src/assets/images/profile-photo.jpg',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
    'gatsby-plugin-typescript',
  ],
};
