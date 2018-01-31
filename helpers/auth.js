


// Add permission indicators to response

// isOwner
// isAuthenticated

// Auth checker
var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated()) {
		//console.log("is authenticated");
    	return next()
	}
	else {
		//console.log("not authenticated");
	}
	req.flash('error', 'You have to be logged in to access the page.')
	res.redirect('/')
}


// Crude authorization: Add indicator: Is this guy the owner of this page?
// This doesn't stop or redirect the request. Just adds permission.
var isOwner = function (req, res, next) {
	if (req.isAuthenticated()) {
		// Is the username requested in url parameters matching the user making the request?
	    if (req.user.username == req.params.username) {
	    	req.isOwner = true;
	    } else {
	    	req.isOwner = false;
	    }
	}
    next();
}


// Middleware to enforce permissions

// has_access
// 


