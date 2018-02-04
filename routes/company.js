var express = require('express');
var router = express.Router();

var company = require('../controllers/company.js');

router.get('/c/:company', company.show_home);	// Company public home page.

// Company manage invites, acceptances
router.get('/c/:company/invite_authors', company.show_invite_authors);	// Company inviting authors
router.get('/c/:company/accept_join', company.accept_invited_user);		// Add invited user to company.


// Company settings routes
router.get('/c/:company/s/stories', company.show_settings_stories);	// Company story settings
router.get('/c/:company/s/stories', company.update_settings_stories);	// Company story settings
router.get('/c/:company/s/authors', company.show_settings_authors);	// Author settings
router.get('/c/:company/s/authors', company.update_settings_authors);	// Author settings
router.get('/c/:company/s/topics', company.show_settings_topics);	// Topic settings
router.get('/c/:company/s/topics', company.update_settings_topics);	// Topic settings
router.get('/c/:company/s/social', company.show_settings_social);	// Social settings
router.get('/c/:company/s/social', company.update_settings_social);	// Social settings
router.get('/c/:company/s/products', company.show_settings_products);	// Product settings
router.get('/c/:company/s/products', company.update_settings_products);	// Product settings

// Company blog post routes
router.get('/c/:company/new_post', company.new_post);		// New post editor
router.post('/c/:company/new_post', company.create_post);	// Update post
router.get('/c/:company/:post_slug', company.show_post);		// Show post
router.get('/c/:company/:post_slug/edit_post', company.edit_post);				// Get post for edit
router.post('/c/:company/:post_slug/edit_post', company.update_post);				// Update post
router.post('/c/:company/:post_slug/delete_post', company.delete_post);			// Delete post

// Company layout routes
router.get('/c/:company/l/layout', company.show_edit_layout); // Setup how posts lay out
router.post('/c/:company/l/layout', company.update_layout); // Setup how posts lay out

// Company page routes
router.get('/c/:company/new_page', company.new_page);					// New page editor
router.post('/c/:company/new_page', company.create_page);				// Update page
router.get('/c/:company/p/:page_slug', company.show_page);				// Show page
router.get('/c/:company/p/:page_slug/edit_page', company.edit_page);		// Get page for edit
router.post('/c/:company/p/:page_slug/edit_page', company.update_page);		// Update page
router.post('/c/:company/p/:page_slug/delete_page', company.delete_page);	// Delete page