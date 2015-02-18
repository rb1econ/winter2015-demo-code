// parent scope for everyone

var str1 = 'Hello world';
var str2 = 'Whats Happenin';
var str3 = 'New string on the block';

var headBang = function(inString){
  // parent scope
  inString += '!';

  // var data = {
  //   bangedString: inString
  // };
  //
  // var test = function(){
  //   // child scope
  //   console.log(inString);
  // };
  // test();

  // return inString;
  console.log(inString);
  return inString;
};

var headQuestion = function(inString){
  inString += '?';
  return inString;
};

headQuestion(headBang(str1));

// headQuestion(headBang('Hello world'));
// headQuestion(undefined);
// "undefined?"

var banged = headBang(str1);
var questioned = headQuestion(banged);



// TERMINOLOGY:
//
// A & B are PARAMETERS
// var f = function(a, b){ return a + b; };
//
// 'a' & 'b' are ARGUMENTS
// f('a', 'b');

// NODE EXAMPLE:
// app.get('/test', function(req, res){
//    res.render('testTpl');
// });
//
// $('h1').on('click', function(e){
//   console.log(e);
// });


// Find thing:
// var data = [
//  {title: 'Seville', next: 'Canary'},
//  {title: 'Canary', next: 'Seville'}
// ]
// 
// var currentCityName = 'Seville';
// var currentCity = _.find(data, function(city){
//  return city.title === currentCityName;
// });
