var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');
var flash = require('connect-flash');


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});


router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Let us login!' });
});

/*
router.post('/login', passport.authenticate('local',
		{ successRedirect: '/',
  		  failureRedirect: '/login',
  		  failureFlash: true }), 
				function(req, res, next) {{}

});*/


router.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login', failureFlash: true }));

/*
router.post('/login', function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
	    if (err) {
	    	return res.render('login', { error: err.message });
	    }
	    if (!user) {
	    	return res.render('login', {error: err.message } );
	    }
	    req.login(user, function(err) {
	    	if (err) {
	    		return res.render('login', { error: err.message });
	    	}
	    });
    	res.redirect('/');
	});
});
*/

/*
app.get('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
});
*/
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

router.post('/signup', function(req, res, next) {
	console.log("Sign up post route enter")
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('signup', { error : err.message });
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
        	});
        });
    });
});

module.exports = router;
