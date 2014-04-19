'use strict';

describe('Controller: IndexCtrl', function () {

  var IndexCtrl, scope, $rootScope, deferred, promise, ReleasesRepository;

  beforeEach(function () {

    module('comiket');

    inject(function ($controller, _$rootScope_, $q) {
      $rootScope = _$rootScope_;

      deferred = $q.defer();
      promise = deferred.promise;

      ReleasesRepository = {
        getAll: jasmine.createSpy('ReleasesRepository.getAll()').and.callFake(function () {
          return promise;
        })
      };

      scope = $rootScope.$new();
      IndexCtrl = $controller('IndexCtrl', {
        $scope: scope,
        ReleasesRepository: ReleasesRepository
      });
    });
  });

//  it('should attach init data to scope', function () {
//    var comiketId = 86;
//    var data = [1, 2, 3, 4];
//    deferred.resolve(data);
//    $rootScope.$digest();
//    expect(scope.releases).toBe(data);
//  });
});
