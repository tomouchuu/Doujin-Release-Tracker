'use strict';

describe('Controller: IndexCtrl', function () {

  var IndexCtrl, scope, $rootScope, deferred, promise, EventsRepository, ReleasesRepository;

  beforeEach(function () {

    module('doujinReleaseTracker');

    inject(function ($controller, _$rootScope_, $q) {
      $rootScope = _$rootScope_;

      deferred = $q.defer();
      promise = deferred.promise;
        
      EventsRepository = {
        getAll: jasmine.createSpy('EventsRepository.getAll()').and.callFake(function () {
          return promise;
        })
      };

      ReleasesRepository = {
        getById: jasmine.createSpy('ReleasesRepository.getById()').and.callFake(function () {
          return promise;
        })
      };
        
      scope = $rootScope.$new();
      IndexCtrl = $controller('IndexCtrl', {
        $scope: scope,
        EventsRepository: EventsRepository,
        ReleasesRepository: ReleasesRepository
      });
    });
  });
});
