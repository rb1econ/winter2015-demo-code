var doAThing = function(strThing){
  console.log('doAThing:', strThing);
};

// Passing fewer arguments than parameters,
// the missing parameters will be set as 'undefined'
doAThing();



var magicCode = function(strMagic, numCount){
  console.log('magicCode:', strMagic);
  console.log('magicCode:', numCount);

  // Arguments represents all arguments passed to
  // this function, including the ones that are not
  // named as parameters. It is NOT a normal array.
  console.log('magicCode: arguments:', arguments);
};


// Passing too many arguments won't break your code. If you
// don't have matching parameter names, the other values will
// essentially be ignored. However, they can still be accessed
// via the 'arguments' keyword, which is found in the magicCode
// function above.
magicCode('test', 10, 15, null);



var adder = function(a, b){
  // Set a default value for this
  // parameter. Converts the first part
  // to a boolean (b, in this case). If it
  // translates to true, it will use the
  // original value of (b). If it translates
  // to false, it will use the value passed
  // after the ||.
  b = b || 'things';

  return a + ' ' + b;
};

// Calling adder with not enough arguments
console.log( 'adder:', adder('test') );

// Calling adder with all the right junk in all the right places
console.log( 'adder:', adder('test', 'world') );

