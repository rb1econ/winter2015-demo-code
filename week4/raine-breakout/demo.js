var dinosaurs = [];
var scientists = [];
var numDinosaurs = 10;
var numScientists = 10;
var numZones = 5;

// put all this in a setup function

// create dinosaurs
for(var i=0; i<numDinosaurs; i++) {

	var type = Math.random() < 0.5 ? 'herbivore' : 'carnivore';
	dinosaurs.push(new Dinosaur(type));
}

// create scientists
for(var i=0; i<numScientists; i++) {
	scientists.push(new Scientist());
}

// create park & zones
var park = new Park();
for(var i=0; i<numZones; i++) {

	var zone = new Zone();

	var numRandomScientists = Math.floor(Math.random() * 3);
	for(var j=0; j<numRandomScientists && scientists.length > 0; j++) {
		// var randomScientistIndex = Math.floor(Math.random() * scientists.length);
		// var randomScientist = scientists.splice(randomScientistIndex, 1)[0];
		// zone.scientists.push(randomScientist);
		zone.scientists.push(scientists.pop())
	}

	// we should really have a helper function that randomly moves an item from one array to another!
	var numRandomDinosaurs = Math.floor(Math.random() * 3);
	for(var j=0; j<numRandomDinosaurs && dinosaurs.length > 0; j++) {
		zone.dinosaurs.push(dinosaurs.pop())
	}

	park.zones.push(zone);

}
zone.scientists = zone.scientists.concat(scientists)
zone.dinosaurs = zone.dinosaurs.concat(dinosaurs)

// create airport
var airport = new Zone();
airport.name = 'airport';
park.zones.push(airport);

// assign adjacent zones
park.zones[0].nextZones = [
	park.zones[1],
	park.zones[2],
	park.zones[3],
	airport
];
park.zones[1].nextZones = [
	park.zones[2],
	park.zones[4],
	airport
];
park.zones[2].nextZones = [
	park.zones[3],
	park.zones[4]
];
park.zones[3].nextZones = [
	park.zones[4]
];
park.zones[4].nextZones = [
	airport
];

console.log('park', park);
console.log('survivors', park.getSurvivors())
