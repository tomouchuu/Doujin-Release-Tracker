'use strict';

angular.module('comiket')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('index', stateFactory('Index', {
            url: '/'
        }));
    })
    .controller('IndexCtrl', function ($scope, $stateParams, ReleasesRepository, EventsRepository) {
        $scope.order = 'artistcircle';
        $scope.orderby = 'false';
        
        var comiketId = 86;
        
        EventsRepository.getById(comiketId).then(function (event) {
            $scope.event = event;
            $scope.comiketId = event.id;
        });
        ReleasesRepository.getById(comiketId).then(function (releases) {
            $scope.releases = releases.releases;
        });
    });
