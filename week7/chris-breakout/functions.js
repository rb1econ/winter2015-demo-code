/*
  This is going to be a bit confusing, so
  if you have residual questions, let us
  know!
 */

// OUR-MONGOOSE.js (module)
var find = function(query, onComplete){
  // complex time-taking operation
  setTimeout(function(){
    var results ='Result of query ' + query;
    console.log(results);

    onComplete(results);
  }, Math.random() * 3000);
};


// app.js

var test = 'look for stuff';
var something = function(data){
  // data aka
  // results aka
  // 'Result of query ' + query aka
  // 'Result of query ' + test aka
  // 'Result of querylook for stuff'
  console.log('Data:', data);
};
find(test, something);
console.log('when?');









// find(test, function(data){
//   console.log(data + '!!!1111!1!');
// });
//








var adder = function(a, b){
  // a aka x aka 'test'
  // b aka y aka 10
  console.log( a + b );
};


var x = 'test';
var y = 10;

adder(x, y);


// function anything(anything or nothing){}







var query = Pastry.find({filling: 'Chocolate'})
  .populate('baker');

query.exec(function(err, results){

});
