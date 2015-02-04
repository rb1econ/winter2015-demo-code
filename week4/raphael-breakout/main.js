var Constructors = (function(){
    var whatColorAmI = function(thatCar){
        return thatCar.color;
    }
    var Car = (function(){
        var CarConstructor = function(color, brakes, weight){
            this.color = color;
            this.weight = weight;
        }
        CarConstructor.prototype.drive = function(){
            console.log('the ' + whatColorAmI(this) + ' car is driving!')
        }
        return CarConstructor
    })();
    var Suv = (function(){
        var calculateWeight = function(weight){
            return weight * 2;
        }
        var SuvConstructor = function(color, brakes, weight){
            Car.call(this, color, brakes)
            this.weight = calculateWeight(weight);
            this.suv = true
        }
        SuvConstructor.prototype = new Car()
        SuvConstructor.prototype.fly = function(){
            console.log('the ' + whatColorAmI(this) + ' car is flying!')
        }
        SuvConstructor.prototype.constructor = SuvConstructor

        return SuvConstructor
    })();

    var Brakes = function(){}

    var Constructors = {
        Car    : Car,
        Suv    : Suv,
        Brakes : Brakes
    }
    return Constructors
})()



var myRide = new Constructors.Suv('black', new Constructors.Brakes())
console.dir(myRide)
myRide.drive()

$(document).ready(function(){
  
})

