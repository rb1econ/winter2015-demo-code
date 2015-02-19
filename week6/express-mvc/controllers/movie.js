// Require the movie data
var ahnoldMovies = require('../models/movies.js');

// Our main movie controller:
// Contains route handlers for things
// that directly have to do with movies
var movieController = {

  /**
   * Method for viewing a specific movie, as passed by
   * the dynamic url parameter 'movieName'.
   * @param  {obj} req Request data
   * @param  {obj} res Response data
   */
	view: function(req, res){
    // Given that req.params contains information set
    // by the url itself (in the browser), we'll pull out
    // the target parameter string and ask our model to
    // find any movies that match. If a movie is found or not,
    // send it down to the view for rendering.
		var matchedMovie = ahnoldMovies.getByTitle(req.params.movieName);
		res.render('movie', matchedMovie);
	},

  /**
   * Handler for incoming post data that contains
   * information about submitting a new movie
   * @param {obj} req Request data
   * @param {obj} res Response data
   */
	submitMovie: function(req, res){
    // Call our addMovie helper from the model
    // and pass along any submitted information
		ahnoldMovies.addMovie(
			req.body.title,
			req.body.description,
			req.body.year,
			req.body.character,
			req.body.wasChoppa
		);

		// Send the user back to the homepage listing
		res.redirect('/');
	}
};

// Export our controller methods
module.exports = movieController;
