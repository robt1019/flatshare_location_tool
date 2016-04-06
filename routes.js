angular.module('flt', ['ngRoute', 'flt.home'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/home/homeView.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'components/about/aboutView.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      })
      .when('/contact', {
        templateUrl: '/components/contact/contactView.html'
      });
  });

// /home/rob/Documents/web_projects/flatshare_location_tool/components/about/aboutView.html
