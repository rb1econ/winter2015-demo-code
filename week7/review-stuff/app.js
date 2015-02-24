var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

// Connect to the database:
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/review-stuff');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
// app.get('/home', homeController.home);
// app.get('/api/allBooks', apiController.allBooks);

var server = app.listen(3009, function() {
	console.log('Express server listening on port ' + server.address().port);
});
