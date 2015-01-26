/*
  Context (or 'this'):
    The context with which a function is invoked.
    It is accessible inside the function using the
    'this' keyword.

    In general, context is only set when the function
    is a method on an object. Otherwise, if the
    function is NOT a method (even if it is a function
    defined inside a method), it will receive the
    window as a context. If it is a method, the object
    it is attached to will be the context.

    Also note that, unlike scope, context is NOT inherited.
*/

// Here, we call this in the global context, so
// it will be the window.
console.log('global:', this);


// We define a function (not a method) and call it
// immediately after. Even though this creates a new
// SCOPE, it does not define a new CONTEXT, so 'this'
// will still be the window.
var myFunc = function(){
  console.log('myFunc:', this);
};
myFunc();



// Here's a more complicated example. We define an
// object that has 2 properties: iteration and increment.
// Increment is a method (a function stored on a key of an
// object), and it's 'this' will be the entire counter object.
// Where it gets strange is when we get into the increment
// function and start defining child functions...
var counter = {
  iteration: 0,
  increment: function(){
    // When we call increment is where context is set,
    // but as long as it is called as 'counter.increment',
    // the context will be counter.
    console.log('increment:', this);

    // Because we are assuming that this function
    // will be called as a method (we'll see a broken
    // case below), we can access the iteration property
    // of the counter object and increment it.
    this.iteration++;

    // By defining and calling a function, even though
    // it is defined inside a method, when its called,
    // there is no context defined.
    var inc = function(){
      console.log('inc:', this);
    };
    // Calling the method here isn't being called with
    // any specific context, 'this' will be the window.
    inc();

    // However, here, we define an object with a method.
    // Calling the 'inc' method on this object will use
    // a context. Not the window or the 'counter' object,
    // but the 'sub' object.
    var sub = {
      inc: function(){
        console.log('sub.inc:', this);
      }
    };
    sub.inc();
  }
};

counter.increment();

// In this example, we assign the variable inc
// as a reference to the increment method. Now,
// when 'inc' is called, there is no context because
// the reference to the original object isn't being kept
// as a part of the inc variable, so context goes back to
// being the window.
var inc = counter.increment;
inc();





/////////////////////
// Forcing Context //
/////////////////////

// Generic function for printing context and a few parameters
var printPerson = function(message, data){
  console.log(this, 'says', message, 'and', data);
};

// Some re-usable contexts for the future
var person1 = {
  name: 'Chris',
  color: 'blue'
};
var person2 = {
  name: 'Raphael',
  color: 'peachpuff'
};


// Calling printPerson, since it isn't a method,
// will show that 'this' is the window.
printPerson();








//////////
// Call //
//////////

// Call allows us to force a context on the function
// we use it with, even if that function doesn't normally
// have a context (i.e. the window). The first argument
// passed to 'call' will be the value the function uses
// for 'this,' while all other arguments will be passed
// on as arguments to the function itself.
// In this case we set the context of printPerson to be
// 'person1' and pass the two strings as arguments.
printPerson.call(person1, 'Hello world!', 'things that you need');









///////////
// Apply //
///////////

// Apply works much like call with one distinct difference.
// When passing arguments on to the original function, call
// passes them as you normally would, separated by commas.
// Apply allows you to use an array which will be deconstructed
// and passed to the function as the arguments object itself.
printPerson.apply(person2, ['My good message', 'things you don\'t need']);


// The apply function is really great if you have a function
// that uses the 'arguments' keyword and pulls in an arbitrary
// number of passed arguments.

// Math.max will, given numerical arguments, return the number
// that is the largest of the set. Since the method doesn't actually
// use a context, it doesn't matter what we pass as a context, so
// often you will see 'null' passed on functions that don't need a 'this'
console.log( Math.max(1, 2, 5, 3, 20, 4) );
console.log( Math.max.call(null, 1, 5, 10, 2, 20, 3) );

// But let's say we want to find the largest number in an
// array. Since Math.max will not work if given anything but
// a number, we can use apply to our benefit since it can take
// an array and break it down into arguments automatically.
var nums = [1, 10, 15, 20, 3, 14, 100, 2];
console.log( Math.max.apply(null, nums) );










