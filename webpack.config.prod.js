import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ silent: true });
const PORT = process.env.PORT || 3000; //eslint-disable-line
const BASE_URL = process.env.BASE_URL || process.env.DEPLOY_URL;

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: [
    './public/style.css',
    './public/style.scss',
    './src/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BASE_URL: JSON.stringify(BASE_URL),
        apiKeyFirebase:
        JSON.stringify(process.env.FIREBASE_API_KEY),
        authDomainFirebase: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        databaseURLFirebase: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        storageBucketFirebase: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        msgSenderIdFirebase: JSON.stringify(process.env.FIREBASE_MSG_SENDER_ID),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('./style.css'),
    new ExtractTextPlugin('./style.scss'),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /s[ac]ss$/,
        loader: ExtractTextPlugin.extract(['sass', 'scss']),
      },
      {
        test: /css$/,
        loader: ExtractTextPlugin.extract('css'),
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        loader: 'url-loader?limit=10000',
      },
    ],
  },
};
