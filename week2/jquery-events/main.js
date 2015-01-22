// $(function(){})
$(document).on('ready', function() {
  // $(selector).on(name of event, callback);

  
  var clickIndex = 0;

  // Listen for any clicks on our button
  $('.click-btn').on('click', function(){
    // When a click is detected on the element(s),
    // jQuery will invoke this function
    console.log('clicked:', clickIndex++);
  });

  // This will be invoked in the order it was registered
  $('.click-btn').on('click', function(){
    console.log('I WAS ALSO CLICKED!!');
  });


  $('a').on('click', function(e){
    console.log('Clicked a link:', e);

    // Prevent the browser from doing any default behavior on
    // the link that was clicked
    e.preventDefault();

    // jQuery will respond to false return values by preventing default
    // return false;
  });


  // Create a reusable array of colors
  var colors = ['#f00', '#0f0', '#000', '#fff', 'peachpuff'];

  $('.who-btn').on('click', function(e){
    console.log('Clicked!', this);
    console.log($(this).text());

    // Set the color of the clicked button to be a random color
    $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);

    // on clicking a button, add another button!
    $('#button-container').append('<button class="who-btn">BUTTON</button>');
  });
  

  ////////////////////////
  // Event Delegation!! //
  ////////////////////////
  
  /*
    The Problem:
      We are adding dynamic elements, but because the jQuery
      selector won't automatically watch the DOM for changes and
      re-run itself, we need to handle that somehow. Since
      our new elements won't automatically receive the event
      registration, we'll use a delayed method to check for matches
      at event time instead of run time.
   */

  // Uncomment the following code to see an example
  // of what is going on behind the scenes.
  
  /*$(document).on('click', function(e){
    var current = $(e.target);
    if(current.hasClass('who-btn')){
      console.log(e.target);
      $('#button-container').append('<button class="who-btn">BUTTON</button>');
    }
  });*/

  // Delegated event:
  //  This will delay the running of the selector (the second
  //  argument) until CLICK TIME as opposed to document ready.

  // $('.who-btn').on('click', function(){});
  $(document).on('click', '.who-btn', function(){
    console.log('Clicked a who-btn', this);
    $('#button-container').append('<button class="who-btn">BUTTON</button>');
  });
});


///////////////////
// COMMON EVENTS //
///////////////////

/*
  click     mousedown mouseup   keydown keyup
  mouseover mouseout  mousemove resize  scroll
  focus     blur      change    submit
 */

///////////
// RECAP //
///////////

/*

  Normal event listener:
    $(selector).on(event name, callback);

  Shortcut example (only some events have shortcuts):
    $(selector).click(callback);

  Delegated event listener:
    $(static context selector, like document).on(event name, regular selector, callback);
  
 */

// the end