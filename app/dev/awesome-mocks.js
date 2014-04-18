angular.module('comiket')
  .run(function (Config, $httpBackend, $log, APIBaseUrl, regexEscape, guid, mockRepository) {
    if (!Config.API.useMocks) return;

    var collectionUrl = APIBaseUrl + 'awesomes';
    var IdRegExp = /[\d\w-_]+$/.toString().slice(1, -1);

    var awesomes = collectionUrl;
    var AwesomeById = new RegExp(regexEscape(collectionUrl + '/') + IdRegExp);

    $log.log('***************************************************************************************************************');
    $log.log('Overriding all calls to `' + collectionUrl + '` with mocks defined in *dev/awesome-mocks.js*');
    $log.log('***************************************************************************************************************');

    var seed = [
      {id: guid(), text: 'AngularJS'},
      {id: guid(), text: 'Karma'},
      {id: guid(), text: 'Yeoman'},
      {id: guid(), text: 'Generator-angular-xl'}
    ];

    var AwesomeRepo = mockRepository.create();

    angular.forEach(seed, function (item, key) {
        AwesomeRepo.insert(item.id, item);
    });

    //GET awesomes/
    $httpBackend.whenGET(awesomes).respond(function (method, url, data, headers) {
      $log.debug('Intercepted GET to `' + url + '`', data);
      return [200, AwesomeRepo.getAll(), {/*headers*/}];
    });

    //POST awesomes/
    $httpBackend.whenPOST(awesomes).respond(function (method, url, data, headers) {
      $log.debug('Intercepted POST to `' + url + '`', data);

      var Awesome = AwesomeRepo.push(angular.fromJson(data));

      return [200, Awesome, {/*headers*/}];
    });

    //GET awesomes/<id>
    $httpBackend.whenGET(AwesomeById).respond(function (method, url, data, headers) {
      $log.debug('Intercepted GET to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];
      var item = AwesomeRepo.getById(id);
      return [item ? 200 : 404, item || null, {/*headers*/}];
    });

    //PUT awesomes/<id>
    $httpBackend.whenPUT(AwesomeById).respond(function (method, url, data, headers) {
      $log.debug('Intercepted PUT to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];

      if (!AwesomeRepo.getById(id)) {
        return [404, {} , {/*headers*/}];
      }

      var Awesome = AwesomeRepo.insert(id, angular.fromJson(data));

      return [200, Awesome, {/*headers*/}];
    });

    //DELETE awesomes/<id>
    $httpBackend.whenDELETE(new RegExp(regexEscape(collectionUrl + '/') + IdRegExp)).respond(function (method, url, data, headers) {
      $log.debug('Intercepted DELETE to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];

      var Awesome = AwesomeRepo.getById(id);
      if (!Awesome) {
        return [404, {} , {/*headers*/}];
      }
      AwesomeRepo.remove(Awesome.id);

      return [200, Awesome , {/*headers*/}];
    });

  });


