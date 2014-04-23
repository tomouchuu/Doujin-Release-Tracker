'use strict';

describe('Controller(/archive): ArchiveCtrl', function () {

  var ArchiveCtrl, scope, $rootScope, deferred, promise, EventsRepository;

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

      scope = $rootScope.$new();
      ArchiveCtrl = $controller('ArchiveCtrl', {
        $scope: scope,
        EventsRepository: EventsRepository
      });
    });
  });

  it('should attach init data to scope', function () {
    var events = [28];
    deferred.resolve(events);
    $rootScope.$digest();
    expect(scope.events).toBe(events);
  });
});