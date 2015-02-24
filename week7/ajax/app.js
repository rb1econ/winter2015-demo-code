var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/data', indexController.data);

// HANDLE incoming POST requests to /messageSubmit
app.post('/messageSubmit', indexController.messageSubmit);

var server = app.listen(3336, function() {
	console.log('Express server listening on port ' + server.address().port);
});
