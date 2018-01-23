var bcrypt = require('bcrypt');
var models = require('../models');
var passport = require('passport');
var flash = require('connect-flash');

exports.profile = function(req, res, next) {

  // Extract form data
  var title = req.body.title;
  var status = req.body.desc;
  var desc = req.body.status;
  
  var user = req.user;
  console.log("user, title, status, desc", user, title, status, desc);
/*
  // Update database with form data.
  models.User.findOne(user).then(function(user) {
    models.User.Profile.update(user.Profile, title, status, desc).then function() {

    }
  }
*/
  // Redirect to profile page.

  req.flash('info', "Updated profile successfully");
  res.redirect('/u/' + req.user.username + '/profile');
  return;
}