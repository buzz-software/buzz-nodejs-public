var express = require('express');
var router = express.Router();

// Controller
var onboard = require('../controllers/onboard.js');
//var urls = require('./urls/onboard.js');


// Onboard for company
router.get('/o/company_signup', onboard.show_company_signup);
router.post('/o/company_signup', onboard.create_company);
router.get('/o/:company/pick_plan', onboard.show_company_pick_plan);
router.post('/o/:company/pick_plan', onboard.create_company_plan);
router.get('/o/:company/enter_cc', onboard.show_company_enter_cc);
router.post('/o/:company/enter_cc', onboard.process_company_cc);
router.get('/o/:company/setup_profile', onboard.show_company_edit_profile);
router.post('/o/:company/setup_profile', onboard.update_company_profile);
router.get('/o/:company/invite_authors', onboard.show_company_invite_authors);
router.post('/o/:company/invite_authors', onboard.process_company_invite_authors);

// Onboarding for individuals
router.get('/o/user_signup', onboard.show_user_signup);
router.post('/o/user_signup', onboard.create_user);

// Onboard via invite - these will need if (user already signed up) logic
router.get('/o/:company/i/:invite', onboard.show_signup_via_company_invite);	// Sign up and get added to company.
router.post('/o/:company/i/:invite', onboard.create_user_add_company);			// Sign up and get added to company.
router.get('/o/:user/i/:invite', onboard.show_signup_via_friend_invite);		// Sign up and become friends with inviter
router.post('/o/:user/i/:invite', onboard.create_user_add_friend);				// Sign up and become friends with inviter

// Onboard user later steps
router.get('/o/:username/pick_topics', onboard.show_user_pick_topics);
router.post('/o/:username/pick_topics', onboard.update_user_topics);
router.get('/o/:username/pick_blogs', onboard.show_user_pick_blogs);
router.post('/o/:username/pick_blogs', onboard.update_user_blogs);

router.get('/login', onboard.show_login);
router.post('/login', onboard.login);

module.exports = router;