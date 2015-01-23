$(document).on('ready', function() {
  // Generate a new DOM element by giving
  // an html string to the $() function.
  // This opens up our ability to CHAIN
  // methods because most of the jQuery
  // methods will return the selector set
  // they were given.
  // $('<div>') -> create a new dom element
  // $('h1')    -> select all h1s on the page
  var newDiv = $('<div>')
    .text('Hello world')
    .addClass('my-element')
    .css({
      color: 'red',
      fontSize: 20
    });

  // Select our h1 that already
  // exists on the page.
  var h1 = $('h1');

  // Append: inside and below
  h1.append('Hello World');

  // Prepend: inside and above
  h1.prepend('!!!!');

  // Before: outside and above
  h1.before(newDiv);

  // After: outside and below
  h1.after('<h2>I am after</h2>');

  // Clone: duplicate the given element (not automatically added to DOM)
  var altDiv = newDiv.clone();

  // Inject our cloned div into the DOM
  h1.after(altDiv);

  // Empty: remove all contents within the container
  // $('.container').empty();
  
  // Remove: remove the container and all its children
  // $('h1').remove();
});


// Just a fun snippet of code:
//  $(this).addClass('active').siblings().removeClass('active');