'use strict';

/**
 * @ngdoc function
 * @name meerieApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meerieApp
 */
angular.module('meerieApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
