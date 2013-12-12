'use strict';

angular.module('comiketApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angulartics',
  'angulartics.google.analytics'
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
      .when('/contributors', {
        templateUrl: 'views/contributors.html',
        controller: 'ContribCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });