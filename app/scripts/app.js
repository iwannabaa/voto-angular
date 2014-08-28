'use strict';

angular
  .module('votoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/candidates', {
        templateUrl: '/views/candidates.html',
        controller: 'CandidatesCtrl'
      }).when('/candidates/:id', {
        templateUrl: '/views/candidate.html',
        controller: 'CandidateCtrl'
      }).when('/start-poll', {
        templateUrl: '/views/startpoll.html',
        controller: 'StartpollCtrl'
      }).when('/poll', {
        templateUrl: '/views/poll.html',
        controller: 'PollCtrl'
      }).when('/match', {
        templateUrl: '/views/match.html',
        controller: 'MatchCtrl'
      }).when('/results', {
        templateUrl: '/views/results.html',
        controller: 'ResultsCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
