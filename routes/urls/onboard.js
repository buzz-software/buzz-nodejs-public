
var urls = {
	// Onboarding for company
	signup: 			"/company_signup",
	pick_plan:  		"/:company/pick_plan",
	enter_cc: 			"/:company/enter_cc",
	setup_profile: 		"/:company/setup_profile",
	invite_authors: 	"/:company/invite_authors",
	
	// Onboarding individuals
	user_signup:        "/user_signup",
	user_pick_topics:	"/:username/pick_topics",
	user_pick_blogs: 	"/:username/pick_blogs",

	// Onboard via invite
	company_invite: 	"/:company/i/:invite",
	user_invite: 		"/:user/i/invite",
}


var onboard_urls = (function () {
	return urls;
})();



module.exports = onboard_urls;