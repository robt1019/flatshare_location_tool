angular.module('flt')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/locationTool/locationToolView.html',
                controller: 'LocationToolCtrl',
                controllerAs: 'ctrl'
            });
    });
