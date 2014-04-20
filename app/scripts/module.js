'use strict';

var components = angular.module('doujinReleaseTracker.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('doujinReleaseTracker', [
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.routeProvider',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'doujinReleaseTracker.components',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap',
  'restangular',
  'ngSanitize'
]);
angular.componentFactory.moduleDecorator(app);