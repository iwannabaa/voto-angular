'use strict';

angular.module('votoApp')
    .controller('CandidatesCtrl', function($scope, Data, Utils) {
        $scope.goTo = function(dest) {
            Utils.goTo(dest);
        };
        var candidates = Data.getCandidates();
        $scope.candidates = _.shuffle(candidates);
    });