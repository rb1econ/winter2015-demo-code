/**
 * Vehicle base class
 * @param {string} color Color of vehicle
 */
var Vehicle = function(color, hornSound){
  this.color = color;
  this.hornSound = hornSound;
};

/**
 * Move method to allow vehicles to move
 */
Vehicle.prototype.move = function() {
  console.log('Moving!!!');
};


/**
 * Car, subclass of Vehicle
 * @param {string} color Color of car
 * @param {string} make  Make of car
 */
var Car = function(color, make){
  // Run the constructor of the super class,
  // passing along any necessary arguments
  Vehicle.call(this, color, 'Beep Beep!');

  // Assign the make property, which isn't
  // found on all vehicles: just cars
  this.make = make;
};

// Inherit the prototype from the Vehicle class
Car.prototype = new Vehicle();

// Reset the constructor property back to the right class
Car.prototype.constructor = Car;

/**
 * Allow cars to open the sunroof
 */
Car.prototype.openSunroof = function() {
  console.log('Let the light shine in!');
};

var testVehicle = new Vehicle('green', 'awooooooga!');
var testCar = new Car('blue', 'bmw');




/*
  
  InClass Challenge:

  Create a Media class that has a name property
  and a view method that logs "Viewing [media name]"

  Create a Picture class that extends Media and adds
  a property for image URL and has a create method
  that renders the image to the html page.

*/