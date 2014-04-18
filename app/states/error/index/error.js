'use strict';

angular.module('comiket')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('error', stateFactory('Error', {
      url: '/error?code'
    }));
  })
  .controller('ErrorCtrl', function ($scope, $stateParams) {
    $scope.errorCode = $stateParams.code;
  });
