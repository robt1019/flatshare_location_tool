(function() {
    'use strict';

    describe('locationTool', function() {
        describe('LocationToolCtrl', function() {

            var LocationToolCtrl, $controller, mockLocationToolService;

            beforeEach(module('flt'));

            beforeEach(inject(function(_$controller_) {
                $controller = _$controller_;

                mockLocationToolService = {
                    getResults: function() {}
                };

                LocationToolCtrl = $controller('LocationToolCtrl', {
                    LocationToolService: mockLocationToolService
                });

            }));

            describe('getResults', function() {
                it('should call LocationToolService.getResults with relevant argument', function() {
                    var testHousemates = {
                        housemate1: { location: 'B80 7QX' },
                        housemate2: { location: 'B80 7QX' }
                    };
                    spyOn(mockLocationToolService, 'getResults');
                    LocationToolCtrl.getResults(testHousemates);
                    expect(mockLocationToolService.getResults).toHaveBeenCalledWith(testHousemates);
                });
            });
        });

        describe('LocationToolService', function() {

            var LocationToolService;

            beforeEach(module('flt'));

            beforeEach(inject(function(_LocationToolService_) {
                LocationToolService = _LocationToolService_;
            }));

            describe('getResults', function() {

                it('should set housemates object correctly', function() {
                    var testHousemates = {
                        housemate1: { location: 'B80 7QX' },
                        housemate2: { location: 'B80 7QX' }
                    };
                    LocationToolService.getResults(testHousemates);
                    expect(LocationToolService.housemates).toEqual(testHousemates);
                });

            });
        });
    });
})();
