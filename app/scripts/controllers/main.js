'use strict';

/**
 * @ngdoc function
 * @name utApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the utApp
 */
angular.module('utApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
