var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// This is important when dealing with POST data
app.use(bodyParser.urlencoded({extended: false}));

// Handle the homepage route by rendering the
// index view to whoever requested the page.
app.get('/', function(req, res) {
	res.render('index');
});

// Handle all POSTs to the /handleForm route
app.post('/handleForm', function(req, res){
  // This happens in terminal
  console.log(req.body);

  // Render the jade 'success' file and pass
  // along information to the view
  res.render('success', {
    user: req.body.username
  });
});

// Start the actual server on a given port
var server = app.listen(9386, function() {
	console.log('Express server listening on port ' + server.address().port);
});
