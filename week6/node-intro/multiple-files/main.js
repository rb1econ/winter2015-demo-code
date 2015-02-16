// Load in the file in this directory called
// utility.js and store a reference to it in
// the adder variable. Make sure this starts
// with the './' if you are talking about a local file
var utility = require('./utility.js');

console.log(utility.adder(5, 10));
console.log(utility.subtracter(20, 10));