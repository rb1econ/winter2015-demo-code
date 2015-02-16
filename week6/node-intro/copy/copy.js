/*
  InClass Challenge:

  Create a node application that will copy the contents of
  one file into another.

  Ex:
    node copy.js input.txt output.txt

  Read in contents from input1, save them to output.txt


  BONUS:

    Concat node app:

    Create a node application that will concatenate any number
    of input files into a single output (separate with a new line).

    node concat.js output.txt input1.txt input2.txt input3.txt
*/

// Need access to the filesystem, so...
var fs = require('fs');

// Grab the filenames from the process
var sourceFileName = process.argv[2];
var targetFileName = process.argv[3];

var sourceContents = fs.readFileSync(sourceFileName, 'utf-8');

// Write to the target file name and pass in the source contents
fs.writeFileSync(targetFileName, sourceContents);