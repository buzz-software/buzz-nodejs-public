




// Render Step 1: Company page.
//
// Fetch pages, posts, topics, followers
//
// Company home can go to various routes.

exports.show_home = function(req, res, next) {
	res.render('company_home');
}



//
// Invite routes
// 

// Render invite authors page.
exports.show_invite_authors = function(req, res, next) {

	// Redirect to onboard controller for process_invite_authors.
}

// TODO: This is duplicated by onboarding.
// Email invited authors, add them to pending list -> This is duplicated in on-boarding.

/*
exports.process_invite_authors = function(req, res, next) {

}
*/

// Triggers when logged in user accepts invite, add him/her to company authors.
exports.accept_join = function(req, res, next) {
	// Fetch user, fetch current company. Add: User author of company + any other privs.
}

// Triggers when logged in user accepts invite, add him/her to company authors.
exports.remove_user = function(req, res, next) {
	// Fetch user, fetch current company. Remove user from company.
}

//
// Settings routes
//

// Get company story settings
exports.show_settings_stories = function(req, res, next) {
	res.render('company_settings_stories');
}

// Post updates to stories
exports.update_settings_stories = function(req, res, next) {
	res.render('company_settings_stories');
}

exports.show_settings_authors = function(req, res, next) {
	res.render('company_settings_authors');
}

// Post updates to authors
exports.update_settings_authors = function(req, res, next) {
	res.render('company_settings_authors');
}

exports.show_settings_topics = function(req, res, next) {
	res.render('company_settings_topics');
}

// Add new topics
exports.update_settings_topics = function(req, res, next) {
	res.render('company_settings_topics');
}


exports.show_settings_social = function(req, res, next) {
	res.render('company_settings_topics');
}

// Post updates to social settings
exports.update_settings_social = function(req, res, next) {
	res.render('company_settings_topics');
}

exports.show_settings_products = function(req, res, next) {
	res.render('company_settings_topics');
}

// Add products
// Post updates to added products
exports.update_settings_products = function(req, res, next) {
	res.render('company_settings_topics');
}




//
// Post routes
//

// Render new post form
exports.new_post = function(req, res, next) {
	res.render('new_post');
}

// Create post in database
exports.create_post = function(req, res, next) {

}
// Get post
exports.show_post = function(req, res, next) {

}

// Get edit form
exports.edit_post = function(req, res, next) {

}

// Update post
exports.update_post = function(req, res, next) {

}
// Delete post
exports.delete_post = function(req, res, next) {

}

//
// Page routes - possibly merge with post routes.
//

// Render new page form
exports.new_page = function(req, res, next) {
	res.render('new_post');
}

// Create page in database
exports.create_page = function(req, res, next) {

}

// Get page
exports.show_page = function(req, res, next) {

}

// Get edit form
exports.edit_page = function(req, res, next) {

}

// Update page
exports.update_page = function(req, res, next) {

}

// Delete page
exports.delete_page = function(req, res, next) {

}

//
// Layout routes
//

// Get company page in layout change form menus
exports.show_edit_layout = function(req, res, next) {
	res.render('edit_layout');
}

// Post updated layout settings to database. Update CSS
//
// Redirect to company page with updated layout/CSS
exports.update_layout = function(req, res, next) {

}



