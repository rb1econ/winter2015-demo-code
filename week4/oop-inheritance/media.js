/*
  
  InClass Challenge:

  Create a Media class that has a name property
  and a view method that logs "Viewing [media name]"

  Create a Picture class that extends Media and adds
  a property for image URL and has a create method
  that renders the image to the html page.

*/

/**
 * Class to handle different types of viewable media
 * @param {string} name The name of the media item
 */
var Media = function(name){
  this.name = name;
};

/**
 * Allow users to view a media item
 */
Media.prototype.view = function(){
  console.log('Viewing ' + this.name);
};


// Test the Media class
// var myMedia = new Media('cat pic');
// console.dir(myMedia);


/**
 * Handle images based on Media class
 * @param {string} name     Name of picture
 * @param {string} imageUrl URL of picture
 */
var Picture = function(name, imageUrl){
  // Run the Media constructor function on 'this'
  Media.call(this, name);

  // Set up the custom picture properties that are
  // unique or need to override the base class'
  this.imageUrl = imageUrl;
};

// Inherit from Media:
Picture.prototype = new Media();
Picture.prototype.constructor = Picture;

/**
 * Create a DOM element to use in-page
 * @return {jQuery} jQuery wrapped image DOM element
 */
Picture.prototype.view = function() {
  var img = $('<img>')
    .attr('src', this.imageUrl);

  var h1 = $('<h1>')
    .text(this.name);

  this.$el = $('<div>')
    .append(h1, img);

  // Helpful for future chaining
  return this.$el;
};


// Running test here:
var catPic1 = new Picture(
  'Cute Praying Kitten',
  'http://qtpi.org/wp-content/uploads/2014/04/kitten-cute-pictures.jpg'
);

var catPic2 = new Picture(
  'Cat in Hat',
  'https://tyrannyoftradition.files.wordpress.com/2012/05/cutest-kitten-hat-ever-13727-1238540322-17.jpg'
);


var picElement = catPic1.view();
$('body').append(picElement);

$('body').append(catPic2.view());