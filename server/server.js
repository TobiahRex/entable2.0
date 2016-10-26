// PACKAGE REQUIRES
import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import path from 'path';
import mongoose from 'mongoose';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import api from './api/index';


// CONSTANTS
const PORT = process.env.PORT || 8000;
const app = express();
const server = http.Server(app); //eslint-disable-line
const io = require('socket.io')(server);

mongoose.Promise = Promise;
let socketEmitter;
io.on('connection', (socket) => {
  process.stdout.write('\n>>> Socket Connection!\n');
  socketEmitter = (type, data) => socket.emit(type, data);
});

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
app.use('/api', api);
app.get('*', (req, res) => res.sendFile(path.resolve('./build/index.html')));


server.listen(PORT, err =>
  process.stdout.write(err || `==> 📡  Server @: ${PORT}
`));
const MONGO = process.env.MONGODB_URI || 'mongodb://localhost/entable';
mongoose.connect(MONGO, err => process.stdout.write(err ||
`==> 📜  MONGO @: ${MONGO}`));
