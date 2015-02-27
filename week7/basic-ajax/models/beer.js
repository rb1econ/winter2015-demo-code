var mongoose = require('mongoose');

var beerSchema = mongoose.Schema({
  name: String,
  brewer: String
});

var Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;
