var Beer = require('../models/beer.js');

var apiController = {
  addBeer: function(req, res){
    // 1. Store a reference to the submitted data
    var newBeer = req.body;

    // 1.5. Do any validation here

    // 2. Create a new Beer instance from the data
    var beer = new Beer(newBeer);

    // 3. Save the new instance
    beer.save(function(err, savedBeer){
      // 4. Once the save is completed, send the response
      res.send(savedBeer);
    });
  },

  deleteBeer: function(req, res){
    var toDelete = req.body.targetId;
    Beer.findByIdAndRemove(toDelete, function(err, result){
      // Assume success here:
      res.send('success');
    });
  }
};

module.exports = apiController;
