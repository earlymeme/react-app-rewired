const { injectBabelPlugin } = require('react-app-rewired-comp');

/* config-overrides.js */
module.exports = function override(config, env) {
  console.trace();
  console.log(config)
  config = injectBabelPlugin(['@babel/plugin-proposal-decorators', {
    legacy: true
  }], config);
  return config;
}
