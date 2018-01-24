var bcrypt = require('bcrypt');
var models = require('../models');
var passport = require('passport');
var flash = require('connect-flash');

exports.signup = function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;
  
  if (!username || !password || !password2) {
    req.flash('error', "Please, fill in all the fields.");
    res.redirect('signup');
    return;
  }
  
  if (password !== password2) {
    console.log("Password2 != Password1");
    req.flash('error', "Passwords entered do not match. Please enter your password again.");
    res.redirect('signup');
    return;
  }
  
  var salt = bcrypt.genSaltSync(10);
  var hashedPassword = bcrypt.hashSync(password, salt);
  
  var newProfile = { title: null, description: null, status: null, isActive: true };
  var newUser = {
    username: username,
    salt: salt,
    password: hashedPassword,
    /*profileid: newProfile,*/
  };

  models.User.create(newUser).then(function() {
    // I can't move this to another route handler as I have to enforce
    // user creation to occur before authentication.
    passport.authenticate('local')(req, res, function () {
        req.session.save(function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/u/' + req.user.username);
        });
    });
  }).catch(function(error) {
    console.log('error', error);
    req.flash('error', "Username taken, please choose a different username.");
    res.redirect('signup');
    return;
  });
}