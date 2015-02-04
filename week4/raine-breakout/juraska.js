// Goal-oriented
// Why?

/*
* dinosaur
	* carnivore
	* herbivore
* scientists
* park
* zone

* airport
* plane

When you need multiple objects that share the same behavior, use a class.

Alaska Jurassic Park

The park contains various zones with dinosaurs and scientists studying them. However, some zones have had a breach of containment, and the scientists are in danger.

Write a program that determines if there is a safe path back to the airport for scientists in danger.

*/

// Solution #1: Carnivore/Herbivore as subclasses
// This isn't the best use of subclasses since Carnivore and Herbivore are 90% the same as all other dinosaurs. It would be better to just set a property to differentiate them.
/*
var Dinosaur = function() {
};

var Carnivore = function() {
	Dinosaur.call(this);
};
Carnivore.prototype = new Dinosaur();
Carnivore.prototype.constructor = Carnivore;

var Herbivore = function() {
	Dinosaur.call(this);
};
Herbivore.prototype = new Dinosaur();
Herbivore.prototype.constructor = Herbivore;

var trex = new Carnivore();
var veloceraptor = new Carnivore()

if(trex instanceof Carnivore) {
}
*/


// Solution #2: Carnivore/Herbivore as type
var Dinosaur = function(type) {
	this.name = 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
	if(!type) {
		throw new Error('Dinosaur must have a type!')
	}
	this.type = type;
};

var Scientist = function() {
	this.name = 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
};

var Park = function() {
	this.zones = [];
};
Park.prototype.getSurvivors = function() {

	var currentPark = this;

	var getPrecedingSafeZones = function(zone) {
		return currentPark.zones
			// preceding
			.filter(function(aZone) {
				return aZone.nextZones.indexOf(zone) >= 0;
			})
			// safe zones
			.filter(function(aZone) {
				return aZone.isSafe();
			})
	}

	// the last zone is the airport
	var safeZonesToExplore = [this.zones[this.zones.length-1]];
	var safeZones = [];

	while(safeZonesToExplore.length > 0) {

		// explore the next safe zone that hasn't been explored
		var exploredZone = safeZonesToExplore.pop();

		// add it to our final list of safe zones
		safeZones.push(exploredZone);

		// get any precending safe zones connected to the explored zone, and make them available to explore
		var newSafeZones = getPrecedingSafeZones(exploredZone);
		safeZonesToExplore = safeZonesToExplore.concat(newSafeZones);
	}

	// return all scientists from the final safe zones
	return safeZones.reduce(function(survivors, zone) {
		return survivors.concat(zone.scientists);
	}, []);
}

var Zone = function() {
	// this.scientist = null; // contain one

	this.scientists = []; // contain multiple
	this.dinosaurs = [];
	this.nextZones = [];

	// a static value does not stay up-to-date unless it is modified manually
	// this.safe = true;
};

Zone.prototype.isSafe = function() {
	return this.dinosaurs.every(function(dino) {
		return dino.type !== 'carnivore';
	});
};

