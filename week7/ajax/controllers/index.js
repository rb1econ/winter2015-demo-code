// SERVER SIDE CODE

var counterServer = 0;

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	data: function(req, res){
		res.send({
			'counterClient': counterServer
		});

		counterServer++;
	},

	messageSubmit: function(req, res){
		console.log('Server:', req.body);
		// Mirror the send packet back to the client
		res.send({
			fromClient: req.body,
			fromServer: 'Hey from server! You look great!'
		});
	}
};

module.exports = indexController;
