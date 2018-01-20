var express = require('express');
var router = express.Router();
var passport = require('passport');


// Auth checker
var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated())
    	return next()
	req.flash('error', 'You have to be logged in to access the page.')
	res.redirect('/')
}


/* Controllers */
var signup = require('../controllers/signup.js');


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/username:', isAuthenticated, function(req, res) {
    res.render('user_main.pug', { user : req.user } );
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


router.post('/signup', signup.signup);


module.exports = router;
