/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require( 'path' );
const srcPath = path.join( __dirname, '/../src' );
const dfltPort = 8000;

const webpack = require( 'webpack' );
const LodashModuleReplacementPlugin = require( 'lodash-webpack-plugin' );

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
const getDefaultModules = () => {
  return {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        enforce: 'pre',
        use: [
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.sass/,
        use: [
          {
            loader: 'style-loader',
            options: { outputStyle: 'expanded&indentedSyntax' }
          },
          {
            loader: 'css-loader',
            options: { outputStyle: 'expanded&indentedSyntax' }
          },
          {
            loader: 'sass-loader',
            options: { outputStyle: 'expanded&indentedSyntax' }
          }
        ]
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader',
            options: { outputStyle: 'expanded' }
          },
          {
            loader: 'css-loader',
            options: { outputStyle: 'expanded' }
          },
          {
            loader: 'sass-loader',
            options: { outputStyle: 'expanded' }
          }
        ]
      },
      {
        test: /\.less/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test: /\.styl/,
        use: [ 'style-loader', 'css-loader', 'stylus-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path][name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  };
};

module.exports = {
  srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules,
  plugins: [
    new webpack.LoaderOptionsPlugin( { debug: true } ),
    new LodashModuleReplacementPlugin()
  ]
};
