// This is valid because named functions are
// HOISTED to the top of their parent scope
console.log(subtracter(10, 5));

// cannot use adder yet because it hasn't
// been HOISTED, so it is unavailable here:
// console.log(adder(10, 5));

// Function expression / declaration
var adder = function(a, b){
  return a + b;
};

// Named function
function subtracter(a, b){
  return a - b;
}





//  PREVIEW OF CALLBACK
var printerExclaimer = function(item){
  return item + "!";
};
var printerRepeater = function(item){
  return item + item + item;
};

var mapper = function(listOfItems, func){
  console.log('Func:', func);
  for (var i = 0; i < listOfItems.length; i++) {
    console.log( func(listOfItems[i]) );
  }
};

var items = ["Hello", "world"];
console.log('printerExclaimer:', printerExclaimer);
console.log('printerRepeater:', printerRepeater);
mapper(items, printerExclaimer);
// mapper(items, printerRepeater);