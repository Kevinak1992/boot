'use strict';

const path = require( 'path' );
const webpack = require( 'webpack' );
const baseConfig = require( './base' );
const defaultSettings = require( './defaults' );

const config = Object.assign( {}, baseConfig, {
  entry: [
    `webpack-dev-server/client?http://0.0.0.0:${ defaultSettings.port }`,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ].concat( defaultSettings.plugins ),
  module: defaultSettings.getDefaultModules()
} );

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
const additionalPaths = [];

// Add needed loaders to the defaults here
config.module.rules.push( {
  test: /\.(js|jsx)$/,
  use: [ 'react-hot-loader/webpack', 'babel-loader' ],
  include: [].concat(
    additionalPaths,
    [ path.join( __dirname, '/../src' ) ]
  )
} );

/**
 * 只显示错误信息
 * */
config.devServer.stats = 'errors-only';

module.exports = config;
