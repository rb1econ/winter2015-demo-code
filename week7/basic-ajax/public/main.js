var onAddNewBeer = function(e){
  e.preventDefault();

  // Get the data from the form and submit to server
  var clientData = {
    name: $('#add-beer .beer-name').val(),
    brewer: $('#add-beer .beer-brewer').val()
  };

  // 3 arguments:
  //    1: URL to go to
  //    2: Data to send [optional]
  //    3: Function to call when the response is received
  $.post('/api/addBeer', clientData, function(dataFromServer){
    $('#beer-list').append('<li>' + dataFromServer.name + '</li>');
  });
};

$(document).on('ready', function(){
  $('#add-beer').on('submit', onAddNewBeer);
});
