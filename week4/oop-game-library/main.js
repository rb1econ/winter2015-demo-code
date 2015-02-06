/**
 * Contains information about individual games
 * @param {string} title    Title of the game
 * @param {string} genre    Genre of the game
 * @param {string} platform Platforms supported
 */
var Game = function(title, genre, platform){
  this.title = title;
  this.genre = genre;
  this.platform = platform;
};

/**
 * Render a DOM element for the given instance of Game
 * @return {jQuery} jQuery dom element
 */
Game.prototype.render = function () {
  var gameList = $('<ul>')
    .append('<li><strong>' + this.title + '</strong></li>')
    .append('<li>' + this.genre + '</li>')
    .append('<li>' + this.platform + '</li>');

  this.$el = $('<div>')
    .addClass('game')
    .append(gameList);

  return this.$el;
};

/**
 * Contains a list of games
 * @param {string} title Title of collection
 */
var GameLibrary = function(title){
  this.title = title;
  this.games = [];
};

/**
 * Render an entire library and all its games
 * @return {jQuery} jQuery dom element
 */
GameLibrary.prototype.render = function () {
  // Renders list of games
  var renderedGames = this.games.map(function(item){
    return item.render();
  });

  // Renders an add-game form
  var addGameForm = $('<form>')
    .append('<input type="text" class="game-title" placeholder="Title">')
    .append('<input type="text" class="game-genre" placeholder="Genre">')
    .append('<input type="text" class="game-platform" placeholder="Platform">')
    .append('<input type="submit">');

  // Render the base game-library element
  this.$el = $('<div>')
    .addClass('game-library')
    .append('<h3>' + this.title + '</h3>')
    .append($('<div class="games">').append(renderedGames))
    .append(addGameForm);


  // Handle submission of new game form by adding the game to the
  // library and re-rendering the game list.
  var originalLibrary = this;
  addGameForm.on('submit', function(e){
    e.preventDefault();

    // Grab form values
    var title = $(this).find('.game-title').val();
    var genre = $(this).find('.game-genre').val();
    var platform = $(this).find('.game-platform').val();

    // Generate a new game instance
    var nGame = new Game(title, genre, platform);

    // Push the new game into the library
    originalLibrary.games.push(nGame);

    // Clear the current game dom list and
    // append the new set of games
    originalLibrary.$el.find('.games')
      .empty()
      .append(originalLibrary.games.map(function(item){
        return item.render();
      }));
  });

  // Finally, return a reference to the core library dom element
  return this.$el;
};



// Create some game instances
var halo = new Game('Halo', 'fps', 'xbox');
var chronoTrigger = new Game('Chrono Trigger', 'jRPG', 'snes');
var myLibrary = new GameLibrary('Charles\'s Games');
myLibrary.games.push(halo);
myLibrary.games.push(chronoTrigger);
console.log(myLibrary);

var ocarina = new Game('Zelda: Ocarina of Time', 'action adventure', 'n64');
var warOfMine = new Game('This War of Mine', 'depressing', 'pc');
var chrisLibrary = new GameLibrary('Chris\'s Library');
chrisLibrary.games.push(ocarina);
chrisLibrary.games.push(warOfMine);
console.log(chrisLibrary);


$(document).on('ready', function(){
  $('body').append(
    myLibrary.render(),
    chrisLibrary.render()
  );
});
