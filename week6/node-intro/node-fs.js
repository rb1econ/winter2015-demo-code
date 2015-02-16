// Require the file-system core module
var fs = require('fs');

// Read a file synchronously using the utf-8 encoding
var loremText = fs.readFileSync('./test.txt', 'utf-8');
console.log(loremText);

// Write a file synchronously back to the file-system
var reversedLorem = loremText.split('').reverse().join('');
console.log(reversedLorem);

fs.writeFileSync('./test-modified.txt', reversedLorem);