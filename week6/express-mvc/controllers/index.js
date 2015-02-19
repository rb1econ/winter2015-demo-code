// Import model data
var ahnoldMovies = require('../models/movies.js');

// Our root index controller:
// Contains handlers for any common functionality
// such as the homepage or about page.
var indexController = {

	/**
	 * Homepage handler
	 * @param  {obj} req Request data
	 * @param  {obj} res Response data
	 */
	index: function(req, res) {
		// Render the homepage given a list of
		// movies to show.
		res.render('index', {
			movies: ahnoldMovies.movies
		});
	}
};

// Export all the index methods out to any
// file that requires this one.
module.exports = indexController;
