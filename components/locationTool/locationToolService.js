angular.module('flt').service('LocationToolService', ['$http', '$q',
    function($http, $q) {

        this.housemates = {};

        this.getLatLong = function(postcode) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'http://api.postcodes.io/postcodes/' + postcode
            }).then(function successCallBack(response) {
                deferred.resolve(response);
            }, function errorCallBack(response) {
                deferred.reject(response.status);
            });
            return deferred.promise;
        };
    }
]);
