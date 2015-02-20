// MAIN
var timeoutThing = require('./timeoutThing.js');

timeoutThing('Hello world', function(err, data){
  if(err){
    console.log('Err!', err);
  } else {
    console.log('Duration was ' +
      data.duration + ' and the message was ' +
      data.message
    );
  }
});
