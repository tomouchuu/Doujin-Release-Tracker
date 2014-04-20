'use strict';

angular.module('doujinReleaseTracker')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('releases', stateFactory('Releases', {
            url: '/releases/{eventId:[c[0-9]+]*}',
            templateUrl: 'states/releases/index/main-view.html'
        }));
    })
    .controller('ReleasesCtrl', function ($rootScope, $scope, $state, $stateParams, Config, ReleasesRepository, EventsRepository) {
        $scope.order = 'artistcircle';
        $scope.orderby = 'false';
        
        if ($stateParams.eventId !== '')
        {
            if (Config.event === 'comiket')
            {
                var eventId = $stateParams.eventId.replace('c','');
            }
            EventsRepository.getById(eventId).then(function (event) {
                $scope.event = event;
                $scope.eventId = eventId;
                $rootScope.eventId = eventId;
                
                ReleasesRepository.getById(eventId).then(function (releases) {
                    $scope.releases = releases.releases;
                });
            }, function(response) {
                $state.go('releases', {eventId: 'c86'});
                console.log('Error with status code', response.status);
            });
        }
        else
        {
            EventsRepository.getAll().then(function (event) {
                var ids = Object.keys(event);
                ids.reverse();

                var first = ids[0];

                $scope.event = event[first];
                $scope.eventId = first;
                
                ReleasesRepository.getById($scope.eventId).then(function (releases) {
                    $scope.releases = releases.releases;
                });
            });
        }
    });
