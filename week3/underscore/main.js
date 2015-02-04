//////////////////
// Example: map //
//////////////////

var nums = [5, 20, 50];

var doubler = function(num){
  return num * 2;
};

console.log('_.map:', _.map(nums, doubler));






///////////////////////
// Challenge: Reduce //
///////////////////////

/*
  Given a string, like 'Node Package Manager',
  using reduce, create an acronym builder that will
  return 'N.P.M.'
*/

var inputStr = 'Node Package Manager';
var words = inputStr.split(' ');

var getFirstLetter = function(memo, str){
  var firstLetter = str[0].toUpperCase();
  return memo + firstLetter + '.';
};

console.log('_.reduce:', _.reduce(words, getFirstLetter, '') );








/////////////////////
// Challenge: Find //
/////////////////////

/*

  Given a dataset:

  var people = [
    {
      name: 'Raphael',
      id: 123
    },
    {
      name: 'Chris',
      id: 456
    },
    {
      name: 'Sean',
      id: 789
    }
  ];

  Use 'find' to pull out the user with ID 456
  and print out their name to console.

*/


var people = [
  {
    name: 'Raphael',
    id: 123
  },
  {
    name: 'Chris',
    id: 456
  },
  {
    name: 'Sean',
    id: 789
  }
];

var findPerson = function(person){
  return person.id === 456;
};

var foundPerson = _.find(people, findPerson);
console.log('_.find:', foundPerson.name);

/* EXAMPLE WITH CLOSURE:
  var makePersonFinder = function(personId){
    return function(person){
      return person.id === personId;
    };
  };

  var foundPerson = _.find(people, makePersonFinder(456));
*/









//////////////////////
// Challenge: Pluck //
//////////////////////

/*
  Using the same array of people as above,
  print to the console an array of all the
  names found in the list.

  e.g. ['Raphael', 'Chris', 'Sean']
*/

console.log('_.pluck:', _.pluck(people, 'name'));










////////////////////////////////
// Challenge: Shuffling Cards //
////////////////////////////////

/*

  Given an array of cards:

  var cards = ['Ace', 'Queen', 'King', 'Jack', '10', '9'];

  Print to the console the result of 'shuffle'ing the cards.

*/

var cards = ['Ace', 'Queen', 'King', 'Jack', '10', '9'];

console.log('_.shuffle:', _.shuffle(cards));



/////////////////////////
// Underscore Chaining //
/////////////////////////

// Chaining methods in underscore:
//   Start with _.chain(array), then end with .value()
// Really helpful if, given an piece of data, you
// want to do multiple things in order to it.
// In this example, we want to shuffle the cards
// a few times and then uppercase the name on each
// card before getting the value back out.

var shuffledCards = _.chain(cards)
  .shuffle()
  .shuffle()
  .shuffle()
  .map(function(card){
    return card.toUpperCase();
  })
  .value();
console.log('_.chain:', shuffledCards);











/////////////////////
// Underscore uniq //
/////////////////////

var items = [1, 2, 3, 1, 3, 5];
console.log('_.uniq:', _.uniq(items));









/////////////////////////
// Underscore uniqueId //
/////////////////////////

var names = ['Chris', 'Raphael', 'Raine'];
console.log('unique id:', _.map(names, function(name){
  return {
    name: name,
    id: _.uniqueId('person_')
  };
}));












/////////////////////////
// Example of real use //
/////////////////////////

// This was used to help manipulate a dataset that
// came back from an API call to Flickr. Flickr returned
// an array of photo objects and the goal was to end up
// with an array of only the unique tag names that were
// found.
var photos = [
  {tags: ['sky', 'blue', 'happy']},
  {tags: ['ocean', 'blue', 'happy']},
  {tags: ['ocean', 'calm', 'serene']}
];
var tags = _.chain(photos).pluck('tags').flatten().uniq().value();
console.log('Photo tags:', tags);
