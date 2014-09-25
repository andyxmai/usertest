'use strict';

/**
 * @ngdoc function
 * @name utApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the utApp
 */
angular.module('utApp')
  .controller('MainCtrl', function ($scope, $modal, $log) {
	  $scope.open = function (size) {

	    var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller: ModalInstanceCtrl,
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  }; 
  });

var ModalInstanceCtrl = function ($scope, $modalInstance, $http) {

  $scope.ok = function(form) {
    console.log(form);
    $http.post('/email/', form);
    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
};