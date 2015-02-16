/*
  InClass Challenge:

  Using node, given a string as a command line argument:
    node string-reverse.js "this is a string"

  Console.log the result of reversing that string.
  "gnirts a si siht"
*/

// console.log(process.argv);

// Process argv is an array, so we can access
// items directly from the node command
var inputStr = process.argv[2];
// console.log(inputStr);

var reversedStr = inputStr.split('').reverse().join('');
console.log(reversedStr);