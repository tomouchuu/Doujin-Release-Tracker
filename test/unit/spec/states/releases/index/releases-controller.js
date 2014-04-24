'use strict';

describe('Controller(/releases): ReleasesCtrl', function () {

  var ReleasesCtrl, scope, $rootScope, deferred, promise, EventsRepository, ReleasesRepository;

  beforeEach(function () {

    module('doujinReleaseTracker', function ($provide) {
      $provide.value('$stateParams', {comiketId: 'c85'});
    });

    inject(function ($controller, _$rootScope_, $q) {
      $rootScope = _$rootScope_;

      deferred = $q.defer();
      promise = deferred.promise;
        
      EventsRepository = {
        getById: jasmine.createSpy('EventsRepository.getById($scope.comiketId)').and.callFake(function () {
          return promise;
        })
      };

      ReleasesRepository = {
        getById: jasmine.createSpy('ReleasesRepository.getById($scope.comiketId)').and.callFake(function () {
          return promise;
        })
      };
        
      scope = $rootScope.$new();
      ReleasesCtrl = $controller('ReleasesCtrl', {
        $scope: scope,
        EventsRepository: EventsRepository,
        ReleasesRepository: ReleasesRepository
      });
    });
  });
});
