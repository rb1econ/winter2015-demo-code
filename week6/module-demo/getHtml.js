var request = require('request');

module.exports = function(url, onComplete){
  console.log('Called getHtml function');
  // onComplete('this is an error', 'this is some data as html');
  request(url, function(err, response, html){
    if(err){
      return onCompete(err, null);
    }
    onComplete(err, html);
  });
};
