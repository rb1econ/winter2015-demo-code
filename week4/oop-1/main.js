////////////////////////////////
// Object Oriented Javascript //
////////////////////////////////

/*
  Terminology:
    Class - The entire definition of our blueprint
            including properties and methods
    Constructor - The function that defines our initialization of an instance.
                  This is what 'new' will be called on.
    Instance - A specific construction of the blueprint. A specific cat vs. all cats.
*/

// This is our constructor, which also starts defining the entire class.
// The convention is that a variable that represents a class will start
// with a capital letter, in this case 'Cat' vs 'cat'. The constructor
// can also take in any number of parameters.

/**
 * Cat class
 * @param {string} color Color of the cat
 */
var Cat = function(color){
  // Set the color property of 'this'
  // cat to the color passed by the
  // parameter.
  this.color = color;
};

// We use the prototype to help separate out methods on our classes.

/**
 * Method that allows a cat to meow
 */
Cat.prototype.meow = function(){
  // Here, "this" will refer to whatever Cat instance
  // the method was called from.
  console.log(this.color + ' cat says "meow"');
};


// Create an instance of the Cat class:
var maceMostAnnoyingCatEver = new Cat('orange');

// Create another Cat instance:
var whiskers = new Cat('grey');

// Log out the information stored on the cat instance
console.log("maceMostAnnoyingCatEver:", maceMostAnnoyingCatEver);
console.log("whiskers:", whiskers);

/*
  In-Class Challenge:

  Create a quote class that has two properties: text and author.
  Take those values in as parameters to the constructor.

  Create an instance of the quote class and store it in a variable,
  then console.log the values of the text and author properties.


  BONUS: Define default values for the parameters if none are passed.
*/

/**
 * Quote Class: Hold information about quotes
 * @param {string} text   Text of the quote
 * @param {string} author Who said/wrote the quote
 */
var Quote = function(text, author){
  this.text = text || 'You should write a quote';
  this.author = author || 'Chris';
};

var greatQuote = new Quote('80% of the time it works all the time', 'Brian Fantana');
console.log("greatQuote.text:", greatQuote.text);
console.log("greatQuote.author:", greatQuote.author);

var defaultQuote = new Quote();
console.log("defaultQuote:", defaultQuote);


/*

InClass Challenge II:

Update your quote class to include two methods:

  1. countWords: Returns the number of words in the quote text
  2. create: Return a new DOM element created by jQuery to represent the quote
      <div class="quote">
        <p>text of the quote</p>
        <p>- author of the quote</p>
      </div>

Log the results of calling countWords on a quote
Use jQuery to append your quote to the page.

*/


/**
 * Quote Class: Hold information about quotes
 * @param {string} text   Text of the quote
 * @param {string} author Who said/wrote the quote
 */
var Quote = function(text, author){
  this.text = text || 'You should write a quote';
  this.author = author || 'Chris';
};

/**
 * Get the number of words in the quote's text
 * @return {number} Number of words in quote text
 */
Quote.prototype.countWords = function(){
  var quoteText = this.text;
  var words = quoteText.split(' ');
  var wordCount = words.length;
  return wordCount;
};

/**
 * Generate a DOM element via jQuery
 * @return {jQuery} DOM element created
 */
Quote.prototype.create = function(){
  this.$el = $('<div>')
    .addClass('quote')
    .append('<p class="quote-text">' + this.text + '</p>')
    .append('<p class="quote-author">- ' + this.author + '</p>');

  return this.$el;
};

/**
 * Change the text color of the given quote's
 * DOM element
 * @param  {string} color Color value
 */
Quote.prototype.changeColor = function(color){
  this.$el.css('color', color);
};

/**
 * Helper for changing the text of the quote instance,
 * both at the property level and at the DOM level
 * @param  {string} newText Text value to change to
 */
Quote.prototype.changeText = function(newText){
  // Update the instance property value
  this.text = newText;

  // Update the DOM element as well
  this.$el.find('.quote-text').text(this.text);
};

// Create an instance of the Quote class
var greatQuote = new Quote('80% of the time it works all the time', 'Brian Fantana');
console.log('Count:', greatQuote.countWords());

// Append the quote to the DOM
$('body').append(greatQuote.create());


// Will update the text and DOM element that represents this quote
greatQuote.changeText('My changed quote text');

/*

  InClass Challenge III:

  Update your quote class to include a changeText method that
  will update the text property of the instance AND will
  update the text on the DOM element as well.

  (solution is shown as part of above)

*/