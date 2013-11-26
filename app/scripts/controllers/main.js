'use strict';

angular.module('comiketApp')
  .controller('MainCtrl', function ($scope, $routeParams, $resource) {
    $scope.comiketID = $routeParams.comiketID;
    if (angular.isDefined($scope.comiketID) === false)
    {
      $scope.comiketID = 'c85';
    }
    
    var events = $resource('/events/events.json');
    $scope.events = events.get();
    var validEvent = false;

    // Loop through the events and compare the $scope.comiketID with events.shortname
    // When there is a match set validEvent to true

    if (validEvent === false)
    {
      // This needs to redirect to C85 rather than point to C85
      $scope.comiketID = 'c85';
    }
    
    $scope.releasesURL = '/events/:comiketID.json';

    var releases = $resource($scope.releasesURL, {comiketID: '@cID'});
    var release = releases.get({comiketID: $scope.comiketID}, function() {
      $scope.releases = release;
    });
  });
