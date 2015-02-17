// CLIENT-SIDE ONLY
console.log('hello from the client');


// If we want jquery... (needs to be included in the templates somewhere)
$(document).on('ready', function() {
  $('h1').text('Modified by jQuery');
});