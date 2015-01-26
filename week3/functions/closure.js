// Here we define a function that takes in a single parameter 'x',
// and store a reference to the function body in the variable 'makeAdder'
var makeAdder = function(x){

  // We just print out the value of 'x' as soon as this
  // line is executed by calling 'makeAdder'
  console.log('Called makeAdder with', x);

  // Here we define a function that takes in a single parameter
  // of 'y' and assign the function body to the variable 'actualAdder'
  var actualAdder = function(y){

    // When this function body is executed, print out the values for
    // variables 'x' and 'y'
    console.log('Called anonymous function with', y);
    console.log('Anonymous function knows that x is', x);

    // The return value of this function body is x + y
    return x + y;
  };

  // Let's also print out the value of the inner function
  console.log('inner:', actualAdder);

  // Return a reference to the function body that is
  // stored under the variable 'actualAdder'
  return actualAdder;
};


// We call the main function, makeAdder, and pass
// the value of '5' for 'x,' then store the return value,
// which happens to be a function as well, into the variable
// add5.
var add5 = makeAdder(5);

// Just so we can see what exactly is stored in add5
console.log('add5:', add5);

// Since add5 is storing a reference to a function body
// that takes in a single argument (y), we can call it and
// pass an argument for (y). We know that the logic will add
// 'x' + 'y', so, given that makeAdder(5) set 'x' to 5, these
// two calls will add 10+5 and 20+5 respectively.
console.log( add5(10) );
console.log( add5(20) );




/*

// This is just an array of arrays.
// It means that it's more complicated to access values,
// but we can reference them as below.
var things = [
  ['a', function(){...}],
  ['c'],
  ['d', 'e']
];

// If we want to call the function stored in the array,
// this is what evaluation might look like.
things[0][1]()
(['a', function(){...}])[1]()
function(){...}()


// Similar as above, but with an object
var test = {
  key: function(){...}
}

test.key()

*/




// Similar example as adder, but this time we
// had worked through it step-by-step
var makeLogger = function(x){
  console.log('makeLogger: x:', x);

  var returnValue = function(y){
    console.log('Y:', y);
    console.log('X:', x);
    return x + y;
  };

  return returnValue;
};


console.log('makeLogger:', makeLogger);

var myLogger = makeLogger(10);
console.log('myLogger:', myLogger);
console.log( 'inner value of myLogger:', myLogger(20) );
console.log( 'inner value of myLogger:', myLogger(30) );

var anotherLogger = makeLogger(100);
console.log('anotherLogger:', anotherLogger);
console.log( 'inner value of anotherLogger:', anotherLogger(20) );
console.log( 'inner value of anotherLogger:', anotherLogger(30) );