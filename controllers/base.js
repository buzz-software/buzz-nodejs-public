
//
// Base application routes that apply to the whole application.
//

// Get main topics
// Get 6 main companies using
// Get latest stories
// Get total number of communities
exports.show_landing = function(req, res, next) {
	res.render('base/home');
}

// Get posts, people, companies, tags.
// Filter by latest and highest score
// Display.
exports.show_discover = function(req, res, next) {
	res.render('base/discover');
}

exports.show_search = function(req, res, next) {
	res.render('search');
}

exports.show_results = function(req, res, next) {
	res.render('base/search-results');
}
