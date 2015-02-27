var Beer = require('../models/beer.js');

var apiController = {
  addBeer: function(req, res){
    var beerData = req.body;
    var newBeer = new Beer(beerData);
    newBeer.save(function(err, result){
      res.send(result);
    });
  }
};

module.exports = apiController;
