var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Let us login!' });
});


router.post('/login', function(req, res, next) {
  passport.authenticate('local', {
  	successRedirect: '/',
  	failureRedirect: '/login',
  	failureFlash: true })
});

// Route
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Let us sign you up!' });
});


router.post('/signup', function(req, res, next) {
  passport.authenticate('local', {
  	successRedirect: '/',
  	failureRedirect: '/signup',
  	failureFlash: true })
});

module.exports = router;
