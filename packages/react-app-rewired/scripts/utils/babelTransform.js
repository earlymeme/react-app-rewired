// TODO: remove file in major release
const babelJest = require('babel-jest');
const webpack = require('webpack');

const customPlugins = [];
try {
  let decoratorsPluginName = 'babel-plugin-transform-decorators-legacy';
  if (webpack.version >= 4) {
    decoratorsPluginName = '@babel/plugin-proposal-decorators';
  }
  const decoratorsPluginPath = require.resolve(decoratorsPluginName);
  customPlugins.push([decoratorsPluginPath, {legacy: true}]);
  console.log(`⚡ Rewired added ${decoratorsPluginName}`);
} catch (e) {
  //do nothing plugin not found
}

module.exports = babelJest.createTransformer({
  presets: [require.resolve('babel-preset-react-app')],
  plugins: customPlugins,
  babelrc: true
});
