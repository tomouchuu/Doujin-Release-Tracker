'use strict';

  .controller('navbarComponentCtrl', function ($scope, $element) {
    $scope.text = 'this is the navbar component';
angular.module('doujinReleaseTracker.components')
  })
  .component('navbar', function () {
    return {
      controller: 'navbarComponentCtrl'
    };
  });
