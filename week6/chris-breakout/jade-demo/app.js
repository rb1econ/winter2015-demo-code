var express = require('express');
var bodyParser = require('body-parser');

var data = require('./data.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// 1. Check for static file matches
app.use(express.static(__dirname + '/public'));

// 2. Parse out any posted body content, then continue
app.use(bodyParser.urlencoded({extended: false}));

// 3. Check to see if requested url is '/'
app.get('/', function(req, res) {
	res.render('index', {
		students: data.studentList,
		instructors: data.instructorList
	});
});

// 4. Check to see if requested url is '/test/testing'
app.get('/test/testing', function(req, res){
	res.render('demo', {
		students: data.studentList,
		instructors: data.instructorList
	});
});

// 5. Check for posts to formHandle
app.post('/formHandle', function(req, res){
	console.log(req.body);
	res.send('Success! ' + req.body.name + ', ' + req.body.color);
});

// 6. Check for wildcard urls
app.get('/wildcard/:name/:color', function(req, res){
	res.send(req.params);
});

// 7. Check to see if we are looking at a specific student
app.get('/student/:studentId', function(req, res){
	for(var i = 0; i < data.studentList.length; i++){
		if(data.studentList[i].id === req.params.studentId){
			// match on name found!
			return res.render('student', data.studentList[i]);
		}
	}
	res.send('Not found!');
});

// 8. Otherwise, fall back to 404 page...

var server = app.listen(5241, function() {
	console.log('Express server listening on port ' + server.address().port);
});


// students.map(function(item){...})
