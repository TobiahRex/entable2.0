// PACKAGE REQUIRES
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import path from 'path';
import mongoose from 'mongoose';
import api from '../server/api/index';

// CONSTANTS
const PORT = process.env.PORT || 3000;
const app = express();
const server = http.Server(app); //eslint-disable-line
const io = require('socket.io')(server);

// CONFIGS
mongoose.Promise = Promise;
dotenv.config({ silent: true });
let socketEmitter;
io.on('connection', (socket) => {
  process.stdout.write('\n>>> Socket Connection!\n');
  socketEmitter = (type, data) => socket.emit(type, data);
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  const resRef = res;
  resRef.socketEmitter = socketEmitter;
  next();
});
app.use((req, res, next) => {
  const resRef = res;
  resRef.handle = (err, data) =>
    resRef.status(err ? 400 : 200).send(err || data);
  next();
});
app.use((req, res, next) => {
  const resRef = res;
  resRef.twiml = (err, twiml) =>
  res.status(err ? 400 : 200).set('Content-Type', 'text/xml').send(err || twiml);
  next();
});
app.use('/api', api);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));


server.listen(PORT, err =>
  process.stdout.write(err || `==> 📡  Server @ ${PORT}
`));
const MONGO = process.env.MONGODB_URI || 'mongodb://localhost/entable';
mongoose.connect(MONGO, err => process.stdout.write(err || `==> 📜  MONGO @ ${MONGO}
`));
