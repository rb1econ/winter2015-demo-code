// Define a model for our movies...

var mongoose = require('mongoose');

// Declare a schema (blueprint) for our data
var movieSchema = mongoose.Schema({
  title: String,
  awards: [String]
});

// Use the schema to define a model
var Movie = mongoose.model('Movie', movieSchema);

// Create an instance of the Movie model
// var movieInstance = new Movie({
//   title: 'Star Wars, The'
// });
//
// // Save that instance to the DB
// movieInstance.save(function(err, result){
//   console.log('err:', err);
//   console.log('result:', result);
// });

// export our model
module.exports = Movie;
