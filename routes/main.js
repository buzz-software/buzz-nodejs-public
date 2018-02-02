var express = require('express');
var router = express.Router();
var passport = require('passport');

// Controllers
var signup = require('../controllers/signup.js');
var company = require('../controllers/company.js');
var base = require('../controllers/base.js');
var user = require('../controllers/user.js');
var onboard = require('../controllers/onboard.js');

router.get('/start', base.show_landing);				// Landing
router.get('/discover', base.show_discover);					// Discover
router.get('/search', base.show_search); 				    // Search
router.get('/results', base.show_results);					// Search results

// User Settings routes
router.get('/u/:username/s/profile', user.show_settings_profile);
router.get('/u/:username/s/account', user.show_settings_account);
router.get('/u/:username/s/notifs', user.show_settings_notifs);
router.get('/u/:username/s/blogs', user.show_settings_blogs);
router.get('/u/:username/s/prefs', user.show_settings_prefs);

// Onboarding for new company
router.get('/o/company_signup', onboard.show_company_signup);
router.get('/o/:company/pick_plan', onboard.show_company_pick_plan);
router.get('/o/:company/enter_cc', onboard.show_company_enter_cc);
router.get('/o/:company/setup_profile', onboard.show_company_setup_profile);
router.get('/o/:company/invite_authors', onboard.show_company_invite_authors);

// Onboarding for individuals
router.get('/o/user_signup', onboard.show_user_signup);

// Onboard via invite - these will need if (user already signed up) logic
router.get('/o/:company/i/:invite', onboard.show_user_signup_company_invite);	// Sign up and get added to company.
router.get('/o/:user/i/:invite', onboard.show_user_signup_friend_invite);	// Sign up and become friends with inviter

router.get('/o/:username/pick_topics', onboard.show_user_pick_topics);
router.get('/o/:username/pick_blogs', onboard.show_user_pick_blogs);

router.get('/u/:username/feed', user.show_feed);		// Feed for logged in user.
router.get('/u/:username/notifications', user.show_notifs);		// Notifications for user.

// APIs
router.get('api/u/:username/notifs', user.fetch_notifs);


router.get('/login', onboard.show_login);

// User
router.get('/u/:user/', user.show_profile);		// Public profile page
router.get('/u/:user/invite', user.show_invite_friends);	// User inviting friends

// Company manage invites, acceptances
router.get('/c/:company/invite_authors', company.show_invite_authors);	// Company inviting authors
router.get('/c/:company/accept_join', company.accept_invited_user);		// Add invited user to company.
router.get('/c/:company', company.show_home);	// Company public home page.

// Company settings routes
router.get('/c/:company/s/stories', company.show_settings_stories);	// Company story settings
router.get('/c/:company/s/authors', company.show_settings_authors);	// Author settings
router.get('/c/:company/s/topics', company.show_settings_topics);	// Topic settings
router.get('/c/:company/s/social', company.show_settings_social);	// Social settings
router.get('/c/:company/s/products', company.show_settings_products);	// Product settings

// Company blog post routes
router.get('/c/:company/new_post', company.new_post);		// New post editor
router.post('/c/:company/new_post', company.create_post);	// Update post
router.get('/c/:company/:post_slug', company.show_post);		// Show post
router.get('/c/:company/:post_slug/edit_post', company.edit_post);				// Get post for edit
router.post('/c/:company/:post_slug/edit_post', company.update_post);				// Update post
router.post('/c/:company/:post_slug/delete_post', company.delete_post);			// Delete post

// Company layout routes
router.get('/c/:company/l/layout', company.show_edit_layout); // Setup how posts lay out
router.post('/c/:company/l/layout', company.update_layout); // Setup how posts lay out

// Company page routes
router.get('/c/:company/new_page', company.new_page);					// New page editor
router.post('/c/:company/new_page', company.create_page);				// Update page
router.get('/c/:company/p/:page_slug', company.show_page);				// Show page
router.get('/c/:company/p/:page_slug/edit_page', company.edit_page);		// Get page for edit
router.post('/c/:company/p/:page_slug/edit_page', company.update_page);		// Update page
router.post('/c/:company/p/:page_slug/delete_page', company.delete_page);	// Delete page


module.exports = router;
