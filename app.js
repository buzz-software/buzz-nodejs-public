var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');

// Routes
var base = require('./routes/base');
var onboard = require('./routes/onboard');
var user = require('./routes/user');
var company = require('./routes/company');

// Passport stuff
var session = require('express-session');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var models = require ('./models');
var session = require('express-session');

// Tha app!
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views/pug'));
app.set('view engine', 'pug');
app.set('view options', { pretty: true }); 
app.locals.pretty = true;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// more passport stuff
passport.use(new LocalStrategy(
  function(username, password, done) {
    models.User.findOne({
      where: {
        'username': username
      }
    }).then(function (user) {

      if (user == null) {
        return done(null, false, { message: 'Incorrect credentials.' })
      }
      
      var hashedPassword = bcrypt.hashSync(password, user.salt)
      
      if (user.password === hashedPassword) {
        return done(null, user)
      }
      
      return done(null, false, { message: 'Incorrect credentials.' })
    })
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id)
});

passport.deserializeUser(function(id, done) {
  models.User.findOne({
    where: {
      'id': id
    }
  }).then(function (user) {
    if (user == null) {
      done(new Error('Wrong user id.'))
    }
    
    done(null, user)
  })
});


// These 3 has to be declared in this order or 
// your sessions will fail and you won't know why! :)
app.use(session({ secret: 'bir sana bir tane bana' }));
app.use(passport.initialize());
app.use(passport.session());


app.use(flash());

app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash('error');
    next();
});

// #### All of our routes ####
app.use('/', base);
app.use('/', onboard);
app.use('/', user);
app.use('/', company);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
