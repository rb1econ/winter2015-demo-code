// ANGULAR CLIENT SIDE
var newsApp = angular.module('newsApp',
  ['ngResource', 'ngRoute']
);

// Configure our client-side routing
newsApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/templates/home',
      controller: 'homeController'
    })
    .when('/view/:id', {
      templateUrl: '/templates/view',
      controller: 'viewController'
    });
});

// Data from server:
newsApp.factory('News', function($resource){
  // Define and return a resource connection

  var model = $resource(
    '/api/news/:id',
    {id: '@_id'}
  );

  return {
    model: model,
    items: model.query()
  };
});

// Home Controller
newsApp.controller('homeController', function(){});

// View Controller
newsApp.controller('viewController', function($routeParams, $scope, News){
  $scope.item = News.model.get({_id: $routeParams.id});
});

// List Controller:
newsApp.controller('listController', function($scope, News){
  // Stick the data directly into the $scope
  $scope.news = News.items;
});

// New Item Controller:
newsApp.controller('newItemController', function($scope, News){
  $scope.item = {};
  $scope.addItem = function(){
    var newItem = new News.model($scope.item);
    newItem.$save(function(savedItem){
      // Make sure to convert the JSON from the server
      // into a useable resource instance,
      // then push it into the model list
      var modelItem = new News.model(savedItem);
      News.items.push(modelItem);
    });
  };
});

// News Item Directive:
newsApp.directive('newsitem', function(){
  return {
    restrict: 'E',
    templateUrl: '/templates/newsItem'
  };
});
