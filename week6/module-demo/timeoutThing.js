// MODULE
module.exports = function(message, onComplete){
  console.log('Module:', arguments);
  var duration = Math.random() * 3000;
  setTimeout(function(){
    var hasError = Math.random() > 0.5;
    if(hasError){
      onComplete('Error found!', null);
    } else {
      onComplete(null, {
        duration: duration,
        message: message
      });
    }
  }, duration);
};
