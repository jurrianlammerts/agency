module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['/node_modules/**', '/build/**'],
  rules: {
    'no-unused-vars': [
      'warn',
      { args: 'none', argsIgnorePattern: 'req|res|next|val' },
    ],
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
