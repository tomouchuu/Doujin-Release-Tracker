'use strict';

angular.module('comiketApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/c85.html',
        controller: 'C85Ctrl'
      })
      .when('/archives', {
        templateUrl: 'views/archives.html',
        controller: 'ArchivesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });