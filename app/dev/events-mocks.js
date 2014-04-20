angular.module('doujinReleaseTracker')
  .run(function (Config, $httpBackend, $log, APIBaseUrl, regexEscape, guid, mockRepository) {
    if (!Config.API.useMocks) return;

    var collectionUrl = APIBaseUrl + 'events';
    var IdRegExp = /[\d\w-_]+$/.toString().slice(1, -1);

    var events = collectionUrl;
    var EventsById = new RegExp(regexEscape(collectionUrl + '/') + IdRegExp);

    $log.log('***************************************************************************************************************');
    $log.log('Overriding all calls to `' + collectionUrl + '` with mocks defined in *dev/events-mocks.js*');
    $log.log('***************************************************************************************************************');

    var seed = [
      {id: 84, date: 'August 2013'},
      {id: 85, date: 'December 2013'},
      {id: 86, date: 'August 2014'}
    ];

    var EventsRepo = mockRepository.create();

    angular.forEach(seed, function (item, key) {
        EventsRepo.insert(item.id, item);
    });

    //GET events/
    $httpBackend.whenGET(events).respond(function (method, url, data, headers) {
      $log.debug('Intercepted GET to `' + url + '`', data);
      return [200, EventsRepo.getAll(), {/*headers*/}];
    });

    //POST events/
    $httpBackend.whenPOST(events).respond(function (method, url, data, headers) {
      $log.debug('Intercepted POST to `' + url + '`', data);

      var Events = EventsRepo.push(angular.fromJson(data));

      return [200, Events, {/*headers*/}];
    });

    //GET events/<id>
    $httpBackend.whenGET(EventsById).respond(function (method, url, data, headers) {
      $log.debug('Intercepted GET to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];
      var item = EventsRepo.getById(id);
      return [item ? 200 : 404, item || null, {/*headers*/}];
    });

    //PUT events/<id>
    $httpBackend.whenPUT(EventsById).respond(function (method, url, data, headers) {
      $log.debug('Intercepted PUT to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];

      if (!EventsRepo.getById(id)) {
        return [404, {} , {/*headers*/}];
      }

      var Events = EventsRepo.insert(id, angular.fromJson(data));

      return [200, Events, {/*headers*/}];
    });

    //DELETE events/<id>
    $httpBackend.whenDELETE(new RegExp(regexEscape(collectionUrl + '/') + IdRegExp)).respond(function (method, url, data, headers) {
      $log.debug('Intercepted DELETE to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];

      var Events = EventsRepo.getById(id);
      if (!Events) {
        return [404, {} , {/*headers*/}];
      }
      EventsRepo.remove(Events.id);

      return [200, Events , {/*headers*/}];
    });

  });


