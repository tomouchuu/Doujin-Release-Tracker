'use strict';

describe('Controller: ArchivesCtrl', function () {

  // load the controller's module
  beforeEach(module('comiketApp'));

  var ArchivesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArchivesCtrl = $controller('ArchivesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
