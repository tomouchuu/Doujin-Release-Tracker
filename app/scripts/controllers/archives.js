'use strict';

angular.module('comiketApp')
  .controller('ArchivesCtrl', function ($scope, $resource) {
    var events = $resource('/events/events.json');
    $scope.events = events.get();
  });
