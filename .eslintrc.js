module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: 0,
    'quote-props': 0,
    'no-restricted-syntax': 0,
    'no-mixed-operators': 0,
  },
  parserOptions: {
    parser: 'typescript-eslint-parser',
  },
}
