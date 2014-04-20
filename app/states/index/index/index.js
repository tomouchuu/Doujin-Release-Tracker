'use strict';

angular.module('doujinReleaseTracker')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('index', stateFactory('Index', {
            url: '/'
        }));
    })
    .controller('IndexCtrl', function ($rootScope, $scope, $stateParams, ReleasesRepository, EventsRepository) {
        $scope.order = 'artistcircle';
        $scope.orderby = 'false';
        
        EventsRepository.getAll().then(function (event) {
            var ids = Object.keys(event);
            ids.reverse();
            
            var first = ids[0];
            
            $scope.event = event[first];
            $scope.eventId = first;
            $rootScope.eventId = first;
            
            ReleasesRepository.getById($scope.eventId).then(function (releases) {
                $scope.releases = releases.releases;
            });
        });
    });
