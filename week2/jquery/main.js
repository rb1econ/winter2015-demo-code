// Wait for the DOM to be loaded and ready
// *NOTE*
//    This can be shorthanded, exposing another
//    polymorphic ability of the $ variable.
//    You may see this as:
//      $(function(){
//        ...
//      })
//    Just know that this is the same thing.
//    By using the "on" format, we are very
//    clear about what is happening, plus it keeps
//    a consistency in how we define events!
$(document).on('ready', function() {
  
  ///////////////
  // Selectors //
  ///////////////
  
  /*
    $('p')         -> select all paragraph tags
    $('.special')  -> select all elements with classname "special"
    $('#my-el')    -> select the element with id "my-el"
    $('h1, p')     -> select all h1's and p tags
    $('p strong')  -> select only strong tags that exist inside paragraphs
    $('p > strong')-> direct-descendent selection of strong tags

    Check if there are any results:
      $('p').length -> return the number of items found
  */

  // Declare the selector search string as a
  // variable for later access
  var mySelector = 'p';
  console.log(mySelector);

  // Declare a variable to store the results of
  // running the selector (which is from the above variable),
  // grabbing the results, and storing them into the variable.
  var results = $(mySelector);
  console.log(results);


  //////////////////
  // Manipulation //
  //////////////////
   
  /*
    .width()        -> get width
    .width(val)     -> set width
    .height()       -> get height
    .height(val)    -> set height
    .css(name)      -> get the value of that css property
    .css(name, val) -> set the value of the property
    .css(objProps)  -> use an object to set the values
    .show()         -> set display to either block, inline, or inline-block
    .hide()         -> set display to none
  */

  // The css method can take in an object,
  // which makes it easier to change multiple
  // properties at once.
  $('p').css({
  color: 'blue',
  backgroundColor: 'peachpuff'
  });


  ///////////////
  // Animation //
  ///////////////

  /*
    (where 't' is 'time' in milliseconds)

    .show(t)              -> show the elements over time
    .hide(t)              -> hide the elements over time
    .fadeIn(t)            -> fade elements in
    .fadeOut(t)           -> fade out
    .fadeToggle(t)        -> fade in if hidden, out if showing
    .slideUp(t)           -> slide elements up (hide)
    .slideDown(t)         -> slide down (show)
    .slideToggle(t)       -> slide down if hidden, down if showing
    .animate(objProps, t) -> change all the given props (object) over time
  */
 

  ////////////////////////
  // Class Manipulation //
  ////////////////////////

  /*
    (changing the class doesn't need the '.', unlike selectors)

    .addClass(name)    -> add the class to the result set
    .removeClass(name) -> remove the class while keeping any others
    .toggleClass(name) -> add if needed, remove if it exists
    .hasClass(name)    -> return a boolean whether or not the element has the class
  */
 
  //////////////////////////
  // Content Manipulation //
  //////////////////////////

  /*
    .html()        -> get the html content of the elements (includes tags)
    .html(htmlStr) -> set the html content of elements
    .text()        -> get the text content of elements (without any html tags)
    .text(textStr) -> set text of elements (html is escaped)
    .val()         -> *INPUTS* get the value of the inputs
    .val(textStr)  -> *INPUTS* set the value of the inputs
  */
 
  ////////////////////////////
  // Attribute Manipulation //
  ////////////////////////////

  /*
    .attr(name)      -> get an attribute value by name
    .attr(name, val) -> set an attribute to the given value
  */
});
