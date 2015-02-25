var myFunc = function(name){
  console.log('hello, ' + name);
};

var testFunc = function(myParam){
  console.log(myParam);

  // myParam aka myFunc aka function(name){
  //   console.log('hello, ' + name);
  // }
  myParam('daneyal');
};

testFunc(myFunc);


//============================================


var myFunc = function(a, b){
  a(b, 'hello');
};

var testFunc = function(c){
  c('test');
};

var thirdFunc = function(d){
  console.log(d);
};

myFunc(testFunc, thirdFunc);


//============================================

var getNum = function(a, b, c){
  setTimeout(function(){
    b(Math.random());
  }, Math.random() * 3000);
};

var tester = function(d){
  console.log(d * 100);
};

getNum(function(x){
  console.log('The number is', x);
}, tester, 20);


//============================================


var a = function(b){
  return function(c){
    console.log(b(c));
  };
};

var d = function(e){
  return '!' + e + '!';
};

a(d)('hello');
