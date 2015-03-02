// ANGULAR CLIENT SIDE
var newsApp = angular.module('newsApp', ['ngResource']);

// Data from server:
newsApp.factory('News', function($resource){
  // Define and return a resource connection
  return $resource(
    '/api/news/:id',
    {id: '@_id'}
  );
});

// List Controller:
newsApp.controller('listController', function($scope, News){
  // Stick the data directly into the $scope
  $scope.news = News.query();
});

// New Item Controller:
newsApp.controller('newItemController', function($scope, News){
  $scope.item = {};
  $scope.addItem = function(){
    var newItem = new News($scope.item);
    newItem.$save();
  };
});

// News Item Directive:
newsApp.directive('newsitem', function(){
  return {
    restrict: 'E',
    templateUrl: '/templates/newsItem'
  };
});
