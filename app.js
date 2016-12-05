var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./routes/index');
var users = require('./routes/users');
var companies = require('./routes/companies');

var app = express();
var mongoURL = "mongodb://localhost:27017/liconline";

var MongoDB = mongoose.connect(mongoURL).connection;
MongoDB.on('error', function (error) {
  if (error) {
    console.log('Mongodb connection error', error);
  } else {
    console.log('Mongodb connection successful');
  }
});

MongoDB.once('open', function () {
  console.log('Mongodb connection open');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index, users, companies);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use(function(error, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};

  // render the error page
  res.status(error.status || 500);
  res.render('error');
});

var port = process.env.PORT || 80;
	app.listen(port, function() {
	console.log("Listening on " + port);
});

module.exports = app;
