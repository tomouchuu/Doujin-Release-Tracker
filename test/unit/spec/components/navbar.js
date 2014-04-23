'use strict';

describe('Component: navbarComponent', function () {

  describe('Directive: navbarComponent', function () {
    var element, scope, $compile;

    beforeEach(function () {

      module('doujinReleaseTracker');

      inject(function ($rootScope, _$compile_) {
        scope = $rootScope.$new();
        $compile = _$compile_;
      });

    });

    it('should have the component class', function () {
      element = angular.element('<navbar-component></navbar-component>');
      element = $compile(element)(scope);
      scope.$digest();
      expect(element).toHaveClass('navbar-component');
    });

  });

});
