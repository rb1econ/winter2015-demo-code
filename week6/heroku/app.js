/**
 * To get our app on heroku, take a look at:
 * 	http://winter2015-refactoru-students.herokuapp.com/resources/how-to-heroku
 */

var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('index');
});

// Use heroku's port if it is specified.
// Otherwise use our own local port.
var port = process.env.PORT || 9919;
var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
