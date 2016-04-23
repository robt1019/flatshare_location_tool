(function() {
    'use strict';

    angular.module('flt').controller('LocationToolCtrl', [function() {

        this.housemates = {
            housemate1: {},
            housemate2: {},
            housemate3: {},
            housemate4: {},
            housemate5: {}
        };

        this.getResults = function() {
            alert('test');
        };
    }]);
})();
