(function() {
    'use strict';

    angular.module('flt').controller('LocationToolCtrl', ['$scope', 'LocationToolService',
        function($scope, LocationToolService) {

            // modules
            angular.extend($scope, {
                events: {},
                layers: {
                    baselayers: {
                        osm: {
                            name: 'OpenStreetMap',
                            url: 'https://{s}.tiles.mapbox.com/',
                            type: 'xyz'
                        }
                    }
                },

                defaults: {
                    scrollWheelZoom: true
                },
                location: {
                    postcode: '',
                    lat: '',
                    long: ''
                },
                center: {
                    lat: '',
                    lng: '',
                    zoom: 15
                }
            });

            // methods
            angular.extend($scope, {
                getResults: function(postcode) {
                    var promise = LocationToolService.getLatLong(postcode);
                    promise.then(function(response) {
                        $scope.center.lat = response.data.result.latitude;
                        $scope.center.lng = response.data.result.longitude;
                        $scope.location.latitude = response.data.result.latitude;
                        $scope.location.longitude = response.data.result.longitude;
                    }, function(error) {
                        window.alert(error + ' error. Try again later');
                    });
                }
            });
        }
    ]);
})();
