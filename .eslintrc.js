module.exports = {
  root: true,
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'import/no-unresolved': 'off',
        semi: ['error', 'never'],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'react/jsx-indent-props': ['error', 4],

        'import/extensions': 0,

        // React hooks config
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',

        // To enable only typescript variant
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // React native uses require to load assets
        'global-require': 'off',

        // A lot of files export only one const
        'import/prefer-default-export': 'off',

        // Typescript reports this anyways
        'no-undef': 'off',
      },
    },
  ],
};
