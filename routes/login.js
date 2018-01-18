var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Let us login!' });
});


router.post('/', function(req, res, next) {
  passport.authenticate('local', {
  	successRedirect: '/',
  	failureRedirect: '/login',
  	failureFlash: true })
});


module.exports = router;