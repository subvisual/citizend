module.exports = {
  extends: ['@untile/stylelint-config-untile', 'stylelint-config-prettier'],
  rules: {
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['$dummyValue']
      }
    ]
  }
};
