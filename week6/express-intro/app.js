var express = require('express');

// Initialize the express application
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Routing
app.get('/', function(req, res) {
	// Render the index.jade file
	res.render('index');
});

app.get('/about', function(req, res){
	res.render('about');
});

// Start the server
var server = app.listen(4479, function() {
	console.log('Express server listening on port ' + server.address().port);
});
