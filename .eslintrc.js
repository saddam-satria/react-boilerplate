module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-deprecated': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/no-unknown-property': 'warn',
    'react/require-render-return': 'warn',
    'react/jsx-key': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/jsx-curly-brace-presence': 'off',
    'no-console': 'off',
    'no-duplicate-imports': 'warn',
    'no-unused-vars': 'warn',
    'comma-dangle': ['off', 'never'],
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'index',
          'sibling',
          'parent',
          'internal',
        ],
      },
    ],
    'jsx-quotes': ['warn', 'prefer-double'],
    'object-curly-spacing': ['warn', 'always'],
    'import/prefer-default-export': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
