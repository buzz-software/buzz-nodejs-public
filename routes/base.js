var express = require('express');
var router = express.Router();


// Controllers
var base = require('../controllers/base.js');

// Base pages for entire app
router.get('/start', base.show_landing);				// Landing
router.get('/discover', base.show_discover);					// Discover
router.get('/search', base.show_search); 				    // Search
router.get('/results', base.show_results);					// Search results


module.exports = router;
