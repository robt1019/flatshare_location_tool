// main module
angular.module('flt', ['flt.home', 'flt.nav', 'ngRoute']);

// other modules
angular.module('flt.home', ['flt.nav']);
angular.module('flt.nav', []);
