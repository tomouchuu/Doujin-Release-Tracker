describe('Model Repository: EventsRepository', function () {

  var EventsRepository, $httpBackend, Model, $rootScope, BaseRepository;

  beforeEach(function () {

    Model = function (p) {
      this.id = p.id;
    };

    Model.$settings = {
      url: 'URL'
    };

    module('comiket', function ($provide) {
      $provide.value('EventsModel', Model);
    });

    inject(function (_EventsRepository_, _$httpBackend_, _$rootScope_, $injector) {
      EventsRepository = _EventsRepository_;
      $httpBackend = _$httpBackend_;
      BaseRepository = $injector.get('BaseRepository');
      $rootScope = _$rootScope_;
    });

  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should be an instance of BaseRepository', function() {
    expect(EventsRepository instanceof BaseRepository).toBeTruthy();
  });

  describe('getById', function () {
    it('should return models by id', function() {
      $httpBackend.expectGET(Model.$settings.url + '/5').respond(200, {id: 5});

      var promise = EventsRepository.getById(5);

      var response;
      promise.then(function (r) {
        response = r;
      });

      $httpBackend.flush();

      expect(response instanceof Model).toBeTruthy();
      expect(response.id).toEqual(5);
    });

    it('should not do subsequent calls if model already exits in pool', function() {
      $httpBackend.expectGET(Model.$settings.url + '/5').respond(200, {id: 5});
      EventsRepository.getById(5);
      $httpBackend.flush();

      var promise = EventsRepository.getById(5);

      var response;
      promise.then(function (r) {
        response = r;
      });

      $rootScope.$digest();

      expect(response instanceof Model).toBeTruthy();
      expect(response.id).toEqual(5);
    });

    it('should handle rejects', function() {
      $httpBackend.expectGET(Model.$settings.url + '/5').respond(404, 'No such thang!');

      var promise = EventsRepository.getById(5),
      response,
      success = jasmine.createSpy('success'),
      error = jasmine.createSpy('error');

      promise.then(success).catch(error);

      $httpBackend.flush();

      expect(success).not.toHaveBeenCalled();
      expect(error).toHaveBeenCalled();
    });
  });

  describe('getAll', function () {
    it('should return models by id', function() {
      $httpBackend.expectGET(Model.$settings.url).respond(200, [{id: 5},{id: 6}]);

      var promise = EventsRepository.getAll();

      var Events5, Events6;
      promise.then(function (r) {
        Events5 = r[0];
        Events6 = r[1];
      });

      $httpBackend.flush();

      expect(Events5 instanceof Model).toBeTruthy();
      expect(Events5.id).toEqual(5);

      expect(Events6 instanceof Model).toBeTruthy();
      expect(Events6.id).toEqual(6);
      });

      it('should handle rejects', function() {
      $httpBackend.expectGET(Model.$settings.url).respond(404, 'No such thang!');

      var promise = EventsRepository.getAll(5),
      success = jasmine.createSpy('success'),
      error = jasmine.createSpy('error');

      promise.then(success).catch(error);

      $httpBackend.flush();

      expect(success).not.toHaveBeenCalled();
      expect(error).toHaveBeenCalled();
    });
  });

  describe('attach', function () {

    it('should throw if trying to attach a model that is not of valid type', function() {
      function wrapper() {
      EventsRepository.attach({fails: true});
      }
      expect(wrapper).toThrow();
    });

    it('should return the attached model on subsequent requests', function() {

      EventsRepository.attach(new Model({id: 5}));

      var Events;

      EventsRepository.getById(5).then(function (response) {
        Events = response;
      });

      $rootScope.$digest();

      expect(Events instanceof Model).toBeTruthy();
      expect(Events.id).toEqual(5);
    });
  });

  describe('create', function () {
    it('should return a newed up instance of the Events Model', function() {
    var Events = EventsRepository.create({title:'New title'});
    expect(Events instanceof Model).toBeTruthy();
    });
  });

  describe('cache', function () {
    it('should return a reference to the pool', function() {
      var newEvents = {id:19};
      EventsRepository.cache[19] = newEvents;

      var Events;
      EventsRepository.getById(19).then(function (response) {
      Events = response;
    });

    $rootScope.$digest();

    expect(Events).toBe(newEvents);
    });
  });

  describe('saveChanges', function () {
    //it('should save all changes in current Repository to the server');
  });
});