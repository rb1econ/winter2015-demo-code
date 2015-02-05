/////////////////////////////////////////////////////////
// Book Management Library:                            //
//    Allow users to manage their libraries of books   //
//    with any number of books. It should have systems //
//    in place for rendering the books out to the DOM. //
//    It should also handle ratings for each book      //
//    in each library.                                 //
/////////////////////////////////////////////////////////


/**
 * Information about a single book
 * @param {string} title  Title of book
 * @param {string} author Author of book
 * @param {string} ISBN   ISBN of book
 */
var Book = function(title, author, ISBN){
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.rating = 0;
};

/**
 * Render a DOM element for the book instance
 * @return {jQuery} jQuery DOM element
 */
Book.prototype.render = function() {
  this.$el = $('#book-template').clone()
    .attr('id', '');

  // Inject instance data into template
  this.$el.find('.book-title').text(this.title);
  this.$el.find('.book-author').text(this.author);

  // Hook up the stars:
  //  First with the mouseOver and then with the click.
  //  Click needs to keep access to "this," which is
  //  the current book instance, but jQuery will override
  //  that value as a helper. We use "bind" to force this
  //  to stay as the book and not represent the clicked item.
  this.$el.find('.rating li')
    .on('mouseover', this._starOver)
    .on('click', this._starClick.bind(this));

  return this.$el;
};

/**
 * Internal handler for hovering over a rating star
 */
Book.prototype._starOver = function() {
  // Log out the index of the star within the common parent
  var currentIndex = $(this).index();

  // First, remove the active class from all items in
  // this current book's rating block
  $(this).parent().children().removeClass('active');

  // Set all stars less-than the current star to have
  // the active class
  $(this)
    .parent()
    .children(':lt(' + (currentIndex + 1) + ')')
    .addClass('active');
};

/**
 * Internal handler for clicking on a rating star
 * @param  {object} e Event arguments from jQuery
 */
Book.prototype._starClick = function(e) {
  var currentBook = this;
  var ratingStar = $(e.currentTarget);
  var rating = ratingStar.index() + 1;
  currentBook.rating = rating;
  console.log(currentBook);
};


/**
 * Library of books
 * @param {string} ownerName Who owns this library?
 */
var Library = function(ownerName){
  this.ownerName = ownerName;
  this.books = [];
};

/**
 * Helper for adding books to a given library
 * @param {...} books Books to add
 */
Library.prototype.addBooks = function() {
  // concat is non-destructive, so we need to re-assign
  // to its result. This overrides the original value
  // with the new set
  this.books = this.books.concat([].slice.call(arguments));

  // If this was set up for just being 'addBook,' we
  // could just use:
  // this.books.push(book);
};

/**
 * Render a library, which, in turn, will render
 * its books.
 * @return {jQuery} jQuery DOM element representing the library
 */
Library.prototype.render = function() {
  this.$el = $('#library-template').clone()
    .attr('id', '');

  // Inject instance data into template
  this.$el.find('.owner-name').text(this.ownerName);

  // Render each book in this library
  this.$el.find('.books').empty().append(
    this.books.map(function(book){
      // Render the individual book and
      // store it in the mapped array
      return book.render();
    })
  );

  return this.$el;
};



// Library 1:
var foxInSocks = new Book('Fox in Socks', 'Dr. Seuss', '12345');
var gobletOfFire = new Book('Goblet of Fire', 'J.K. Rowling', '678910');
var prisonerOfAzkaban = new Book('Prisoner of Azkaban', 'J.K. Rowling', '678910');
var myLibrary = new Library('Chris\' Library');
myLibrary.addBooks(foxInSocks, gobletOfFire, prisonerOfAzkaban);


// Library 2:
var bookOfMormon = new Book('Book of Mormon', 'Joseph Smith', '0');
var javascriptForDummies = new Book('Javascript for Dummies', '@metaraine', '99999999');
var alonsLibrary = new Library('Alon\'s Library');
alonsLibrary.addBooks(bookOfMormon, javascriptForDummies);


$(document).on('ready', function(){

  // Render our libraries
  $('.libraries').append(myLibrary.render());
  $('.libraries').append(alonsLibrary.render());

});
