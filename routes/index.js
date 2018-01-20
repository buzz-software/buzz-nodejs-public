var express = require('express');
var router = express.Router();
var passport = require('passport');
var flash = require('connect-flash');
var signupController = require('../controllers/signupController.js');
var bcrypt = require('bcrypt');
//var Model = require('../models/models.js');

var models = require('../models');

//var user_model = require('../models/user.js');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});


router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Let us login!' });
});

router.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login', failureFlash: true }));


router.post('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// Route
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Let us sign you up!' });
});

/*
router.post('/signup', signupController.signup);
*/
router.post('/signup', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;
  
  if (!username || !password || !password2) {
    req.flash('error', "Please, fill in all the fields.");
    console.log("Not all fields are filled yo!");
    res.redirect('signup');
    return;
  }
  
  if (password !== password2) {
    console.log("Password2 != Password1");
    req.flash('error', "Please, enter the same password twice.");
    res.redirect('signup');
    return;
  }
  
  var salt = bcrypt.genSaltSync(10);
  var hashedPassword = bcrypt.hashSync(password, salt);
  
  var newUser = {
    username: username,
    salt: salt,
    password: hashedPassword,
  };
  console.log("All good. Calling DB.");
  models.User.create(newUser).then(function() {
    console.log("Yo success! Now auth.");
    passport.authenticate('local')(req, res, function () {
        req.session.save(function (err) {
            if (err) {
                return next(err);
            }
            console.log("Yo auth done yo!");
            res.redirect('/');
        });
    });
  }).catch(function(error) {
    console.log("Database error, Yo!", error);
    req.flash('error', "Please, choose a different username.");
    res.redirect('signup');
    return;
  });
});


module.exports = router;
