angular.module('flt').config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl:'index.html',
    controller: 'homeCtrl'
  });
}]);
