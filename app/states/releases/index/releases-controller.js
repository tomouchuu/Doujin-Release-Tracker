'use strict';

angular.module('doujinReleaseTracker')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('releases', stateFactory('Releases', {
            url: '/releases/{comiketId:[c[0-9]+]*}',
            templateUrl: 'states/releases/index/main-view.html'
        }));
    })
    .controller('ReleasesCtrl', function ($scope, $state, $stateParams, ReleasesRepository, EventsRepository) {
        $scope.order = 'artistcircle';
        $scope.orderby = 'false';
        
        if ($stateParams.comiketId !== '')
        {
            var comiketId = $stateParams.comiketId.replace('c','');
            EventsRepository.getById(comiketId).then(function (event) {
                $scope.event = event;
                $scope.comiketId = event.id;
            }, function(response) {
                $state.go('releases', {comiketId: 'c86'});
                console.log('Error with status code', response.status);
            });
            ReleasesRepository.getById(comiketId).then(function (releases) {
                $scope.releases = releases.releases;
            });
        }
        else
        {
            EventsRepository.getAll().then(function (event) {
                event.reverse();
                $scope.event = event[0];
                $scope.comiketId = event[0].id;
            });
            ReleasesRepository.getById($scope.comiketId).then(function (releases) {
                $scope.releases = releases.releases;
            });
        }
    });
