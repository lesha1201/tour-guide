const path = require('path');
const _ = require('lodash');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMdx;

  _.each(edges, edge => {
    const nodeTemplate = _.get(edge, 'node.frontmatter.template');

    if (nodeTemplate === 'excursion') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/excursion-template.tsx'),
        context: { slug: edge.node.fields.slug },
      });
    }
  });
};

module.exports = createPages;
