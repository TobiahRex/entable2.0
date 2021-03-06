import webpack from 'webpack';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ silent: true });

const processENV = {
  NODE_ENV: JSON.stringify('production'),
  DEPLOY_URL: JSON.stringify(process.env.DEPLOY_URL),
  BASE_URL: JSON.stringify(process.env.BASE_URL),
  apiKeyFirebase: JSON.stringify(process.env.FIREBASE_API_KEY),
  authDomainFirebase: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
  databaseURLFirebase: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
  storageBucketFirebase: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
  msgSenderIdFirebase: JSON.stringify(process.env.FIREBASE_MSG_SENDER_ID),
};

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: [
    './tools/assets/animate.351.scss',
    './tools/assets/toastr.213.scss',
    './tools/assets/style.scss',
    './src/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({ 'process.env': processENV }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(jpe?g|png|giff|svg|ico)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]', {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          }],
        exclude: /node_modules/,
        include: __dirname,
      },
    ],
  },
};
