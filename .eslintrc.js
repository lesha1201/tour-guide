const path = require('path');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['unicorn'],
  rules: {
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'no-unused-vars': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/dynamic-import-chunkname': 'error',
    'import/no-unresolved': 'off',
    'unicorn/better-regex': 'error',
    'unicorn/error-message': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/import-index': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-console-spaces': 'warn',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-dataset': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-number-properties': 'error',
    'react/prop-types': 'off',
    'react/display-name': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: [path.resolve(__dirname, './src'), 'node_modules'],
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
          },
        },
      },
    },
  },
  overrides: [
    // Typescript
    {
      files: ['*.{ts,tsx}'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
      ],
      rules: {
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: false },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-ignore': 'allow-with-description',
          },
        ],
      },
    },
    // NodeJS files
    {
      files: ['./*.js', 'jest/*.js', 'gatsby/*.js'],
      excludedFiles: ['./gatsby-browser.js'],
      env: {
        browser: false,
      },
    },
    // Unit tests (Jest)
    {
      files: ['src/**/*.test.{ts,js,tsx,jsx}', 'jest/**/*'],
      env: {
        jest: true,
      },
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
    },
  ],
};
