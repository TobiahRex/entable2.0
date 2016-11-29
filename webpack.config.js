const webpack = require('webpack');
const path = require('path');
require('dotenv').config({ silent: true });

const PORT = process.env.PORT || 3000;  //eslint-disable-line
const BASE_URL = process.env.BASE_URL || process.env.DEPLOY_URL;

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './public/style.css',
    './public/style.scss',
    './src/index.js',
  ],
  output: {
    path: path.resolve('public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(), // Optimizes the order that our files are bundles in for optimal minification.
    new webpack.DefinePlugin({
      'process.env': {
        BASE_URL: JSON.stringify(BASE_URL),
        apiKeyFirebase:
        JSON.stringify(process.env.FIREBASE_API_KEY),
        authDomainFirebase: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        databaseURLFirebase: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        storageBucketFirebase: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        msgSenderIdFirebase: JSON.stringify(process.env.FIREBASE_MSG_SENDER_ID),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /[sc]ss$/,
        loaders: ['style', 'css', 'sass', 'postcss-loader'],
      },
    ],
  },
};