//////////
// Bind //
//////////

// Bind works very similarly to call and apply by also setting
// a context. However, instead of invoking the function, it returns
// an intermediate function that has context already forced on it.

// This is another generic function that takes in a single
// parameter and prints out both the parameter and context.
var printThis = function(message){
  console.log(this, 'says', message);
};

// We define a context to use for our examples
var person = {
  name: 'Sean',
  color: 'green'
};

// Bind will return a function with the context pre-forced
// to whatever we passed as an argument to bind. In this case,
// seanPrinter will be a reference to a function that has its
// context bound to the person object.
var seanPrinter = printThis.bind(person);

// This isn't very useful because the code that
// is run is created by the browser since bind
// is built-in, so they won't actually expose their
// behind-the-scenes code. However, it does help to show
// that seanPrinter is a function.
console.log( seanPrinter );

// By calling the function returned by bind, it's almost
// like calling our original function, except that we
// know that the context is already forced to a given value.
// In our case, seanPrinter is bound to the 'person' object
// defined a little earlier. By passing any values to this
// function, they will essentially be forwarded on to the
// original function that was 'bound' (which is printThis).
// As you'll see, we don't need to constantly use call or apply,
// yet the context is set in each of these function calls.
seanPrinter('hello world');
seanPrinter('there\'s a snake in my boot');

// As an interesting side-bit, context can be anything.
// It doesn't always have to be an object. As we even saw
// with the Math.max example, it can be null as well.
printThis.call([1, 2, 5], 'testing');












/////////////////
// Custom Bind //
/////////////////

// This is an example of how we can create our own
// simple bind function. This uses a bit of closure
// and takes advantage of inherited scope to accomplish
// the task.

// First, we define our custom bind function. This function
// will take in two parameters: whatever we want to force
// the context TO, and whatever function we want to force
// the context ON.
var myBind = function(context, func){

  // Our custom bind function will take advantage of
  // closure to retain references to the context and
  // func values in the returned function.
  return function() {

    // Since scope is inherited and closure will prevent
    // any garbage collection, we know that we still have
    // access to the 'func' and 'context' parameters that came
    // from the parent scope. We then take advantage of apply
    // to force a context on our 'func' variable and then
    // we forward along the arguments passed to THIS function,
    // meaning the anonymous function being returned.
    func.apply(context, arguments);
  };
};

// We use our myBind function to bind the context of
// our 'person' object to the 'printThis' function.
var mySeanPrinter = myBind(person, printThis);

// We'll see what mySeanPrinter actually is, but the important
// bit is that we know it is a function.
console.log(mySeanPrinter);

// As with the previous 'bind' examples, we can call
// the mySeanPrinter function and pass along any arguments.
mySeanPrinter('test message');

// Even if we use call, however, the context will not
// be overridden. This is because context is being set
// via scope and, if you look at our myBind function, we
// don't reference 'this' anywhere, so no context will
// be used anyways.
mySeanPrinter.call({a: 10}, 'test go');













////////////////////
// Retaining This //
////////////////////


// In this example, we may find that we have a need
// to retain a value for 'this', especially when using
// jQuery events. While the code will produce errors
// since we don't have jQuery included, the idea stays the same.
// jQuery will force a context on functions it uses as callbacks
// for events, which is really handy.
$('.my-el').on('click', function(){
  // this === '.my-el'
  var originalElement = $(this);

  var el = $('<button>').text('GO');
  $('body').append(el);

  // Since jQuery will force a new 'this' in the
  // following callback, how do we still carry
  // a reference to the 'this' defined by its parent?
  // On line 281 we store a reference to 'this' in a
  // variable, and, because SCOPE is inherited, this
  // variable will keep as we move into a child scope.
  el.on('click', function(){
    // this === el (our new button)
    
    // We can still access the original '.my-el'
    // that fired the event that created this handler.
    originalElement.text('what');

    // And, we can still access whatever element fired
    // this specific click event (our 'el')
    $(this).css('color', 'red');
  });
});