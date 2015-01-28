context vs scope

1) scope is the memory environment (space for variables to be defined) within a function (lexical scoping). 
2) variables are only accessible inside the function they were defined (or a nested function)

var foo = function() { // outer scope

	var a = 10; // the 'scope' of a is 'foo'
	var b = 2;

	console.log(a); // works!
	var bar = function() { // inner scope

		var a = 5; // hiding
		b = 7; // don't do it!!!
		console.log(a); // works!
	}

	bar();

}

foo();



1) context is an object that is automatically assigned at each function call (it has no inherent meaning)
2) we refer to the context in code with `this`

var person = {
	name: 'Raine',
	greet: function() {
		return 'Hi! I\'m ' + this.name;
	}
}

// 1. when you call a method with dot (or bracket) notation, then `this` refers to the thing before the dot (containing object)
console.log( person.greet() );

var sayHi = person.greet;

sayHi() // whoops! this refers to null/window

// 2. when call a non-method function, `this` is not usefully defined (null or window)
var who = function() {
	console.log('Hello! My name is ' + this.firstName + '.')
}

who()

// 3. inside a jQuery event handler, this refers to the native element that fired the event
$('a[href^=https]').on('mouseover', function() {
	// `this` refers to the specific link that was moused over
	$(this).append(securityIcon);
})

// 4. call, apply, and bind set the context explicitly
sayHi.call(person, a,b,c)			// separate arguments
sayHi.apply(person, [a,b,c])  // array of arguments
var personSayHi = sayHi.bind(person)
