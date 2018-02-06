'use strict';

const path = require( 'path' );
const webpack = require( 'webpack' );

const baseConfig = require( './base' );
const defaultSettings = require( './defaults' );

const config = Object.assign( {}, baseConfig, {
  entry: path.join( __dirname, '../src/input' ),
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.DefinePlugin( { 'process.env.NODE_ENV': '"production"' } ),
    new webpack.optimize.UglifyJsPlugin( {
      // 最紧凑的输出
      beautify: false,

      // 删除所有的注释
      comments: false,
      compress: {
        // 在UglifyJs删除没有用到的代码时不输出警告
        warnings: false,

        // 删除所有的 `console` 语句
        // 还可以兼容ie浏览器
        drop_console: true,

        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,

        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true
      }
    } ),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NoErrorsPlugin()
  ],
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
  use: 'babel-loader',
  include: [].concat(
    additionalPaths,
    [ path.join( __dirname, '/../src' ) ]
  )
} );

module.exports = config;
