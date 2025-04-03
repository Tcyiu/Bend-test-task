module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['**/*.scss'],
    },
  ],
  rules: {
    indentation: 2,
    'string-quotes': 'single',
    'color-hex-length': 'short',
    'no-empty-source': null,
    'selector-class-pattern': '^[a-z][a-z0-9-_]+$',
  },
};
