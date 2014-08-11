'use strict';

angular.module('votoApp')
    .controller('CandidateCtrl', function($scope, $routeParams, Data, Utils) {
        $scope.goTo = function(dest) {
            Utils.goTo(dest);
        };
        $scope.tab = 0;
        $scope.candidate = Data.byId($routeParams.id);
        $scope.questions = Data.getQuestions();
    });