// Modules:
var myModule = angular.module('myModule', []);

// Controllers:                          - Dependency Injection -
myModule.controller('myController', function($scope){
  // console.log('Controller is run!');
  // console.log($scope);
  $scope.name = 'Chris';

  $scope.user = {
    name: 'Chris',
    color: 'Blue'
  };

  // Attach a method to our scope
  $scope.printName = function(){
    console.log('Name is:', $scope.name);
  };
});

myModule.controller('dataController', function($scope, myService, myFactory){
  console.log(myService, myFactory);
  $scope.service = myService;
  $scope.factory = myFactory;
});

// Controllers with dependency injection, minification safe
/*
myModule.controller('myController', ['$scope', '$resource', function($scope, $resource){
  console.log('Controller is run!');
  console.log($scope);
}]);
*/


// Services and Factories:

// Service:
myModule.service('myService', function(){
  this.message = 'Hello World, from service!';
});

// Factory:
myModule.factory('myFactory', function(){
  var message = 'Hello World, from factory!';

  return {
    message: message
  };
});


// Directive:
myModule.directive('prime', function(){
  return {
    restrict: 'E',
    template: '<h1>Don\'t Mess with Other Civilizations</h1>'
  };
});

// Filters:
myModule.filter('pigLatin', function(){
  return function(str){
    var raw = str.split('');
    raw.push(raw.shift());
    return raw.join('') + 'ay';
  };
});
