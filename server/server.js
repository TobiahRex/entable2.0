// CONSTANTS
const PORT = process.env.PORT || 8000;

// PACKAGE REQUIRES
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const mongoose = require('mongoose');
const api = require('./routes/api');

// Server & Sockets
const app = express();
const server = require('http').Server(app); //eslint-disable-line
const io = require('socket.io')(server);

mongoose.Promise = Promise;
let socketEmitter;
io.on('connection', (socket) => {
  process.stdout.write('\n>>> Socket Connection!\n');
  socketEmitter = (type, data) => socket.emit(type, data);
});

// Webpack Config
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));
app.use((req, res, next) => {
  const resRef = res;
  resRef.socketEmitter = socketEmitter;
  next();
});

// GENERAL MIDDLEWARE
app.use(express.static('build'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  const resRef = res;
  resRef.handle = (err, data) =>
    resRef.status(err ? 400 : 200).send(err || data);
  next();
});

// ROUTES
app.use('/api', api);
app.get('*', (req, res) => res.sendFile(path.resolve('./build/index.html')));

// Listeners
server.listen(PORT, err =>
  process.stdout.write(err || `==> 📡  Server @: ${PORT}
`));
const MONGO = process.env.MONGODB_URI || 'mongodb://localhost/entable';
mongoose.connect(MONGO, err => process.stdout.write(err ||
`==> 📜  MONGO @: ${MONGO}`));
