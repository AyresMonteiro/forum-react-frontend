module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    module: true,
  },
  extends: ['plugin:prettier/recommended'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'error',
  },
};
