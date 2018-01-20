/*
var bcrypt = require('bcrypt'),
    Model = require('../models/models.js');

exports.signup = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;
  
  if (!username || !password || !password2) {
    req.flash('error', "Please, fill in all the fields.");
    console.log("Not all fields are filled yo!");
    res.redirect('/signup');
  }
  
  if (password !== password2) {
    console.log("Password2 != Password1");
    req.flash('error', "Please, enter the same password twice.");
    res.redirect('/signup');
  }
  
  var salt = bcrypt.genSaltSync(10);
  var hashedPassword = bcrypt.hashSync(password, salt);
  
  var newUser = {
    username: username,
    salt: salt,
    password: hashedPassword,
  };
  console.log("All good. Calling DB.");
  Model.User.create(newUser).then(function() {
    console.log("Yo success!");
    res.redirect('/');
  }).catch(function(error) {
    console.log("Database error, Yo!");
    req.flash('error', "Please, choose a different username.");
    res.redirect('/signup');
  });
}

*/