var express = require('express');
var router = express.Router();


var profile = require('../controllers/profile.js');


/* GET user profile */
router.get('/u/:username/profile', isAuthenticated, isOwner, profile.edit);
router.post('/u/:username/profile', isOwner, profile.update);

router.get('/u/:username/feed', isAuthenticated, isOwner, profile.feed); 

/* GET user main page */
router.get('/u/:username', isOwner, profile.user_main); 

/* GET index page. */
router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});
