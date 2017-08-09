import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default [
  {
    context: path.join(__dirname, './themes/fjord-2017/assets/javascripts'),
    entry: {
      application: './application.js'
    },
    output: {
      path: path.join(__dirname, './themes/fjord-2017/static/assets'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$|\.tag$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.tag']
    },
  },
  {
    context: path.join(__dirname, './themes/fjord-2017/assets/stylesheets/'),
    entry: {
      application: './application.sass'
    },
    output: {
      path: path.join(__dirname, './themes/fjord-2017/static/assets'),
      filename: '[name].css'
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.sass$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  url: false,
                  minimize: process.env.HUGO_ENV != "production",
                  sourceMap: process.env.HUGO_ENV != "production"
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: process.env.HUGO_ENV != "production"
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: '[name].css'
      })
    ]
  }
];
