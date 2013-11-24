'use strict';

angular.module('comiketApp')
  .controller('C85Ctrl', function ($scope) {
    $scope.releases = [
      {
        album: 'Test',
        artist: 'Test',
        link: 'http://example.com',
        type: 'vocaloid',
        available: 'http://example.com'
      },
      {
        album: 'Test',
        artist: 'Test',
        link: 'http://example.com',
        type: 'vocaloid',
        available: ''
      },
    ];
  });
