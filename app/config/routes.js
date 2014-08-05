'use strict';

angular.module('doujinReleaseTracker')
  .config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise("/error?code=404");

    $locationProvider.html5Mode(true).hashPrefix('!');
  });
