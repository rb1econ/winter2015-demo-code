var adderExp = function(a, b){
  return a + b;
};

var subtracterExp = function(a, b){
  return a - b;
};

// Allow any file that "requires" this
// file to have access to the adderExp and subtracterExp method
module.exports = {
  adder: adderExp,
  subtracter: subtracterExp
};