var webpack = require('webpack');
var path = require('path');
var clean = require('clean-webpack-plugin');

module.exports = {
  entry: {
    application: './source/javascripts/application.js'
  },

  resolve: {
    root: path.join(__dirname, 'source/javascripts'),
    modulesDirectories: [
      path.join(__dirname, "node_modules"),
      path.join(__dirname, "source/stylesheets")
    ],
    extensions: ['', '.js', '.sass']
  },

  output: {
    path: path.join(__dirname, '.tmp/dist'),
    filename: 'javascripts/[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test   : /\.sass$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
      {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png"
      }
    ]
  },

  sassLoader: {
    includePaths: [path.join(__dirname, "node_modules")]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether"
    })
  ],
};
