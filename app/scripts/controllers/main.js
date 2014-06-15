'use strict';

/**
 * @ngdoc function
 * @name meerieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meerieApp
 */
angular.module('meerieApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
