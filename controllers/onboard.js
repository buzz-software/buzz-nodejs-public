


// Render Step 1: New company form
exports.show_company_signup = function(req, res, next) {
	res.render('landing');
}

// Create new company
//
// Post function goes here.
//
// Redirect to step 2.

// Render Step 2: Pick a plan
exports.show_company_pick_plan = function(req, res, next) {
	res.render('pick_plan');
}

// Create plan and populate it. Redirect to Step 3.
//
// post function goes here.
//
// Redirect to Step 3.

// Render Step 3: Get cc info
exports.show_company_enter_cc = function(req, res, next) {
	res.render('enter_cc');
}

// Process cc info.
//
// post function, stripe call etc. goes here.
//
// Redirect to Step 4

// Render Step 4: Set up profile, populate fields.
exports.show_company_setup_profile = function(req, res, next) {
	res.render('setup_profile');
}

// Update profile model.
//
// post function goes here.
//
// Redirect to Step 5

// Render Step 5: Invite authors
exports.show_company_invite_authors = function(req, res, next) {
	res.render('invite_authors');
}

// Email authors requesting sign up. Add them to Author pending table.
//
// Post function goes here. Email, add to database.
//
// Redirect to /c/:company


//
// Regular user sign up
//
exports.show_user_signup = function(req, res, next) {
	res.render('user_signup');
}

//
// Sign up via invites
//

//
// Regular user signs up and joins company.
//
// This is the route user takes with a company invite.
exports.show_user_signup_company_invite = function(req, res, next) {

	// Get company, populate invite data.

	res.render('user_signup_company_invite');
}

//
// Regular user signs up and becomes friends with invitor.
//
// This is the route user takes with a friend invite.
//
exports.show_user_signup_friend_invite = function(req, res, next) {
	
	// Get friend, populate its data.

	res.render('user_signup_friend_invite');
}


// Pick topics for user
exports.show_user_pick_topics = function(req, res, next) {
	
	// Get friend, populate its data.

	res.render('show_user_pick_topics');
}


// Pick blogs to follow
exports.show_user_pick_blogs = function(req, res, next) {
	
	// Get friend, populate its data.

	res.render('show_user_pick_blogs');
}




exports.show_login = function(req, res, next) {
	
	// Login page for everyone. We could customize it up a bit
	// for companies.

	res.render('login');
}











