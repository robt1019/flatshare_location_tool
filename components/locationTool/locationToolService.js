angular.module('flt').service('LocationToolService', [function() {

    this.housemates = {};

    this.getResults = function(housemates) {
        this.housemates = housemates;
    };

}]);
