'use strict';

angular.module('comiketApp')
  .controller('ContribCtrl', function ($scope, $resource) {
    var contributors = $resource('/contributors.json');
    $scope.contributors = contributors.get();
    $scope.test = 'Test Message';
  });
