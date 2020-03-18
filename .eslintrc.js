module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    describe: 'readonly',
    beforeEach: 'readonly',
    it: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'lines-between-class-members': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'max-len': 0,
    'no-console': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'quotes': [1, 'double'],
    'array-callback-return': 0,
    'class-methods-use-this': 0,
  },
};
