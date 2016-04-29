(function() {
    'use strict';

    angular.module('flt').controller('LocationToolCtrl', ['$scope', 'LocationToolService',
        function($scope, LocationToolService) {

            angular.extend($scope, {
                london: {
                    lat: 51.51,
                    lng: 0.13,
                    zoom: 13
                },
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
                    scrollWheelZoom: false
                },
                housemates: {
                    housemate1: {},
                    housemate2: {},
                    housemate3: {},
                    housemate4: {},
                    housemate5: {}
                }
            });

            angular.extend($scope, {
                getResults: function(housemates) {
                    LocationToolService.getResults(housemates);
                }
            });
        }
    ]);
})();
