'use strict';

angular.module('doujinReleaseTracker')
  .factory('ReleasesRepository', function ($injector, ReleasesModel) {
    var BaseRepository = $injector.get('BaseRepository');
    return new BaseRepository({name: 'ReleasesRepository', model: ReleasesModel});
  });