var http = require('http');

http.createServer(function(request, response){
  console.log('A request came in:', request);

  // Generate names as li's
  var names = ['Chris', 'Raphael', 'Max'];
  var nameStr = names.map(function(name){
    return '<li>' + name + '</li>';
  }).join('');

  // Send some data back
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Hello World</h1>'+
    '<p>this is a cool paragraph</p>' +
    '<ul>' + nameStr + '</ul>'
  );

}).listen(3000);

console.log('Server listening on port 3000');

/*
  InClass Challenge:

  Modify the server code to send back some HTML content:
  h1 - Hello World
  p - This is a cool paragraph

*/
