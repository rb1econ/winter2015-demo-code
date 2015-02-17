// App js is a SERVER ONLY file that is being executed
// by node itself.
var express = require('express');

// This is for handling form submissions via the POST method
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// This bit of code allows us to serve files directly
// from a given folder. In this case, the public folder.
// Express will check incoming requests against files
// in that folder. If a match is made, it will send that
// file down and halt the chain. If no match is found, it
// will continue along the chain.
app.use(express.static(__dirname + '/public'));

// The next step in the chain is to parse out any
// body content from any submitted forms, just in case.
// This will inject a 'body' property into the req parameter
// of any of the following handlers.
app.use(bodyParser.urlencoded({extended: false}));

// Declare some variables...
var myCurrentUsername = 'Chris';
var myCurrentDescription = 'I am pretty cool';

// Handle the home page request by sending
// jade references to a few variables.
app.get('/', function(req, res) {
	res.render('index', {
    username: myCurrentUsername,
    description: myCurrentDescription
  });
});

app.get('/about', function(req, res){
  res.render('about');
});

// Start the server on port 8188
var server = app.listen(8188, function() {
	console.log('Express server listening on port ' + server.address().port);
});
