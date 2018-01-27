var bcrypt = require('bcrypt');
var m = require('../models');
var passport = require('passport');
var flash = require('connect-flash');

exports.update = function(req, res) {

  // Extract form data
  var title = req.body.title;
  var description = req.body.description;
  var status = req.body.status; 
  
  var user = req.user;

  m.User.findById(req.user.id).then(u => {
    u.getProfile().then (p => {
      p.update({"title": title, "status" : status, "description" : description }).then(result => {
        req.flash('info', "Updated profile successfully");
        res.redirect('/u/' + req.user.username);
      })
    });
  });
  return;
}

exports.edit = function(req, res) { 
  m.User.findById(req.user.id).then(u => {
    u.getProfile().then (p => {
      res.render("edit_profile",{ user: req.user, profile: p });
      return;
    });
  });
}

exports.user_main = function(req, res) {
  m.User.findOne({
    where: {
      'username': req.params.username
    }
  }).then(o => {
    o.getProfile().then (p => {
      o.getPosts({
        limit: 3,
        order: [['createdAt', 'DESC']],
        attributes: ['id', 'title']
      }).then(posts => {
        console.log(posts);
        res.render("user_main", { user : req.user, owner: o, posts: posts, isOwner: req.isOwner, profile : p } );
        return;
      });
    });
  });
}

// POST new post
exports.create_post = function(req, res) {
  var title = req.body.title;
  var body = req.body.body;

  newPost = { title:title, body:body };

  // find authorized user
  m.User.findById(req.user.id).then(u => {
    // create a post for this user.
    u.createPost(newPost).then( p => {
      res.redirect('/u/'+ req.user.username);
    });
  });
}

// GET existing post
exports.show_post = function(req, res) {
  m.User.findById(req.user.id).then(u => {
    u.getPost({ where: { 'title': req.params.post_title } }).then (p => {
        res.render("show_post", { user : req.user, owner: u, post : p } );
        return;
    });
  });
}

// Get existing post to edit
exports.edit_post = function(req, res) {
  m.User.findById(req.user.id).then(u => {
    u.getPost({ where: { 'title': req.params.post_title } }).then (p => {
        res.render("edit_post", { user : req.user, owner: u, post : p } );
        return;
    });
  });
}

// PUT existing post
exports.update_post = function(req, res) {
  m.User.findById(req.user.id).then(u => {
    u.getPost({ where: { 'title': req.params.post_title } }).then (p => {
        res.redirect('/u/' + req.user.username + '/' + req.params.post_title);
        return;
    });
  });
}

