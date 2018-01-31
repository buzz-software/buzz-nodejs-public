var express = require('express');
var router = express.Router();
var passport = require('passport');

/* Controllers */
var signup = require('../controllers/signup.js');



/* Login */
router.get('/login', function(req, res, next) {
  res.render('login');

}).post('/login', passport.authenticate('local', { successRedirect: '/:username',
                                                   failureRedirect: '/login', failureFlash: true }));

/* Logout */
router.post('/logout', function(req, res) {
    req.logout();
    res.redirect('/');

}).get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

/* Sign up */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Let us sign you up!' });

}).post('/signup', signup.signup);