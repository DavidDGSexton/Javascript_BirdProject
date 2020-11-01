const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const animalsRouter = require('./routes/animals');
const settingsRouter = require('./routes/settings');
const feedingsRouter = require('./routes/feedings');
const foodsRouter = require('./routes/foods');
const medicinesRouter = require('./routes/medicines');

var app = express();

 require('dotenv').config({path: __dirname + '/.env'});

 mongoose.connect(process.env['DATABASE'],{ useNewUrlParser: true, useUnifiedTopology: true });

//start content from jkuefler
var passport = require('passport');
var flash = require('connect-flash');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
var session = require('express-session');

require('./config/passport')(passport);
 
app.use(cookieParser()); // read cookies (needed for auth)

// required for passport
app.use(session({
    secret: 'devkey',
    resave: true,
    saveUninitialized: true,
  }));
  
  app.use(passport.initialize());
  app.use(passport.session()); 
  app.use(flash()); 
   
  app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
  });  
//end content from jkuefler






// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/animals', animalsRouter);
app.use('/settings', settingsRouter);
app.use('/feedings', feedingsRouter);
app.use('/foods', foodsRouter);
app.use('/medicines', medicinesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
