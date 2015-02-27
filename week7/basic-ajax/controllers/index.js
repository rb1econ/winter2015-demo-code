var Beer = require('../models/beer.js');

var indexController = {
	index: function(req, res) {
		Beer.find({}, function(err, results){
			res.render('index', {
				beers: results
			});
		});
	}
};

module.exports = indexController;
