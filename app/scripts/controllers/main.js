'use strict';

angular.module('comiketApp')
  .controller('MainCtrl', function ($scope, $routeParams, $q, $http) {
    $scope.comiketID = $routeParams.comiketID;
    if (angular.isDefined($scope.comiketID) === false)
    {
      $scope.comiketID = 'c85';
    }
    
    var releasesURL = '/events/'+$scope.comiketID+'.json';

    $http({method: 'GET', url: releasesURL}).
      success(function(data,status){
        $scope.status = status;
        $scope.data = data;
      }).
      error(function(data,status){
        $scope.comiketID = 'c85';
        $scope.status = status;
        $scope.data = data || 'Request Failed';
      });
  });
