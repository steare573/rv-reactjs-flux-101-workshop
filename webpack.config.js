"use strict";

/**
 * Reference:
 * http://webpack.github.io/docs/configuration.html
 **/

module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: 'react-demo.js',
    path: 'dist/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?indertPragma=React.DOM&harmony'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true
  },
  progress: true,
  failOnError: false,
  watch: true,
  keepalive: true
};