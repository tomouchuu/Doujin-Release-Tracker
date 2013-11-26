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
  });
