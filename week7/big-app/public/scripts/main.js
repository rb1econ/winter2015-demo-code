// CLIENT-SIDE

/**
 * Handle submission of the new beer form
 */
var onBeerSubmit = function(e){
  // Prevent default submission behavior
  e.preventDefault();

  // Get data from form inputs:
  //  The keys of this object need to match
  //  up with the keys in our schema because
  //  we are just directly storing the submitted
  //  object into the database with req.body
  //  on the server-side.
  var newBeerData = {
    name: $('#beer-name').val(),
    ABV: parseFloat($('#beer-abv').val()),
    type: $('#beer-type').val(),
    brewer: $('#beer-brewer').val()
  };

  // Reset the form easily
  this.reset();

  // Add validation here if necessary

  // If the data is good, let's make an ajax call
  $.post('/api/addBeer', newBeerData, function(dataFromServer){
    console.log('DataFromServer:', dataFromServer);

    // Add the new beer to the list
    // $('#beer-list').append(
    //   '<li>' + dataFromServer.name + '</li>'
    // );

    // Clone the first beer in the list:
    //  Works in a pinch, but if there are no beers
    //  in the list to get, then this will fail
    var newBeerEl = $('.beer').first().clone();
    newBeerEl.find('strong').text(dataFromServer.name);
    newBeerEl.attr('data-id', dataFromServer._id);
    $('#beer-list').append(newBeerEl);
  });
};


/**
 * Handle clicking "delete" on any beer in the list
 */

var beerDelete = function(e){
  e.preventDefault();

  var originalBeerElement = $(this).closest('.beer');
  var targetId = originalBeerElement.attr('data-id');

  $.post('/api/deleteBeer', {targetId: targetId}, function(dataFromServer){
    // When a success response is sent back
    originalBeerElement.remove();
  });
};


// Initialize the event listeners
$(document).on('ready', function(){

  // When submitting the new-beer form,
  // use AJAX to post the data
  $('#new-beer').on('submit', onBeerSubmit);


  // Handle deletion clicks
  $(document).on('click', '.delete', beerDelete);

});
