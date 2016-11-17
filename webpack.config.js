const webpack = require('webpack');
const path = require('path');
require('dotenv').config({ silent: true });

const PORT = process.env.PORT || 3000;
const URL = process.env.DEPLOY_URL || '';
process.env.BASE_URL = URL || `http://localhost:${PORT}/`;

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BASE_URL: JSON.stringify(process.env.BASE_URL),
        authDomain: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        databaseURL: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        storageBucket: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        msgSenderId: JSON.stringify(process.env.FIREBASE_MSG_SENDER_ID),
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
    ],
  },
};
