'use strict';

angular.module('comiket')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('releases', stateFactory('Releases', {
            url: '/releases/:comiketId',
            templateUrl: 'states/releases/index/main-view.html'
        }));
    })
    .controller('ReleasesCtrl', function ($scope, $stateParams, ReleasesRepository, EventsRepository) {
        $scope.order = 'artistcircle';
        $scope.orderby = 'false';
        
        var comiketId = 86;
        
        if ($stateParams.comiketId !== '')
        {
            comiketId = $stateParams.comiketId.replace('c','');
            EventsRepository.getById(comiketId).then(function (event) {
                $scope.event = event;
                $scope.comiketId = event.id;
            });
            ReleasesRepository.getById(comiketId).then(function (releases) {
                $scope.releases = releases.releases;
            });
        }
        else
        {
            EventsRepository.getById(comiketId).then(function (event) {
                $scope.event = event;
                $scope.comiketId = event.id;
            });
            ReleasesRepository.getById(comiketId).then(function (releases) {
                $scope.releases = releases.releases;
            });
        }
    });
