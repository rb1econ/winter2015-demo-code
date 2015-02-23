var express = require('express');
var bodyParser = require('body-parser');

// Require mongoose
var mongoose = require('mongoose');

// Connect to a database
mongoose.connect('mongodb://localhost/movies');

var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

// Handle posts to our movieSubmit handler
app.post('/movieSubmit', indexController.movieSubmit);

var server = app.listen(4913, function() {
	console.log('Express server listening on port ' + server.address().port);
});
