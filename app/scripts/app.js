'use strict';

angular.module('comiketApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/archives', {
        templateUrl: 'views/archives.html',
        controller: 'ArchivesCtrl'
      })
      .when('/archives/:comiketID', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });