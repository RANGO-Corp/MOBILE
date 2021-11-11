module.exports = {
  env: {
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react-native', 'react'],
  rules: {
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
  },
};
