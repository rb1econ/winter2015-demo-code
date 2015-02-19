// Set up the base app
var express = require('express');
var bodyParser = require('body-parser');

// Require both of our controller files
var indexController = require('./controllers/index.js');
var movieController = require('./controllers/movie.js');

// Initialize the express application
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Support public static files (though we
// don't actually use them yet)
app.use(express.static(__dirname + '/public'));

// Support handling post data
app.use(bodyParser.urlencoded({extended: false}));

// Route for the home page
app.get('/', indexController.index);

// Route for viewing a specific movie by title
app.get('/view/:movieName', movieController.view);

// Route for handling form submissions of new movies
app.post('/submitMovie', movieController.submitMovie);

// Start the server!
var server = app.listen(8279, function() {
	console.log('Express server listening on port ' + server.address().port);
});
