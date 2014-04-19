'use strict';

describe('Controller(/archive): ArchiveCtrl', function () {

  var ArchiveCtrl, scope;

  beforeEach(function () {

    module('comiket');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ArchiveCtrl = $controller('ArchiveCtrl', {
        $scope: scope
      });
    });
  });

//  it('should attach init data to scope', function () {
//    expect(scope.foo).toEqual('bar');
//  });
});