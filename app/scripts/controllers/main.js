'use strict';

angular.module('votoApp')
	.controller('MainCtrl', function($scope, Data, Utils) {
	    $scope.goTo = function(dest) {
	        Utils.goTo(dest);
	    };

	    $scope.votes = Data.votes;
	});