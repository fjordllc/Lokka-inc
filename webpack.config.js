var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

module.exports = {
  entry: {
    application: './source/javascripts/application.js',
  },

  resolve: {
    root: __dirname + '/source/javascripts',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js',
  },

  node: {
    console: true,
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
