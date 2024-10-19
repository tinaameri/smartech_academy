module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['mantine', 'plugin:@next/next/recommended', 'plugin:jest/recommended', 'prettier'],
  plugins: ['testing-library', 'jest', 'react', 'prettier'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react','plugin:prettier/recommended'],
    },
  ],
  parserOptions: {
    project: './jsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 'off',
    '@next/next/no-img-element': 'off',
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto'
      }
    ]
  },
};
