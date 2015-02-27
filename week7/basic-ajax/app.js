var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

// Connect to the DB
mongoose.connect('mongodb://localhost/beer-app-2');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.post('/api/addBeer', apiController.addBeer);

var server = app.listen(5977, function() {
	console.log('Express server listening on port ' + server.address().port);
});
