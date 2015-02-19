// Pull in underscore as a dependency
var _ = require('underscore');

// Define a class to represent each movie
var Movie = function(title, description, year, character, wasChoppa){
  this.title = title;
  this.description = description;
  this.year = year;
  this.character = character;
  this.wasChoppa = wasChoppa;
};

// Our starter list of movie instances
var movies = [
  new Movie('Predator', 'Defeats the alien, saves humanity', 1987, 'Dutch', true),
  new Movie('Commando', 'Action, ADVENTURE! BROMANCE DRAMA!', 1985, 'John Matrix', true),
  new Movie('Kindergarten Cop', 'He is a cop in Kindergarten', 1990, 'Det. John Kimble', false)
];

/**
 * Helper to find a movie in the array given the title to look for.
 * @param {string} title Title to find in the array
 */
var getMovieByTitle = function(title){
  // Use the underscore method to search through the array
  return _.find(movies, function(item){
    return title === item.title;
  });
};

/**
 * Helper for adding a new movie to the array
 * @param {string} title       Title of Movie
 * @param {string} description Description of movie
 * @param {string} year        Year of movie as string or number
 * @param {string} character   Character Arnold played
 * @param {string} wasChoppa   Was there a chopper? "on" or "off"
 */
var addMovie = function(title, description, year, character, wasChoppa){
  // Create a new instance of the movie class and push it to the array
  movies.push(new Movie(
    title, description,
    parseInt(year), character,
    wasChoppa === 'on'
  ));
};

// Make sure that any file that require's this file
// will have access to the functionality they might need.
module.exports = {
  movies: movies,
  getByTitle: getMovieByTitle,
  addMovie: addMovie
};
