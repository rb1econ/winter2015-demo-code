var hotdogs = [
	{ 
		name: 'ballpark', 
		description: 'good ol\' hotdog',
		price: 0.5
	},
	{
		name: 'tofurkeydog',
		description: 'no animals were harmed in the making of this hotdog',
		price: 2.50
	},
	{
		name: 'megadog',
		description: '3-foot long hotdog with the works',
		price: 12
	}
];

// procedural
var cheapdogs = [];

for(var i=0; i<hotdogs.length; i++) {
	if(hotdogs[i].price <= 3) {
		cheapdogs.push(hotdogs[i]);
	}
	// else ignore
}

for(var i=0; i<cheapdogs.length; i++) {
	var hotdogEl = $('<div class="hotdog"></div>');
	var nameEl = $('<h1>').text(cheapdogs[i].name);
	var priceEl = $('<p class="price">').text(cheapdogs[i].price);
	var descEl = $('<p class="desc">').text(cheapdogs[i].description);
	hotdogEl.append(nameEl, priceEl, descEl);
	$('#menu').append(hotdogEl);
}

// functional
var cheapdogs = hotdogs.filter(function(item) {
	return item.price <= 3;
});

var hotdogElements = cheapdogs.map(function(item) {
	var hotdogEl = $('<div class="hotdog"></div>');
	var nameEl = $('<h1>').text(item.name);
	var priceEl = $('<p class="price">').text(item.price);
	var descEl = $('<p class="desc">').text(item.description);
	hotdogEl.append(nameEl, priceEl, descEl);
	return hotdogEl;
})

$('#menu').append(hotdogElements);


// functional #2
var isCheap = function(item) {
	return item.price <= 3;
} 

var createHotdogElement = function(item) {
	var hotdogEl = $('<div class="hotdog"></div>');
	var nameEl = $('<h1>').text(item.name);
	var priceEl = $('<p class="price">').text(item.price);
	var descEl = $('<p class="desc">').text(item.description);
	hotdogEl.append(nameEl, priceEl, descEl);
	return hotdogEl;
}

var createHotdogText = function(item) {
	return // a text string of the hotdog
}

$('#menu').append(
	hotdogs
		.filter(isCheap)
		.map(createHotdogElement)
)

emailModule.send('raine@refactoru.com', 
	hotdogs
		.filter(isCheap)
		.filter(isFancy)
		.map(createHotdogText)
		.join('\n\n')
)
