var username = 'chris';
var color = 'blue';

// this is considered a PURE function:
// i.e. it doesn't modify any scope
// except its own
var getUserName = function(){
  // This is called hiding:
  // it will "hide" the parent scope's
  // username variable
  var username = 'mason';
  console.log("getUserName: username:", username);

  // We can define functions at any level,
  // even inside other functions.
  var exclaimer = function(str){
    console.log('getUserName: exclaimer: username:', username);
    console.log('getUserName: exclaimer: color:', color);
    return str + '!!!';
  };


  return exclaimer(exclaimer(username));
};

// This will fail because the call to
//  exclaimer is happening in a scope that
//  doesn't have access to the function
// exclaimer('testing');

// this is considered an IMPURE function:
// i.e. this function will make a change
// to a variable in the global scope
/*var getUserName = function(){
  username = 'mason';
  console.log("getUserName: username:", username);
  return username;
};*/

console.log("pre-username:", username);
var retrievedName = getUserName();
console.log("retrievedName:", retrievedName);
console.log("post-username:", username);