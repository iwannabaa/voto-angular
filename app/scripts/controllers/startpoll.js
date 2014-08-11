'use strict';

angular.module('votoApp')
	.controller('StartpollCtrl', function($scope, Utils) {
	    $scope.goTo = Utils.goTo;
	});