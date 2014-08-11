'use strict';

angular.module("votoApp")
    .controller('PollCtrl', function ($scope, Data, Utils) {
        function concordance(match) {
            var total = _.reduce($scope.votes, function (sum, vote) {
                var val = null === vote.choice ? 0 : 1;
                return val *= relevanceWeight[vote.relevancy], sum + val;
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
            if ( 'number' == typeof newVal ) {
                $scope.question = $scope.questions[newVal];
                $scope.vote = $scope.votes[newVal];
            }
        });
        $scope.doVote = function (val) {
            setTimeout(function () {
                $('.choice').blur();
            }, 100);
            var rel = null === $scope.vote.relevancy ? 2 : $scope.vote.relevancy ? 3 : 1;
            $scope.vote.choice = val;
            $scope.next();
            
            s.prop70 = $scope.index + 1 + ':' + val + ':' + rel;
        };
        $scope.setRelevance = function (relevance) {
            $scope.vote.relevancy = relevance;
        }, 
        $scope.jumpTo = function (index) {
            if (index >= 0 && index < $scope.questions.length) $scope.index = index;
            else if (index == $scope.votes.length) {
                if (_.filter($scope.votes, function (v) {
                    return null !== v.choice;
                }).length < $scope.minResponses) return;
                setTimeout(function () {
                    Utils.goTo('match');
                }, 50);
            }
            $scope.$$phase || $scope.$apply();
        }, 
        $scope.animateTo = function (index) {
            index > $scope.index ? $scope.next(index) : index < $scope.index && $scope.prev(index);
        }, 
        $scope.prev = function (index) {
            index = 'undefined' == typeof index ? $scope.index - 1 : index, index >= 0 && $quest.animate({
                opacity: 0,
                left: 100
            }, function () {
                $scope.jumpTo(index), $quest.css({
                    left: -100
                }).animate({
                    opacity: 1,
                    left: 0
                });
            });
        }, 
        $scope.next = function (index) {
            index = 'undefined' == typeof index ? $scope.index + 1 : index, 
            index <= $scope.votes.length - 1 ? $quest.animate({
                opacity: 0,
                left: -100
            }, function () {
                $scope.jumpTo(index), $quest.css({
                    left: 100
                }).animate({
                    opacity: 1,
                    left: 0
                });
            }) : $scope.jumpTo(index);
        }, 
        $scope.recommendations = [], $scope.state = 'none', $scope.$watch('votesCount', function () {
            $scope.progress = $scope.votesCount / $scope.minResponses * 100 + '%';
        }), 
        $scope.$watch('votes', function () {
            $scope.votesCount = _.filter($scope.votes, function (v) {
                return null !== v.choice;
            }).length, $scope.votesCount < $scope.minResponses || Data.getCandidates().then(function (candidates) {
                var leMatch = _(candidates).forEach(function (candidate) {
                    candidate.match = _.reduce(candidate.responses, function (sum, vote, i) {
                        var eq, importance = relevanceWeight[$scope.votes[i].relevancy];
                        return eq = vote === $scope.votes[i].choice && null !== vote ? 1 : 0, sum + eq * importance;
                    }, 0), candidate.concordance = concordance(candidate.match);
                }).sort(function (a, b) {
                    return a.match > b.match ? -1 : b.match > a.match ? 1 : 0;
                }).slice(0, 3).value();
                $scope.recommendations = leMatch, $scope.state = 'found', Data.match = leMatch[0], Utils.trackPage('elegir:recomendado'), Utils.trackEvent(2), Utils.track(), ga('send', 'event', 'recomendation', Data.match.id + ':' + Data.match.concordance), setTimeout(function () {
                    $('.recommendations').addClass('found-match');
                }, 400);
            });
        }, !0), 
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
        }), 
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
        }), 
        $scope.revealMatches = function () {
            $('.show-match').blur(), $('.recommendations').animate({
                left: 0
            });
        }, 
        $scope.hideMatches = function () {
            $('.recommendations').animate({
                left: '100%'
            });
        }, 
        $scope.skip = function () {
            ga('send', 'event', 'skip:' + $scope.index, 'omitir_btn'), $scope.next(), Utils.updateIframe();
        }
    });