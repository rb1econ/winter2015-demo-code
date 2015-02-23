var Movie = require('../models/movie.js');

var indexController = {
	index: function(req, res) {
		// Pass down the entire list of movies
		// in our database
		Movie.find({}, function(err, results){
			console.log('err:', err);
			console.log('results:', results);

			// Pass the results to our jade template
			// as the variable "movies"
			res.render('index', {
				movies: results
			});
		});
	},

	movieSubmit: function(req, res){
		var submittedData = req.body;

		// Create a new movie instance with the submitted
		// data from the form
		var newMovie = new Movie({
			title: submittedData.title,
			awards: submittedData.awards.split(',')
		});

		// Shortcut for just directly saving posted
		// body to the DB
		// var newMovie = new Movie(req.body);

		// Save that movie instance to the DB
		newMovie.save(function(err, result){

			// Once the save is completed, send
			// the resulting object down to the
			// client browser.
			// 		res.send(result);

			// So that the user doesn't
			// see the intermediate data,
			// just send them back to the main list
			res.redirect('/');
		});
	}
};

module.exports = indexController;
