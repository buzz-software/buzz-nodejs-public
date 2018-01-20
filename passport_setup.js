
// Passport stuff
var session = require('express-session');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var models = require ('./models');
var session = require('express-session');

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log("Username pass:", username, password);
    models.User.findOne({
      where: {
        'username': username
      }
    }).then(function (user) {
      console.log("User:", user)
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

app.use(session({ secret: 'bir sana bir tane bana' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash('error');
    next();
});