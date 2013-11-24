'use strict';

angular.module('comiketApp')
  .controller('C85Ctrl', function ($scope) {
    $scope.releases = [
      {
        album: 'Cake',
        artist: 'Cake',
        link: 'http://example.com',
        type: ['vocaloid','utaite'],
        available: 'http://example.com'
      },
      {
        album: 'Test',
        artist: 'Test',
        link: 'http://example.com',
        type: 'touhou',
        available: ''
      },
      {
        album: 'Test',
        artist: 'Test',
        link: 'http://example.com',
        type: 'other',
        available: ''
      },
    ];
  });
