var express = require('express');
var router = express.Router();

// Controller
var onboard = require('../controllers/onboard.js');
var urls = require('./urls/onboard.js');


// Onboard for company
//router.get('/o/company_signup', onboard.show_company_signup);
router.get(urls.signup, onboard.show_company_signup);
router.get('/o/:company/pick_plan', onboard.show_company_pick_plan);
router.get('/o/:company/enter_cc', onboard.show_company_enter_cc);
router.get('/o/:company/setup_profile', onboard.show_company_setup_profile);
router.get('/o/:company/invite_authors', onboard.show_company_invite_authors);

// Onboarding for individuals
router.get('/o/user_signup', onboard.show_user_signup);

// Onboard via invite - these will need if (user already signed up) logic
router.get('/o/:company/i/:invite', onboard.show_user_signup_company_invite);	// Sign up and get added to company.
router.get('/o/:user/i/:invite', onboard.show_user_signup_friend_invite);	// Sign up and become friends with inviter

// Onboard user later steps
router.get('/o/:username/pick_topics', onboard.show_user_pick_topics);
router.get('/o/:username/pick_blogs', onboard.show_user_pick_blogs);

router.get('/login', onboard.show_login);


module.exports = router;