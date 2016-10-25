// CONSTANTS
const PORT = process.env.PORT || 8000;

// PACKAGE REQUIRES
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
// require('dotenv').config();
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

// CONFIG MONGOOSE
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const MONGO_URI = 'mongodb://cat:hellokitty123@ds061246.mlab.com:61246/entable';

mongoose.connect(MONGO_URI, (err) => {
  console.log(err || `Mongo connected to ${MONGO_URI}`);
});

// APP DECLARATION
const app = express();
// const server = http.createServer(app);
var server = require('http').Server(app);
var io = require('socket.io')(server);


//WEBPACK CONFIG
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
 noInfo: true,
 publicPath: webpackConfig.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));

// SOCKETIO
var socketEmitter;
io.on('connection', (socket) => {
  console.log('SOCKET ON');
  socketEmitter = (type, data) => socket.emit(type, data);
});

app.use((req, res, next) => {
  res.socketEmitter = socketEmitter;
  next();
});

// GENERAL MIDDLEWARE
app.use(express.static('build'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.handle = (err, data) => res.status( err ? 400 : 200).send(err || data);
  next();
});

// ROUTES
app.use('/api', require('./routes/api'));

app.get('*', (req, res) => {
  var filepath = path.resolve('./build/index.html');
  res.sendFile(filepath);
});

// SERVER LISTEN
server.listen(PORT, (err) => {
 if (err) throw err;
 process.stdout.write(`Server listening at http://localhost:${PORT}`);
});
