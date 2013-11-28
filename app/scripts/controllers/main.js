'use strict';

angular.module('comiketApp')
  .controller('MainCtrl', function ($scope, $routeParams, $resource) {
    $scope.comiketID = $routeParams.comiketID;
    if (angular.isDefined($scope.comiketID) === false)
    {
      $scope.comiketID = 'c85';
    }
    
    var releasesURL = '/events/:comiketID.json';

    // Use $http to grab releases (http://docs.angularjs.org/api/ng.$http) then use the error callback when it can't find the Comiket ID to redirect to c85

    // var releases = $resource($scope.releasesURL, {comiketID: '@cID'});
    // var release = releases.get({comiketID: $scope.comiketID}, function() {
    //   $scope.releases = release;
    // });
  });
