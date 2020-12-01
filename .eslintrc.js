module.exports = {
  root: true,
  extends: ['eslint-config-fespsp'],
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['*.js'],
      extends: [require.resolve('eslint-config-fespsp/rules/react')],
    },
  ],
  rules: {
    'no-console': 1,
    '@typescript-eslint/no-empty-function': 0,
  },
};
