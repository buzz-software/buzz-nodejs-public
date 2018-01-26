var express = require('express');
var router = express.Router();
var passport = require('passport');


// Auth checker
var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated()) {
		//console.log("is authenticated");
    	return next()
	}
	else {
		//console.log("not authenticated");
	}
	req.flash('error', 'You have to be logged in to access the page.')
	res.redirect('/')
}


// Crude authorization: Add indicator: Is this guy the owner of this page?
// This doesn't stop or redirect the request. Just adds permission.
var isOwner = function (req, res, next) {
	if (req.isAuthenticated()) {
		// Is the username requested in url parameters matching the user making the request?
	    if (req.user.username == req.params.username) {
	    	req.isOwner = true;
	    } else {
	    	req.isOwner = false;
	    }
	}
    next();
}

/* Controllers */
var signup = require('../controllers/signup.js');
var profile = require('../controllers/profile.js');


/* Post routes */
router.get('/u/:username/new_post', isAuthenticated, isOwner, function (req, res) {
	res.render("new_post", { user : req.user });
});

router.post('/u/:username/new_post', isAuthenticated, isOwner, profile.create_post);
router.get('/u/:username/:post_title/show_post', isAuthenticated, isOwner, profile.show_post);
router.get('/u/:username/:post_title/edit_post', isAuthenticated, isOwner, profile.edit_post);
router.put('/u/:username/:post_title/edit_post', isAuthenticated, isOwner, profile.update_post);

/* GET user main page */
router.get('/u/:username', isOwner, profile.user_main); 

/* GET user profile */
router.get('/u/:username/profile', isAuthenticated, isOwner, profile.edit);
router.post('/u/:username/profile', isOwner, profile.update);
/*
router.get('/u/:username/profile', isOwner, function(req, res) {
    res.render('user_profile.pug', { user : req.user, isOwner: req.isOwner } );
});
*/

/* GET index page. */
router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

/* Login */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Let us login!' });

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



module.exports = router;
