'use strict';

angular.module('votoApp')
	.controller('ResultsCtrl', function($scope, Data, Utils) {
	    var tooltipEvent, tooltipEventLeave;
	    $scope.goTo = Utils.goTo;
	    $scope.votes = Data.votes;
	    $scope.match = Data.match;
	    $scope.candidates = [Data.match];
	    $scope.mode = false;
	    $scope.questions = Data.getQuestions();
	    $scope.voteVal = function(vote) {
	        return null === vote ? '-' : vote === true ? 'Si' : 'No';
	    };
	    $scope.toggleMode = function() {
	        $scope.mode = !$scope.mode;
	        $('.table').toggleClass('force-width');
	        if ( $scope.mode ) {
	                $scope.candidates = Data.getCandidates();
	        } else {
	            $scope.candidates = [Data.match];
	        } 
	    };
	    if ( 'ontouchstart' in document.documentElement ) {
	        tooltipEvent = 'touchend';
	        tooltipEventLeave = 'unfocus';
	    }else {
	        tooltipEvent = 'mouseenter';
	        tooltipEventLeave = 'mouseleave';
	    }
	    $('.table').on(tooltipEvent, '.td.index[title],.td.response[title]', function(event) {
	        $(this).qtip({
	            overwrite: false,
	            show: {
	                event: event.type,
	                ready: true
	            },
	            position: {
	                my: 'left center',
	                at: 'right center',
	                target: $(this).parent('.tr').find('.response')
	            },
	            style: {
	                classes: 'table-tooltip'
	            },
	            hide: {
	                event: tooltipEventLeave
	            },
	            onHide: function() {
	                $(this).qtip('destroy');
	            }
	        });
	    });
	    $('.table').on(tooltipEvent, '.img-container', function(event) {
	        $(this).qtip({
	            overwrite: !1,
	            show: {
	                event: event.type,
	                ready: !0
	            },
	            position: {
	                my: 'right center',
	                at: 'left center',
	                target: $(this)
	            },
	            style: {
	                classes: 'table-tooltip'
	            },
	            hide: {
	                event: tooltipEventLeave
	            },
	            onHide: function() {
	                $(this).qtip('destroy');
	            }
	        });
	    });
	    $('.table').on(tooltipEvent, '.td[title]', function(event) {
	        $(this).qtip({
	            overwrite: !1,
	            show: {
	                event: event.type,
	                ready: !0
	            },
	            position: {
	                my: 'top center',
	                at: 'bottom center',
	                target: this
	            },
	            style: {
	                classes: 'table-tooltip--medium'
	            },
	            hide: {
	                event: tooltipEventLeave
	            },
	            onHide: function() {
	                $(this).qtip('destroy');
	            }
	        });
	    });
	    $scope.repeat = function() {
	        for (var i = 0; i < Data.votes.length; i++) {
	            Data.votes[i].relevancy = null;
	            Data.votes[i].choice = null;
	        } 
	        Data.match = null;
	        Utils.goTo('poll');
	    };
	});