module.exports = {
  extends: ['eslint-config-airbnb', './rules/kps'].map(require.resolve),
  rules: {}
}