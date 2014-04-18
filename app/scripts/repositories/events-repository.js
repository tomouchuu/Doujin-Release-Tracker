'use strict';

angular.module('comiket')
  .factory('EventsRepository', function ($injector, EventsModel) {
    var BaseRepository = $injector.get('BaseRepository');
    return new BaseRepository({name: 'EventsRepository', model: EventsModel});
  });