(function() {
    'use strict';

    describe('locationTool', function() {
        describe('LocationToolCtrl', function() {

            var LocationToolCtrl, $controller, mockLocationToolService;

            beforeEach(module('flt'));

            beforeEach(inject(function(_$controller_) {
                $controller = _$controller_;
            }));

            mockLocationToolService = {
                getResults: function() {}
            };

            LocationToolCtrl = $controller('LocationToolCtrl', {
                LocationToolService: mockLocationToolService
            });

            describe('getResults', function() {
                it('should call LocationToolService.getResults with relevant argument', function() {
                    var testHousemates = {
                        housemate1: { location: 'B80 7QX' },
                        housemate2: { location: 'B80 7QX' }
                    };
                    spyOn(mockLocationToolService, 'getResults');
                    LocationToolCtrl.getResults(testHousemates);
                    expect(mockLocationToolService.setHousemates()).
                    toHaveBeenCalledWith(testHousemates);
                });
            });
        });
    });
})();
