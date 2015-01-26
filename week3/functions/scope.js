/////////////////
// Basic Scope //
/////////////////

// variable name defined in the global scope
var name = 'Chris';

// variable nameChanger defined in global scope
var nameChanger = function(newName){

  // name inherits from the global scope,
  // while newName is defined in this
  // function's scope.
  name = newName;
};

console.log("name:", name);
nameChanger('John');
console.log("name:", name);


////////////////////////
// Garbage Collection //
////////////////////////

var a = {
  key: 10
};

// No more references to the object originally
// stored in 'a', so it can be garbage collected
a = 5;


var a = {
  key: {
    inner: 'test'
  },
  outer: 'go times'
};

// b is now a reference to the object that was stored in
// memory and referenced by a.key. There are now 2 references
// to that inner object (that contains {inner: 'test'})
var b = a.key;

// Re-assigning 'a' while keeping 'b' means that there is no
// way for us to access the 'outer' part of 'a', and therefore
// a will be garbage collected. This will lower the reference count
// of {inner: 'test'} to 1 (from 2), but it won't be 0, and therefore
// will not be garbage collected. In this instance, only a small bit of
// the original full object will be unallocated in memory.
a = null;


////////////
// Hiding //
////////////

var a = 10;

var b = function(){
  // Hiding: creates a new variable
  // for "a" without destroying the
  // one defined in the parent scope.
  // If you remove the var, this instead will
  // be a reference to the parent's scope 'a'
  // and will modify that value instead of keeping
  // it internal here. See how the output changes by adding
  // or removing the 'var' keyword here.
  var a = 15;
  console.log('a2:', a);

  var c = function(){
    // This function will inherit 'a' from its parental chain,
    // and find it defined as '15' in 'b'
    console.log('c says that a is:', a);
  };
  c();
};

// 'a' is defined as 10
console.log('a1:', a);

// Calling 'b' will activate the function
b();

// As long as 'b' was a PURE function (doesn't touch any
// scope but its own), it can't modify the global 'a' and
// we should see this 'a' print the same value as 'a1' above.
console.log('a3:', a);
