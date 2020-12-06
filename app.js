const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const animalsRouter = require('./routes/animals');
const feedingsRouter = require('./routes/feedings');
const foodsRouter = require('./routes/foods');
const medicinesRouter = require('./routes/medicines');
const accountRouter = require('./routes/accounts')
const settingsRouter = require('./routes/settings')

var app = express();
require('./config/passport')(passport);

 require('dotenv').config({path: __dirname + '/.env'});

 mongoose.connect(process.env['DATABASE'],{ useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
 
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
app.use('/feedings', feedingsRouter);
app.use('/foods', foodsRouter);
app.use('/medicines', medicinesRouter);
app.use('/account', accountRouter);
app.use('/settings', settingsRouter);

// catch 404 and render not found page
app.use(function(req, res, next) {
  res.render('not-found');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
