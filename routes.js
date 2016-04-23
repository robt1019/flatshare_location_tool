angular.module('flt', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/locationTool/locationToolView.html',
                controller: 'LocationToolCtrl',
                controllerAs: 'ctrl'
            })
            .when('/about', {
                templateUrl: 'components/about/aboutView.html',
            })
            .when('/contact', {
                templateUrl: '/components/contact/contactView.html'
            });
    });
