////////////////////////////////////////////////////////////////
// Namespacing and Privacy (and modules):                     //
//    The purpose of these ideas are to help encapsulate      //
//    our logic and to prevent the pollution of our global    //
//    scope. We'll take a look at examples of why this is     //
//    an issue and how we can control it.                     //
//                                                            //
//    Primarily, functions are our final savior when talking  //
//    about protecting the global scope. Using a function     //
//    allows us to create a scope that has variables that     //
//    are completely inaccessible to parent scopes, thus      //
//    creating the concept of variable privacy. Module        //
//    patterns (we'll look at the Revealing Module Pattern)   //
//    are the ways we take advantage of functions and objects //
//    to encapsulate logic and protect our                    //
////////////////////////////////////////////////////////////////




//////////////////
// Global Scope //
//////////////////

// The username variable will 'pollute'
// the global scope. Because it is defined
// in a scope that all our javascript has access
// to, if we use lots of code that also uses a
// 'username' variable in the global scope, we
// could run into some major conflict issues.
var username = 'Chris';

// Same with this function
var getUsers = function(){
  // However, this variable is where it gets interesting.
  // By not creating this variable inside the global scope,
  // it is considered 'private,' which means that no parent
  // scope can get access to this specific variable. Try
  // running 'users' in console. It just can't happen!
  // While not a great example of protecting the global
  // namespace from pollution, it is definitely a start.
  var users = ['Chris', 'Raphael', 'Max'];

  // Since this variable is protected by scope access,
  // we still need to see the value, so we can return it
  // back to the caller.
  return users;
}; 



////////////////////////
// Object Namespacing //
////////////////////////

// In this example, we'll try to pollute the
// global namespace as little as possible.
// It allows us to create a single global variable
// while still having all our application logic.
var App = {
  name: 'Chris',
  getUsers: function() {
    return ['Chris', 'Raphael', 'Max'];
  }
};
// To access our application logic, we would
// use normal property/method access:
console.log(App.getUsers());


// Here's an example with an app that might have
// exposed some special methods for kicking the
// application logic off while still protecting
// the global namespace.
$(document).on('ready', function() {
  App.init();
  App.setupEvents();
  App.renderView($('.container'));
});

//////////////////////////////
// Revealing Module Pattern //
//////////////////////////////
// The Revealing Module Pattern is a way for us to get
// the best of both worlds: functions and objects.
// We use a function to create the idea of private vs. public
// variables, and then expose access by using a single
// returned object to whatever calls 'AppBuilder'.

/**
 * Create a new application instance
 * @param {string}   specialData    Special data for our app
 * @param {function} onInitComplete Function to call when
 *                                  application is initialized.
 */
var AppBuilder = function(specialData, onInitComplete){
  // Define some variables that are currently
  // only accessible in this function scope
  var username = 'Chris';
  var privateKey = 'donttouchthisthing';

  // A private getUsers function for getting
  // a list of users.
  var getUsers = function(){
    var users = ['Chris', 'Raphael', 'Max'];
    return users;
  };

  // Helper function that will return the
  // current value of the username variable.
  var myUserName = function(){
    return username;
  };

  // This is where the 'reveal' part of revealing
  // module pattern comes into play. This object is
  // our lookup table for what will be publicly accessible
  // to outside functions (though only after they call
  // our AppBuilder function).
  var reveal = {
    'getUsers': getUsers,
    'myUserName': myUserName,
    'specialData': specialData
  };

  // Call our passed function and give it
  // direct information about the privateKey
  onInitComplete(privateKey);

  // The final action of AppBuilder is to give back
  // access to hidden elements to whoever calls the
  // builder function. Where that revealing bit is
  // actually, you know, revealed.
  return reveal;
};

// We can define (or use) some variables for our data
// and then we 'initialize' the application logic
// by calling the builder function.
var data = 'test-data';
// We call the builder here and anything that's considered
// 'public', as in, revealed, will be stored as a reference
// inside of our app variable.
var app = AppBuilder(data, function(secret){
  // Just to demonstrate passing a value from function
  // to function, this function is called from AppBuilder
  console.log('App initialized!', secret);
});

////////////////////////////////////////////////////
// IIFE - immediately invoked function expression //
////////////////////////////////////////////////////
// Wut.
// 
// Essentially, there is no magic here, I promise.
// What we usually do is define a function, assign
// it to a variable, and then invoke the function by
// name. But if that's all we do with the function,
// why not just skip the middleman? No need for a variable.
// That's how an IIFE works. We wrap a function in parentheses,
// and that will evaluate to a function body, which we can then
// call right away.

