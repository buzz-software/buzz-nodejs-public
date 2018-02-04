
//
// User routes
//


// Get user
//
// On-demand feed building: Do we build the feed on-demand as follows?
// 		Get blogs user is following.
// 		Fetch all posts in the last day, limit to 10 from each
// 		Sort all posts by date
// 		Return sorted list of posts.
//
// Pre-built feed:
// 		Get user, fetch feed: Every time a blog update occurs
// 		We update the feeds of all of the followers.
//
// My guess:
//		If you have 1M followers, it is best to build on demand
//		Chances are most followers are offline.
// 		
//		If you have <100 followers, it is best to build as updates occur.
//
//		I think initially on-demand is simplest.
//
//		You can do on-demand by default, if you have computing capacity,
//		you generate those feeds in batch mode.
//
//		E.g.:
//		If I have no cached feed, build my feed.
//		If I have a cached feed, use it.
//		Build a cached feed every hour.


exports.show_feed = function(req, res, next) {
	res.render('user_feed');
}

// Get user
// Get notifications for user - 
// Notifications are logged as they occur in a notifs table.
exports.show_notifs = function(req, res, next) {
	res.render('user_notifs');
}

// API version of notifications to show in notifs menu.
exports.fetch_notifs = function(req, res, next) {
	// Response: Notifs list in json.
}


//
// User Settings
//
exports.show_settings_profile = function(req, res, next) {
	res.render('user_settings_profile');
}
exports.update_settings_profile = function(req, res, next) {
	res.render('user_settings_profile');
}

exports.show_settings_account = function(req, res, next) {
	res.render('user_settings_account');
}

exports.update_settings_account = function(req, res, next) {
	res.render('user_settings_account');
}

exports.show_settings_notifs = function(req, res, next) {
	res.render('user_settings_notifs');
}

exports.update_settings_notifs = function(req, res, next) {
	res.render('user_settings_notifs');
}

exports.show_settings_blogs = function(req, res, next) {
	res.render('user_settings_blogs');
}
exports.update_settings_blogs = function(req, res, next) {
	res.render('user_settings_blogs');
}

exports.show_settings_prefs = function(req, res, next) {
	res.render('user_settings_prefs');
}

exports.update_settings_prefs = function(req, res, next) {
	res.render('user_settings_prefs');
}


// Public user profile
exports.show_profile = function(req, res, next) {
	// Get user and everything about him/her
	// Show it.
	res.render('user_profile');
}

// Show invite friends form for user.
exports.show_invite_friends = function(req, res, next) {
	res.render('user_invite_friends');
}

// Send email, update pending list.
exports.process_invite_friends = function(req, res, next) {
	res.render('user_invite_friends');
}











