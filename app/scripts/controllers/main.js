'use strict';

angular.module('comiketApp')
  .controller('MainCtrl', function ($scope, $routeParams, $resource) {
    $scope.comiketID = $routeParams.comiketID;
    if (angular.isDefined($scope.comiketID) === false)
    {
      $scope.comiketID = 'c85';
    }
    $scope.releasesURL = '/events/:comiketID.json';

    var releases = $resource($scope.releasesURL, {comiketID: '@cID'});
    var release = releases.get({comiketID: $scope.comiketID}, function() {
      $scope.releases = release;
    });

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
