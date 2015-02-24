// CLIENT SIDE CODE

$(document).on('ready', function(){

  /*
  // Request some data from the server
  $.get('/data', function(data, status){
    // Log the response
    console.log('Data:', data);
    console.log('Status:', status);

    // Append the response to the DOM
    $('body').append('<p>' + data + '</p>');
  });
  */

  $('#update-btn').on('click', function(){
    console.log('Client Clicked!');

    // Make a request to the server from the client
    $.get('/data', function(data){
      // Server sent back some data
      console.log('Client data:', data);

      // Update our counter in the client side DOM
      $('#counter').text(data.counterClient);
    });
  });


  // Demonstration of polling
  /*
  setInterval(function(){
    // Make a request to the server from the client
    $.get('/data', function(data){
      // Update our counter in the client side DOM
      $('#counter').text(data.counterClient);
    });
  }, 1000);
  */


  // Handling a form submission
  $('#my-form').on('submit', function(e){
    // Prevent form from actually submitting itself
    e.preventDefault();

    // Get our actual typed message from input
    var message = $('#my-message').val();

    // Build an object using that message to send
    // to the server
    var dataFromClient = {
      messageFromClient: message
    };

    // Send the data to the server via a POST request
    // and attach the data object.
    $.post('/messageSubmit', dataFromClient, function(dataFromServer){
      console.log('Server:', dataFromServer);

      // Update the DOM
      $('#message-from-server').text(
        dataFromServer.fromClient.messageFromClient
      );
    });
  });
});
