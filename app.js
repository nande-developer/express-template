const express = require('express');
const logger = require('morgan');
const path = require('path');
const expressUpload = require('express-fileupload');
const cors = require('cors');

const ErrorMiddleware = require('./middlewares/error');
const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressUpload({
  useTempFiles: true,
  debug: false,
  preserveExtension: true,
  tempFileDir: path.resolve('storage/tmp/files')
}));

app.use('/', indexRouter);
app.use(ErrorMiddleware.handleMiddleware);

module.exports = app;
