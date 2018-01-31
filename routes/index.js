var express = require('express');
var router = express.Router();
var passport = require('passport');






router.get('/start', landing.get_start);				// Landing
router.get('/discover', discover.get);					// Discover
router.get('/d/search', discover.search); 				// Discover Search
router.get('/l/search', landing.search); 				// Landing Search
router.get('/results', search.results);					// Search results


// APIs
router.get('api/u/:username/notifs', notifs.get);


// User Settings routes
router.get('/u/:username/s/profile', user.get_settings_profile);	
router.get('/u/:username/s/account', user.get_settings_account);
router.get('/u/:username/s/notifs', user.get_settings_notifs);	
router.get('/u/:username/s/blogs', user.get_settings_blogs);	
router.get('/u/:username/s/prefs', user.get_settings_prefs);

// Onboarding for new company
router.get('/start/new_company', landing.get_new_company);
router.get('/start/:company/pick_plan', landing.get_pick_plan);
router.get('/start/:company/enter_cc', landing.get_enter_cc);
router.get('/start/:company/setup_profile', landing.get_setup_profile);
router.get('/start/:company/invite_authors', landing.get_invite_authors);

// Onboarding for individuals
router.get('/start/new_user', landing.get_new_user);
router.get('/start/:user/pick_topics', landing.get_pick_topics);
router.get('/start/:user/pick_blogs', landing.get_pick_blogs);


router.get('/u/:username/feed', user.get_feed);		// Feed for logged in user.
router.get('/u/:username/notifications');				// Notifications for user.

router.get('/login', login.login);
router.get('/u/:user/', user.get_profile);		// Public profile page
router.get('/u/:user/invite', user.get_invite_friends);		// User inviting friends

router.get('/u/:company/invite', company.get_invite_authors);	// Company inviting authors


router.get('/c/:company/i/:invite', company.get_invite_signup);	// Sign up as invitee
router.get('/c/:company/i/:invite', company.get_accept_join);	// Join company as invitee.

router.get('/c/:company', company.get_home);	// Company public home page.

// Company settings routes
router.get('/c/:company/s/stories', company.get_settings_stories);	// Company story settings
router.get('/c/:company/s/authors', company.get_settings_authors);	// Author settings
router.get('/c/:company/s/topics', company.get_settings_topics);	// Topic settings
router.get('/c/:company/s/social', company.get_settings_social);	// Social settings
router.get('/c/:company/s/products', company.get_settings_products);	// Product settings

// Company blog post routes
router.get('/c/:company/:post_slug');					// Post from a community
router.get('/c/:company/new_post');						// Create new post

// Company layout routes
router.get('/c/:company/l/layout', company.get_layout); // Setup how posts lay out


router.get('/c/:company/new_page', company.create_page); // Setup how posts lay out

router.get('/c/:company/:page_slug', company.show_page);
router.get('/c/:company/:page_slug/edit_page', company.edit_page);
router.post('/u/:company/:post_slug/edit_page', company.update_page);


module.exports = router;
