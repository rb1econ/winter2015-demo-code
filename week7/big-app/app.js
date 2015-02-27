var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beer-app');

// Seed the database:
require('./models/seeds/beerSeed.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

// api routes
app.post('/api/addBeer', apiController.addBeer);
app.post('/api/deleteBeer', apiController.deleteBeer);
app.get('/api/getBeer/:beer_id', apiController.getBeer);
app.post('/api/editBeer/:beer_id', apiController.editBeer);

var server = app.listen(3148, function() {
	console.log('Express server listening on port ' + server.address().port);
});
