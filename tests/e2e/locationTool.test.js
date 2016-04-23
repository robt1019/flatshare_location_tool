(function() {
    'use strict';

    describe('location tool', function() {

        beforeEach(function() {
            browser.get('http://localhost:8080/#/');
        });

        it('should let a user select 5 locations by inputting postcodes, and submit the form', function() {
            element(by.model('ctrl.housemates.housemate1.location')).sendKeys('KA26 9NP');
            element(by.model('ctrl.housemates.housemate2.location')).sendKeys('LL70 9DX');
            element(by.model('ctrl.housemates.housemate3.location')).sendKeys('B80 7QX');
            element(by.model('ctrl.housemates.housemate4.location')).sendKeys('NG10 5NQ');
            element(by.model('ctrl.housemates.housemate5.location')).sendKeys('E15 1XJ');
            element(by.css('[type="submit"]')).click();
        });
    });

})();
