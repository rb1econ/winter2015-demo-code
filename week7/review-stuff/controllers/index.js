var Pastry = require('../models/pastry.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	}
};

module.exports = indexController;
