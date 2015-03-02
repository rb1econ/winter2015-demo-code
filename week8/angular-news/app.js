var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var newsController = require('./controllers/news.js');

// Connect to DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/angular-news');

// Seed the database:
require('./models/seeds/newsSeed.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// Also parse JSON data, which comes directly from angular
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

// Api-specific routes:
app.get('/api/news', newsController.getAll);
app.post('/api/news', newsController.createNew);

// Templates route:
app.get('/templates/:templateid', indexController.getTemplate);

var server = app.listen(6260, function() {
	console.log('Express server listening on port ' + server.address().port);
});
