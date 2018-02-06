'use strict';
const path = require( 'path' );
const defaultSettings = require( './defaults' );

module.exports = {
  devtool: 'eval',
  output: {
    path: path.join( __dirname, '/../dist/assets' ),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false,
    disableHostCheck: true
  },
  resolve: {
    mainFields: [ 'jsnext:main', 'main' ],
    extensions: [ '.js', '.jsx' ],
    alias: {
      actions: `${ defaultSettings.srcPath }/actions/`,
      assets: `${ defaultSettings.srcPath }/assets/`,
      components: `${ defaultSettings.srcPath }/components/`,
      sources: `${ defaultSettings.srcPath }/sources/`,
      stores: `${ defaultSettings.srcPath }/stores/`,
      styles: `${ defaultSettings.srcPath }/styles/`,
      config: `${ defaultSettings.srcPath }/config/${ process.env.REACT_WEBPACK_ENV }`,
      moment$: 'moment/moment.js',
      'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    }
  },
  module: {}
};
