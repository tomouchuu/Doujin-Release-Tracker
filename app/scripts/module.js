'use strict';

var components = angular.module('comiket.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('comiket', [
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.routeProvider',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'comiket.components',
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