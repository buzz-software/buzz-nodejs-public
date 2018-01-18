var express = require('express');
var router = express.Router();
var passport = require('passport');

// Route
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Let us sign you up!' });
});


router.post('/', function(req, res, next) {
  passport.authenticate('local', {
  	successRedirect: '/',
  	failureRedirect: '/',
  	failureFlash: true })
});


module.exports = router;