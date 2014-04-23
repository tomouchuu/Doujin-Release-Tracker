describe('Model Repository: EventsRepository', function () {

  var EventsRepository, $httpBackend, Model, $rootScope, BaseRepository;

  beforeEach(function () {

    Model = function (p) {
      this.id = p.id;
    };

    Model.$settings = {
      url: 'https://intense-fire-9416.firebaseio.com/comiket/events'
    };

    module('doujinReleaseTracker', function ($provide) {
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
      $httpBackend.expectGET(Model.$settings.url + '/85.json').respond(200, {id: 85});

      var promise = EventsRepository.getById(85);

      var response;
      promise.then(function (r) {
        response = r;
      });

      $httpBackend.flush();

      expect(response instanceof Model).toBeTruthy();
      expect(response.id).toEqual(85);
    });

    it('should not do subsequent calls if model already exits in pool', function() {
      $httpBackend.expectGET(Model.$settings.url + '/85.json').respond(200, {id: 85});
      EventsRepository.getById(85);
      $httpBackend.flush();

      var promise = EventsRepository.getById(85);

      var response;
      promise.then(function (r) {
        response = r;
      });

      $rootScope.$digest();

      expect(response instanceof Model).toBeTruthy();
      expect(response.id).toEqual(85);
    });

    it('should handle rejects', function() {
      $httpBackend.expectGET(Model.$settings.url + '/85.json').respond(404, 'No such thang!');

      var promise = EventsRepository.getById(85),
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
      $httpBackend.expectGET(Model.$settings.url+'.json').respond(200, [{id: 84},{id: 85},{id: 86}]);

      var promise = EventsRepository.getAll();

      var Events84, Events85, Events86;
      promise.then(function (r) {
        Events84 = r[0];
        Events85 = r[1];
        Events86 = r[2];
      });

      $httpBackend.flush();

//      expect(Events84 instanceof Model).toBeTruthy();
      expect(Events84.id).toEqual(84);
        
//      expect(Events85 instanceof Model).toBeTruthy();
      expect(Events85.id).toEqual(85);

//      expect(Events86 instanceof Model).toBeTruthy();
      expect(Events86.id).toEqual(86);
    });

    it('should handle rejects', function() {
      $httpBackend.expectGET(Model.$settings.url+'.json').respond(404, 'No such thang!');

      var promise = EventsRepository.getAll(85),
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