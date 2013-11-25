'use strict';

angular.module('comiketApp')
  .controller('MainCtrl', function ($scope, $routeParams) {
    $scope.comiketID = $routeParams;
    if (angular.isDefined($scope.comiketID.comiketID) === false)
    {
      $scope.comiketID.comiketID = 'c85';
    }
    $scope.releaseURL = '/releases/'+$scope.comiketID.comiketID+'.json';
    // $scope.releases = [
    //   {
    //     album: 'Cake',
    //     artist: 'Cake',
    //     link: 'http://example.com',
    //     type: ['vocaloid','utaite'],
    //     available: 'http://example.com'
    //   },
    //   {
    //     album: 'Test',
    //     artist: 'Test',
    //     link: 'http://example.com',
    //     type: 'touhou',
    //     available: ''
    //   },
    //   {
    //     album: 'Test',
    //     artist: 'Test',
    //     link: 'http://example.com',
    //     type: 'other',
    //     available: ''
    //   },
    // ];
  });
