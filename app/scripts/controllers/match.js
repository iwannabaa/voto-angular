'use strict';

angular.module('votoApp')
	.controller('MatchCtrl', function($scope, Data, Utils) {
	    $scope.goTo = Utils.goTo;
	    $scope.match = Data.match;
	    $scope.repeat = function() {
	        for (var i = 0; i < Data.votes.length; i++) {
	        	Data.votes[i].relevancy = null;
	        	Data.votes[i].choice = null;
	        }
	        Utils.goTo('poll');
	    };
	});