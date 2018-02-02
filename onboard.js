
var express = require('express');

 var app = module.exports = express();

// set routes for userjs
app.get('/login', function(req, res){
  // present login page
});

app.set('views', path.join(__dirname, 'views/onboard'));
app.set('view engine', 'pug');
app.set('view options', { pretty: true }); 
app.locals.pretty = true;


  