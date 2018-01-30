

/* Post routes */
router.get('/u/:username/new_post', isAuthenticated, isOwner, function (req, res) {
	res.render("new_post", { user : req.user, isOwner: req.isOwner });
});

// Temp
router.post('/u/:username/new_post_feed', isAuthenticated, isOwner, profile.create_post_in_feed);

router.post('/u/:username/new_post', isAuthenticated, isOwner, profile.create_post);
router.get('/u/:username/:post_slug', isAuthenticated, isOwner, profile.show_post);
router.get('/u/:username/:post_slug/edit_post', isAuthenticated, isOwner, profile.edit_post);
router.post('/u/:username/:post_slug/edit_post', isAuthenticated, isOwner, profile.update_post);