(function() {
    'use strict';

    angular.module('flt').controller('LocationToolCtrl', 'LocationToolService', [
        function(LocationToolService) {

            this.housemates = {
                housemate1: {},
                housemate2: {},
                housemate3: {},
                housemate4: {},
                housemate5: {}
            };

            this.getResults = function(housemates) {
                LocationToolService.getResults(housemates);
            };
        }
    ]);
})();
