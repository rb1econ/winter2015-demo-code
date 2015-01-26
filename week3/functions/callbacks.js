// setTimeout(callback, time (in milliseconds));
var consoleLogger = function(){
  console.log('consoleLogger:', 'I HAVE BEEN CALLED');
};

// pass a reference to consoleLogger
// We don't want to call it here, because it
// will use the return value instead of the function
// itself!
setTimeout(consoleLogger, 5 * 1000);
console.log('I am called literally right after setTimeout');


// setInterval(callback, time ms);
var count = 0;
var intervalId = setInterval(function(){
  console.log('Time is running out...', count++);
}, 1000);

// end the interval by calling 'clearInterval(intervalId);'

// just so it doesn't go forever...
setTimeout(function(){
  clearInterval(intervalId);
}, 4 * 1000);


// Given a list of names, sort the list alphabetically by the
// last letter of each value.
var names = ['Arthur', 'Dw', 'Buster', 'Mr. Ratburn'];

// Here we pass an anonymous function as a callback to the
// sort method. Sort will use this function to compare
// values while sorting the given array.
var sorted = names.sort(function(a,b){
  var lastA = a[a.length - 1];
  var lastB = b[b.length - 1];
  // console.log(lastA, lastB);
  if(lastA === lastB) return 0;
  if(lastA > lastB) return 1;
  if(lastA < lastB) return -1;
});

console.log('Names:', sorted);