// Define our function...
(function(name){
  // The body of the function...
  console.log('This happens now:', name);
// End the function body, end the wrapper, and just call it!
})('Chris');


/////////////////////////////
// IIFE - For Loop Problem //
/////////////////////////////

// Declare an array of items...
var items = ['Chris', 'Max', 'Raphael', 'Raine'];

// Loop through the items...
for (var i = 0; i < items.length; i++) {
  // For each iteration, we want to perform some action
  // that takes a longer period of time. What's weird about
  // this is that by the time even the first setTimeout
  // is performed, the for loop has already completed.
  setTimeout(function(){
    // At this point, since there is a delay, our for-loop
    // is already said-and-done. 'i' is now it's final value
    // of, in this case, 4, and items[4] doesn't exist, so we
    // get undefined.
    console.log(i, items[i]);
  }, (i+1) * 1000);

  console.log('i:', i);
}
// This console log will execute well before the first
// setTimeout action is run.
console.log('Loop completed:', i);


// So this is a problem! We've lost any semblance of
// control over our list once we add in the idea of
// actions that can take an extended period of time.
// This is an issue primarily because loops don't actually
// create scope, which means that they aren't retaining 'i'
// from one iteration to the next. Fortunately, IIFEs allow
// us to inject a scope whenever we need one! To capture any
// number of values in execution time.

var items = ['Chris', 'Max', 'Raphael', 'Raine'];

for (var i = 0; i < items.length; i++) {
  // Use an IIFE to wrap our iteration logic
  // and 'capture' the state of 'i' at this
  // time in execution.
  (function(index){
    // We hold onto i's value as 'index'
    // inside this scope
    console.log('iife:', index);
    setTimeout(function(){
      console.log(index, items[index]);
    }, (index+1) * 1000);
  // Call our IIFE with the value of 'i'
  })(i);

  console.log('i:', i);
}
console.log('Loop completed:', i);

// And the problem is solved! By creating a scope where
// one is not normally found, we've allowed JS to hold on
// to a value that would normally have escaped out from
// under us.


//////////////////////////////////////////
// Another example of the problem above //
//////////////////////////////////////////

/**
 * Some api thing that takes time to run. Maybe it has
 * to go into the file system or over the web to get data.
 * @param  {string}   name       Persons name
 * @param  {callback} onComplete Function to call when done
 */
var apiMethodThatTakesAwhile = function(name, onComplete) {
  // Fake a long operation using setTimeout. Since
  // the duration is a random value, our results
  // could come back out-of-order too!
  setTimeout(function(){
    console.log('operation is completed...');
    onComplete();
  }, Math.random() * 2000);
};

// Names for our API to use
var names = ['Chris', 'Raphael', 'Max'];

for (var i = 0; i < names.length; i++) {
  // Without this IIFE, we'd lose out on 'i'
  // slipping out of our grasp!
  (function(index){
    apiMethodThatTakesAwhile(names[index], function(){
      console.log(index, names[index] + ' has completed!');
    });
  })(i);
}


////////////////////
// jQuery Example //
////////////////////
// Here's a situation where we have a complex
// dataset that defines a series of selectors
// and some special data attached to each item.
// We want to loop through this array and generate
// event listeners for each given selector that,
// when the button is clicked, prints the special
// data to console.

var selectors = [
  {
    selector: '#btn-1',
    specialData: 'Secret Key 1'
  }, 
  {
    selector: '#btn-2',
    specialData: 'Secret Key 2'
  }, 
  {
    selector: '#btn-3',
    specialData: 'Secret Key 3'
  }, 
  {
    selector: '#btn-4',
    specialData: 'Secret Key 4'
  }
];


$(document).on('ready', function(){
  // The IIFE way
  for (var i = 0; i < selectors.length; i++) {
    (function(index){
      $(selectors[index].selector).on('click', function(){
        console.log(index, selectors[index].specialData);
      });
      console.log('adding listener for:', index);
    })(i);
    console.log('this is i:', i);
  }


  // Map works in most cases too because it uses a function
  // anyways, therefore scope is retained as a beneficial
  // side-effect!
  selectors.map(function(item, index){
   $(selectors[index].selector).on('click', function(){
      console.log(index, selectors[index].specialData);
    });
    console.log('adding listener for:', index);
  });
});







/////////////////////////////
// Bringing it full-circle //
/////////////////////////////
// Bringing it back to our discussion on namespacing
// and privacy, we can use our revealing module pattern
// and get rid of the variable middleman by using an IIFE.
var app = (function(){
  var users = ['Chris', 'Raphael', 'Max'];

  var getUsers = function(){
    return users;
  };

  return {
    allUsers: getUsers
  };
})();