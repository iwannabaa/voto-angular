'use strict';

angular.module('votoApp')
    .factory('Utils', function($location, $rootScope) {
        var facade = {
                goTo: function(url) {
                    $location.path('/' + url);
                    if ( ! $rootScope.$$phase ) {
                        $rootScope.$apply();
                    }
                }
            };
        return facade;
    });