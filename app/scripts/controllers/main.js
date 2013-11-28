'use strict';

angular.module('comiketApp')
  .controller('MainCtrl', function ($scope, $routeParams, $resource) {
    function legitEvent (comiketID) {
      // First check that the path has a comiketID
      if (angular.isDefined(comiketID) === false)
      {
        // If not set it to the most recent/upcoming Event
        $scope.comiketID = 'c85';
      }

      // Get a list of events
      var events = $resource('/events/events.json');
      $scope.events = events.get();

      // Start by calling it an unvalid event so we can confirm it is valid later
      var validEvent = false;

      // Loop through the events and compare the $scope.comiketID with events.shortname
      // When there is a match set validEvent to true

      if (validEvent === false)
      {
        // This needs to redirect to C85 rather than point to C85
        // $scope.comiketID = 'c85';
      }
    }

    // Get the comiketID from the route
    $scope.comiketID = $routeParams.comiketID;

    // Confirm it is an event we have
    legitEvent($scope.comiketID);
    
    // Build the url to the release list
    $scope.releasesURL = '/events/:comiketID.json';

    // Get the initial url
    var releases = $resource($scope.releasesURL, {comiketID: '@cID'});
    // Find our release
    var release = releases.get({comiketID: $scope.comiketID}, function() {
      // Set the release to the scope
      $scope.releases = release;
    });
  });
