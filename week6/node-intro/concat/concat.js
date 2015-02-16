/*  BONUS:

    Concat node app:

    Create a node application that will concatenate any number
    of input files into a single output (separate with a new line).

    node concat.js output.txt input1.txt input2.txt input3.txt
*/

var fs = require('fs');

var targetFileName = process.argv[2];

var inputFiles = process.argv.slice(3);

var combined = inputFiles.map(function(fileName){
  return fs.readFileSync(fileName, 'utf-8');
}).join('\n');

fs.writeFileSync(targetFileName, combined);