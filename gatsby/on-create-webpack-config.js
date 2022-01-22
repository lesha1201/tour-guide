const path = require('path');
const { mergeWithCustomize, customizeArray } = require('webpack-merge');

const postCssPlugins = require('../postcss.config.js');

module.exports = gatsbyOptions => {
  const { actions } = gatsbyOptions;
  const { replaceWebpackConfig } = actions;

  const config = gatsbyOptions.getConfig();

  const customConfig = {
    resolve: {
      alias: {
        scss: path.resolve(__dirname, '../src/assets/scss'),
      },
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    },
    module: {
      rules: [...getCssRules(gatsbyOptions), ...getSVGRules(gatsbyOptions)],
    },
  };

  const finalConfig = mergeWithCustomize({
    customizeArray: customizeArray({
      'module.rules.*': 'prepend',
    }),
  })(config, customConfig);

  replaceWebpackConfig(finalConfig);
};

/**
 * Webpack CSS rules
 * @param {object} gatsbyOptions
 */
function getCssRules({ stage, loaders }) {
  const PRODUCTION = stage !== 'develop';
  const isSSR = stage.includes('html');

  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: !PRODUCTION,
      sassOptions: {
        includePaths: [path.resolve(__dirname, '../src/assets/scss')],
      },
    },
  };

  const sassRule = {
    test: /\.s(a|c)ss$/,
    use: isSSR
      ? [loaders.null()]
      : [
          loaders.miniCssExtract(),
          loaders.css({ importLoaders: 2 }),
          loaders.postcss({ plugins: postCssPlugins }),
          sassLoader,
        ],
  };

  const sassRuleModules = {
    test: /\.module\.s(a|c)ss$/,
    use: [
      !isSSR && loaders.miniCssExtract(),
      loaders.css({ modules: { namedExport: false }, importLoaders: 2 }),
      loaders.postcss({ plugins: postCssPlugins }),
      sassLoader,
    ].filter(Boolean),
  };

  let configRules = [];

  switch (stage) {
    case 'develop':
    case 'build-javascript':
    case 'build-html':
    case 'develop-html': {
      configRules = [
        ...configRules,
        {
          oneOf: [sassRuleModules, sassRule],
        },
      ];

      break;
    }
  }

  return configRules;
}

/**
 * Webpack SVG rules
 * @param {object} gatsbyOptions
 */
function getSVGRules({ stage, loaders }) {
  const svgRule = {
    test: /\.svg$/,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack', loaders.url()],
  };

  let configRules = [];

  switch (stage) {
    case 'develop':
    case 'build-javascript':
    case 'build-html':
    case 'develop-html': {
      configRules = [...configRules, svgRule];

      break;
    }
  }

  return configRules;
}
