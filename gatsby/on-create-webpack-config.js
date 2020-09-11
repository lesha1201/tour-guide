const path = require('path');

const postCssPlugins = require('../postcss.config.js');

module.exports = gatsbyOptions => {
  const { actions } = gatsbyOptions;
  const { setWebpackConfig } = actions;

  let configRules = [...getCssRules(gatsbyOptions)];

  setWebpackConfig({
    resolve: {
      alias: {
        scss: path.resolve(__dirname, '../src/assets/scss'),
        static: path.resolve(__dirname, '../static'),
      },
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    },
    module: {
      rules: configRules,
    },
  });
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
      !isSSR && loaders.miniCssExtract({ hmr: false }),
      {
        loader: 'dts-css-modules-loader',
        options: {
          namedExport: false,
          banner: '// This file is generated automatically',
        },
      },
      loaders.css({ modules: true, importLoaders: 2 }),
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
