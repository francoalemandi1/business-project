module.exports = {
  extends: ['next/core-web-vitals', 'airbnb', 'airbnb-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
  },
};
