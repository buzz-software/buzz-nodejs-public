var bcrypt = require('bcrypt');
var m = require('../models');
var passport = require('passport');
var flash = require('connect-flash');

exports.post = function(req, res) {

  // Extract form data
  var title = req.body.title;
  var description = req.body.description;
  var status = req.body.status; 
  
  var user = req.user;

  console.log("user, title, status, desc", user, title, status, description);
  m.User.findById(req.user.id).then(u => {
    u.getProfile().then (p => {
      p.update({"title": title, "status" : status, "description" : description }).then(result => {
        req.flash('info', "Updated profile successfully");
        res.redirect('/u/' + req.user.username);
      })
    });
  });
  return;
}

exports.get = function(req, res) {
  m.User.findById(req.user.id).then(u => {
    u.getProfile().then (p => {
        res.render("user_profile", { user : req.user, isOwner: req.isOwner, profile : p } );
        return;
    });
  });
}