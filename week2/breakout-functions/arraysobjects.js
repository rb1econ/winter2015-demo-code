// Array: list of items in a specific order
var names = ['chris', 'mariel', 'cj'];
console.log("names[1]:", names[1]);


// Object: properties (information) about an object
var car = {
  make: 'honda',
  model: 'cr-x',
  year: '1994'
};
console.log("car.make:", car.make);


// Combining these data types
var pilot = {
  make: 'honda',
  model: 'pilot',
  coolFactor: -10
};
var bmw = {
  make: 'bmw',
  model: 'i8',
  coolFactor: 1000
};

var cars = [pilot, bmw];

var mustang = {
  make: 'ford',
  model: 'gt500',
  coolFactor: 100
};
cars.push(mustang);