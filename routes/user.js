var express = require('express');
var router = express.Router();

var user = require('../controllers/user.js');

// User
router.get('/u/:username/feed', user.show_feed);		// Feed for logged in user.
router.get('/u/:username/notifications', user.show_notifs);		// Notifications for user.
// APIs
router.get('/api/u/:username/notifs', user.fetch_notifs);

// User Settings routes
router.get('/u/:username/s/profile', user.show_settings_profile);
router.post('/u/:username/s/profile', user.update_settings_profile);
router.get('/u/:username/s/account', user.show_settings_account);
router.post('/u/:username/s/account', user.update_settings_account);
router.get('/u/:username/s/notifs', user.show_settings_notifs);
router.post('/u/:username/s/notifs', user.update_settings_notifs);
router.get('/u/:username/s/blogs', user.show_settings_blogs);
router.post('/u/:username/s/blogs', user.update_settings_blogs);
router.get('/u/:username/s/prefs', user.show_settings_prefs);
router.post('/u/:username/s/prefs', user.update_settings_prefs);



router.get('/u/:user/', user.show_profile);		// Public profile page

router.get('/u/:user/invite', user.show_invite_friends);	// User inviting friends
router.post('/u/:user/invite', user.process_invite_friends);	// User inviting friends


/* Old stuff

var profile = require('../controllers/profile.js');


// GET user profile 
router.get('/u/:username/profile', isAuthenticated, isOwner, profile.edit);
router.post('/u/:username/profile', isOwner, profile.update);

router.get('/u/:username/feed', isAuthenticated, isOwner, profile.feed); 

// GET user main page
router.get('/u/:username', isOwner, profile.user_main); 

// GET index page. 
router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

*/


module.exports = router;