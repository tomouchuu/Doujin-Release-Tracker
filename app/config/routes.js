'use strict';

angular.module('comiket')
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise("/error?code=404");
  });
