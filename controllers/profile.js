var bcrypt = require('bcrypt');
var m = require('../models');
var passport = require('passport');
var flash = require('connect-flash');
var slug = require('slug');

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
        attributes: ['id', 'title', 'slug']
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
  console.log("title:",title);
  console.log("slug:",slug(title));

  newPost = { title:title, body:body, slug: slug(title) };

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
    u.getPosts({ where: { 'slug' : req.params.post_slug } }).then (p => {
      p = p[0]; // remove post from posts array.
      console.log("user post filter with slug", p);
        res.render("show_post", { user : req.user, owner: u, post : p } );
        return;
    });
  });
}

// Get existing post to edit
exports.edit_post = function(req, res) {
  m.User.findById(req.user.id).then(u => {
    u.getPosts({ where: { 'slug': req.params.post_slug } }).then (p => {
        p = p[0]// remove post from posts array.
        res.render("edit_post", { user : req.user, owner: u, post : p } );
        return;
    });
  });
}

// PUT existing post
exports.update_post = function(req, res) {
  m.User.findById(req.user.id).then(u => {
    u.getPosts({ where: { 'slug': req.params.post_slug } }).then (p => {
        p = p[0]; // remove post from posts array.
        var title = req.body.title;
        var body = req.body.body;
        //console.log("Title", title);
        var post_slug = slug(title);
        //console.log("post slug", post_slug);
        p.update({ title:title, body:body, slug: post_slug }).then(result => {
          res.redirect('/u/' + req.user.username + '/' + post_slug);
          return;
        });
    });
  });
}

