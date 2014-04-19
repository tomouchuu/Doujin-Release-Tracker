'use strict';

describe('Controller(/releases): ReleasesCtrl', function () {

  var ReleasesCtrl, scope;

  beforeEach(function () {

    module('comiket');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ReleasesCtrl = $controller('ReleasesCtrl', {
        $scope: scope
      });
    });
  });

//  it('should attach init data to scope', function () {
//    expect(scope.foo).toEqual('bar');
//  });
});