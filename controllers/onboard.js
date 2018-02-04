var passport = require('passport');

/*
 * Onboarding module for both companies and users.
 *
 * Handles sign up of companies, users, also users
 * who sign up via a company join invite, or invite of a friend.
 * 
 */
//urls = require("../routes/urls/onboard.js");

var company_seed = "test_company";

// Render Step 1: New company form
exports.show_company_signup = function(req, res, next) {
	res.render('placeholder', { url : "/o/company_signup" } );
}

// Create new company
exports.create_company = function(req, res, next) {
	// As if form is read and company_seed obtained.
	console.log("Redirecting to:", req.baseUrl + '/' + company_seed + "/pick_plan");

	res.redirect("/o" + "/" + company_seed + "/pick_plan");
}


// Render Step 2: Pick a plan
exports.show_company_pick_plan = function(req, res, next) {

	var company = req.params.company;

	var url = "/o" + '/' + company + "/pick_plan";

	res.render('placeholder', { url : url } );
}

// Create new Stripe plan
exports.create_company_plan = function(req, res, next) {
	var company = req.params.company;

	var next_url = "/o" + "/" + company + "/enter_cc";

	console.log("Redirecting to:", next_url);
 
	res.redirect(next_url);
}

// Render Step 3: Get cc info
exports.show_company_enter_cc = function(req, res, next) {
	var company = req.params.company;
	var url = "/o" + '/' + company + "/enter_cc";

	res.render('placeholder', { url : url } );
}

// Process cc info.
exports.process_company_cc = function(req, res, next) {
	var company = req.params.company;
	var next_url = "/o" + '/' + company + "/setup_profile";

	res.redirect(next_url);
}

// Render Step 4: Set up profile, populate fields.
exports.show_company_edit_profile = function(req, res, next) {
	res.render('setup_profile');
}

// Render Step 4: Set up profile, populate fields.
exports.update_company_profile = function(req, res, next) {
	var company = req.params.company;

	res.redirect('/o' + '/' + company + '/invite_authors');
}

// Render Step 5: Invite authors
exports.show_company_invite_authors = function(req, res, next) {
	res.render('invite_authors');
}

// Email authors requesting sign up. Add them to Author pending table.
exports.process_company_invite_authors = function(req, res, next) {
	var company = req.params.company;

	// Redirect to company home page.

	// Actually before we do this we must create 1 user in the company as well. Or do you log in as a company?
	// I think it is better if a company has member users one of which is an owner or has more privileges.
	res.redirect('/c' + '/' + company);
}

// Regular user sign up
exports.show_user_signup = function(req, res, next) {
	res.render('user_signup');
}

// Sign up user
exports.create_user = function(req, res, next) {
	res.redirect('');
}

//
// Sign up via invites
//

// Show user sign up via invite form
exports.show_signup_via_company_invite = function(req, res, next) {

	// Get company, populate invite data.

	res.render('user_signup_company_invite');
}

// User signs up and joins company.
exports.create_user_add_company = function(req, res, next) {

	// Get company, populate invite data.

	res.redirect('');
}


// Show user sign up via friend invite form.
exports.show_signup_via_friend_invite = function(req, res, next) {
	
	// Get friend, populate its data.
	res.render('user_signup_friend_invite');
}


// User signs up and becomes friends with invitor.
exports.create_user_add_friend = function(req, res, next) {
	
	// Create user, find friend, add: Friend relationship to both.

	res.redirect('');
}

// Show topic selection form
exports.show_user_pick_topics = function(req, res, next) {
	
	// Get friend, populate its data.
	res.render('show_user_pick_topics');
}

// Set topics
exports.update_user_topics = function(req, res, next) {
	
	// Get user, get topics, Add: User follows topics.

}

// Pick blogs to follow
exports.show_user_pick_blogs = function(req, res, next) {
	
	// Get friend, populate its data.

	res.render('show_user_pick_blogs');
}


// Update blogs
exports.update_user_blogs = function(req, res, next) {
	
	// Get user, get blogs. Add: User follows blogs. Redirect to User hhome.

	res.redirect('');
}

// All users login through here.
exports.show_login = function(req, res, next) {
	res.render('user_signup');
}

// Post
exports.login = function(req, res, next) {
	
	// Establish session, redirect to user home page.

	res.redirect('');
}











