////////////////////
// HomeBase Class //
////////////////////

/**
 * The home base for deliveries. Will maintain
 * information about all the available trucks
 * and targets that can be delivered to.
 * @param {string} imageUrl Url of image to represent this base
 */
var HomeBase = function(imageUrl){
  this.imageUrl = imageUrl;
  this.trucks = [];
  this.targets = [];
};

/**
 * Helper method for adding a truck. Since we 
 * need to do a couple unique things for each new
 * truck (such as set a reference to the base and
 * animate it to that base), it's better to keep this
 * as a helper method instead of relying on developers
 * remember all the components of the action.
 * @param {DeliveryTruck} truck Truck to add
 */
HomeBase.prototype.addTruck = function(truck) {
  this.trucks.push(truck);
  truck.moveTo(this.$el);
  truck.homeBase = this;
};

/**
 * Render the base to the DOM
 * @return {jQuery} Dom element to append
 */
HomeBase.prototype.render = function() {
  this.$el = $('<div>')
    .addClass('home-base')
    .append(
      $('<img>')
        .attr('src', this.imageUrl)
    );

  return this.$el;
};

/**
 * Allow deliveries to be started from the home
 * base. It will (ideally) pick whatever truck
 * is available and use it to deliver the requested
 * package to the target.
 * @param  {Package} package Package to deliver
 * @param  {Target} target  Location to deliver to
 */
HomeBase.prototype.deliver = function(package, target) {
  // Should pick a truck to deliver with, and move to the target
  this.trucks[0].packages.push(package);
  this.trucks[0].deliverTo(target);
};

///////////////////
// DeliveryTruck //
///////////////////

/**
 * DeliveryTrucks are the transportation method.
 * They have their own inventory that is filled at
 * home base and depleted when they arrive at each
 * delivery destination.
 * @param {string} name     Nickname of truck
 * @param {string} imageUrl Url of image to represent the truck
 */
var DeliveryTruck = function(name, imageUrl){
  this.name = name;
  this.imageUrl = imageUrl;
  this.packages = [];
  // todo: add cbradio methods!
};

/**
 * Helper function to animate the truck instance to a given
 * DOM elements target position.
 * @param  {jQuery} domTarget  Target element to transition to
 * @param  {function} onComplete Optional* Function to invoke
 *                               when animation finishes
 */
DeliveryTruck.prototype.moveTo = function(domTarget, onComplete) {
  // The position() method will give you the top and left
  // coordinates of any element even if it isn't absolutely positioned.
  this.$el.animate({
    top: domTarget.position().top,
    left: domTarget.position().left
  }, {
    complete: onComplete
  }, 1000);
};

/**
 * Helper method for allowing a truck to deliver its
 * packages to a given target. It will move to that location
 * and drop off all packages. When it is done with that process,
 * it will head back to home base.
 * @param  {Target} target Location to drop off to
 */
DeliveryTruck.prototype.deliverTo = function(target) {
  // This uses "bind" to help retain context, since it
  // would normally be lost due to a second function
  // being called here.
  /*  var onDelivered = function(){
      console.log('packages:', this.packages);
    };

    this.moveTo(target.$el, onDelivered.bind(this));
  */
  
  // Another way to retain context, this will pull
  // the context into scope, which IS inherited.
  var truck = this;

  this.moveTo(target.$el, function(){

    // Updated this to a forEach to minimize complexity
    truck.packages.forEach(function(item){
      target.packages.push(item);
      console.log(
        truck.name + ' delivering ' +
        item.contents + ' to ' + target.address);
    });

    // Clear out the package list on the truck itself
    truck.packages = [];

    // Send the truck back home!
    truck.moveTo(truck.homeBase.$el);
  });
};

/**
 * Method for generating a DOM element to represent
 * each truck instance
 * @return {jQuery} Dom element for the truck
 */
DeliveryTruck.prototype.render = function() {
  this.$el = $('<div>')
    .addClass('truck')
    .append(
      $('<img>')
        .attr('src', this.imageUrl)
    );
  return this.$el;
};

////////////
// Target //
////////////

// This is a helper variable to keep track
// of how many targets have been created.
// This is used primarily for positioning
// so we don't just have targets visually
// stacked on each other!
var targetCount = 0;

/**
 * Class that represents a deliverable location.
 * @param {string} address  Address of location
 * @param {string} imageUrl Url of image to represent this location
 */
var Target = function(address, imageUrl) {
  this.imageUrl = imageUrl;
  this.address = address;
  this.packages = [];
  // Retain a reference to the value of the current count
  this.index = targetCount;

  // Increment the target count
  targetCount++;
};

/**
 * Render method for generating a DOM element for the target
 * @return {jQuery} Dom element for target
 */
Target.prototype.render = function() {
  this.$el = $('<div>')
    .addClass('target')
    .addClass( (this.index % 2 === 0)?'target-left':'target-right' )
    .append(
      $('<img>')
        .attr('src', this.imageUrl)
    );
  return this.$el;
};


/////////////
// Package //
/////////////

/**
 * Class for keeping track of individual packages
 * @param {string} contents Contents of the package
 */
var Package = function(contents){
  this.contents = contents;
};


/////////////
// Testing //
/////////////

var homeBase = new HomeBase('http://fc09.deviantart.net/fs71/i/2010/327/2/1/the_magi___space_port_by_bradwright-d33fe4m.jpg');

var truck1 = new DeliveryTruck('Speedy', 'http://www.motornomadics.com/wp-content/uploads/2012/07/Spaceballs-eagle5.jpg');
var truck2 = new DeliveryTruck('Big Red', 'http://upload.wikimedia.org/wikipedia/en/e/ee/DeathStar2.jpg');

var home1 = new Target('123 Street Name', 'https://mattsko.files.wordpress.com/2010/11/space-home.jpg');
var home2 = new Target('456 Main Road', 'http://www.designmeetscomfort.com/wp-content/uploads/2012/06/jetsons.jpg');

// Add the targets to the homeBase target list
homeBase.targets.push(home1);
homeBase.targets.push(home2);


// Define a base package
var ourPackage = new Package('candy canes');


$(document).on('ready', function(){
  // Append and render each element when the DOM is ready
  $('body').append(
    homeBase.render(),
    home1.render(),
    home2.render(),
    truck1.render(),
    truck2.render()
  );

  // Append the trucks
  homeBase.addTruck(truck1);
  homeBase.addTruck(truck2);

  // Deliver our package
  homeBase.deliver(ourPackage, home2);
});