var mongoose = require('mongoose');

var pastrySchema = mongoose.Schema({
  name: String,
  filling: String,
  calories: Number
});

var Pastry = mongoose.model('Pastry', pastrySchema);

// Create a new instance of a Pastry:
//
// var chocoCroissant = new Pastry({
//   name: 'Chocolate Croissant',
//   filling: 'Chocolate',
//   calories: 20000
// });
//
// chocoCroissant.save();

// Updating a document by finding it first:
//
// Pastry.findOne({filling: 'Chocolate'}, function(err, pastry){
//   console.log('Result:', pastry);
//
//   pastry.calories = "500";
//
//   pastry.save();
// });

// Updating a document by finding AND updating:
//
// Pastry.findByIdAndUpdate(
//   '54ecfeb901d9eb935b9a70c2',
//   {$set: {
//     calories: 10,
//     filling: 'Creme'
//   }},
//   function(err, doc){
//     console.log(doc);
//   }
// );

// Remove all documents with a creme filling.
Pastry.remove({filling: 'Creme'}, function(err, totalDeletions){
  console.log(arguments);
});

module.exports = Pastry;
