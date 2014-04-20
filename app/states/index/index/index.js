'use strict';

angular.module('doujinReleaseTracker')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('index', stateFactory('Index', {
            url: '/'
        }));
    })
    .controller('IndexCtrl', function ($scope, $stateParams, ReleasesRepository, EventsRepository) {
        $scope.order = 'artistcircle';
        $scope.orderby = 'false';
        
        EventsRepository.getAll().then(function (event) {
            event.reverse();
            $scope.event = event[0];
            $scope.comiketId = event[0].id;
        });
        ReleasesRepository.getById($scope.comiketId).then(function (releases) {
            $scope.releases = releases.releases;
        });
    });
