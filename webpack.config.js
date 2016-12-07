import webpack from 'webpack';
import path from 'path';
import dotenv from 'dotenv';
import autoprefixer from 'autoprefixer';

dotenv.config({ silent: true });

const processENV = {
  NODE_ENV: JSON.stringify('development'),
  PORT: JSON.stringify(process.env.PORT),
  BASE_URL: JSON.stringify(process.env.BASE_URL),
  apiKeyFirebase: JSON.stringify(process.env.FIREBASE_API_KEY),
  authDomainFirebase: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
  databaseURLFirebase: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
  storageBucketFirebase: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
  msgSenderIdFirebase: JSON.stringify(process.env.FIREBASE_MSG_SENDER_ID),
};

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './tools/assets/animate.351.scss',
    './tools/assets/toastr.213.scss',
    './tools/assets/style.scss',
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
    new webpack.DefinePlugin({ 'process.env': processENV }),
    new webpack.LoaderOptionsPlugin({
      options: { postcss: [autoprefixer({ browsers: ['last 2 version'] })] },
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
        test: /.s[ac]ss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(jpe?g|png|giff|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
};
