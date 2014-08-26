'use strict';

angular.module('votoApp')
    .controller('PollCtrl', function ($scope, Data, Utils) {
        function concordance(match) {
            var total = _.reduce($scope.votes, function (sum, vote) {
                var val = null === vote.choice ? 0 : 1;
                val *= relevanceWeight[vote.relevancy];
                return sum + val;
            }, 0);
            return Math.round(match / total * 100) + '%';
        }
        var relevanceWeight = {
                'true': 50,
                'null': 20,
                'false': 5
            },
            $quest = $('.left');
        $scope.minResponses = 5;
        $scope.goTo = Utils.goTo;
        $scope.votes = Data.votes;
        $scope.votesCount = 0;
        $scope.progress = '0%'; 
        $scope.questions = Data.getQuestions();
        $scope.index = 0;
        $scope.$watch('index', function (newVal) {
            if ( 'number' === typeof newVal ) {
                $scope.question = $scope.questions[newVal];
                $scope.vote = $scope.votes[newVal];
            }
        });
        $scope.doVote = function (val) {
            setTimeout(function () {
                $('.choice').blur();
            }, 100);
            $scope.vote.choice = val;
            $scope.next();
        };
        $scope.setRelevance = function (relevance) {
            $scope.vote.relevancy = relevance;
        };
        $scope.jumpTo = function (index) {
            if (index >= 0 && index < $scope.questions.length) {
                $scope.index = index;
            }
            else if (index === $scope.votes.length) {
                if (_.filter($scope.votes, function (v) {
                    return null !== v.choice;
                }).length < $scope.minResponses) {
                    return;
                }
                setTimeout(function () {
                    Utils.goTo('match');
                }, 50);
            }
            if ( ! $scope.$$phase ) { 
                $scope.$apply();
            }
        };
        $scope.animateTo = function (index) {
            if ( index > $scope.index ) {
                $scope.next(index);
            }
            if ( index < $scope.index ) {
                $scope.prev(index);
            }
        };
        $scope.prev = function (index) {
            index = 'undefined' === typeof index ? $scope.index - 1 : index;
            if ( index >= 0 ) {
                $quest.animate({
                    opacity: 0,
                    left: 100
                }, function () {
                    $scope.jumpTo(index);
                    $quest.css({
                        left: -100
                    }).animate({
                        opacity: 1,
                        left: 0
                    });
                });
            }
        };
        $scope.next = function (index) {
            index = 'undefined' === typeof index ? $scope.index + 1 : index;
            if ( index <= $scope.votes.length - 1 ) {
                $quest.animate({
                    opacity: 0,
                    left: -100
                }, function () {
                    $scope.jumpTo(index);
                    $quest.css({
                        left: 100
                    }).animate({
                        opacity: 1,
                        left: 0
                    });
                });
            } else {
                $scope.jumpTo(index);
            }
        };
        $scope.recommendations = [];
        $scope.state = 'none';
        $scope.$watch('votesCount', function () {
            $scope.progress = $scope.votesCount / $scope.minResponses * 100 + '%';
        });
        $scope.$watch('votes', function () {
            $scope.votesCount = _.filter($scope.votes, function (v) {
                return null !== v.choice;
            }).length;
            if (  $scope.votesCount >= $scope.minResponses ) { 
                var candidates = Data.getCandidates();
                _(candidates).forEach(function (candidate) {
                    candidate.match = _.reduce(candidate.responses, function (sum, vote, i) {
                        var eq,
                            importance = relevanceWeight[$scope.votes[i].relevancy];
                        eq = ( vote === $scope.votes[i].choice && null !== vote ) ? 1 : 0;
                        return sum + eq * importance;
                    }, 0);
                    candidate.concordance = concordance(candidate.match);
                });
                candidates.sort(function (a, b) {
                    return a.match > b.match ? -1 : b.match > a.match ? 1 : 0;
                });
                var leMatch = candidates.slice(0, 3);
                $scope.recommendations = leMatch;
                $scope.state = 'found';
                Data.match = leMatch[0];
                setTimeout(function () {
                    $('.recommendations').addClass('found-match');
                }, 400);
            }
        }, !0);
        $('.question').on('click', '.help', function (event) {
            $(this).qtip({
                overwrite: !0,
                show: {
                    event: event.type,
                    ready: !0
                },
                hide: {
                    event: 'unfocus'
                },
                position: {
                    my: 'top left',
                    at: 'bottom left',
                    target: $('.question-content')
                },
                style: {
                    classes: 'table-tooltip--wider'
                },
                onHide: function () {
                    $(this).qtip('destroy');
                }
            });
        });
        $('.recommendations').on('click', '[title]', function (event) {
            $(this).qtip({
                overwrite: !0,
                show: {
                    event: event.type,
                    ready: !0
                },
                hide: {
                    event: 'unfocus'
                },
                position: {
                    my: 'bottom center',
                    at: 'top center',
                    target: this
                },
                style: {
                    classes: 'table-tooltip'
                },
                onHide: function () {
                    $(this).qtip('destroy');
                }
            });
        });
        $scope.revealMatches = function () {
            $('.show-match').blur();
            $('.recommendations').animate({
                left: 0
            });
        };
        $scope.hideMatches = function () {
            $('.recommendations').animate({
                left: '100%'
            });
        };
        $scope.skip = function () {
            $scope.next();
        };
    });