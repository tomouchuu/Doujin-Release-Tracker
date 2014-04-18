'use strict';

angular.module('comiket')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('archive', stateFactory('Archive', {
            url: '/archive',
            templateUrl: 'states/archive/index/main-view.html'
        }));
    })
    .controller('ArchiveCtrl', function ($scope, EventsRepository) {
        EventsRepository.getAll().then(function (events) {
            $scope.events = events;
        });
    });
