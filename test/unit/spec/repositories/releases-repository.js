describe('Model Repository: ReleasesRepository', function () {

  var ReleasesRepository, $httpBackend, Model, $rootScope, BaseRepository;

  beforeEach(function () {

    Model = function (p) {
      this.id = p.id;
    };

    Model.$settings = {
      url: 'URL'
    };

    module('comiket', function ($provide) {
      $provide.value('ReleasesModel', Model);
    });

    inject(function (_ReleasesRepository_, _$httpBackend_, _$rootScope_, $injector) {
      ReleasesRepository = _ReleasesRepository_;
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
    expect(ReleasesRepository instanceof BaseRepository).toBeTruthy();
  });

  describe('getById', function () {
    it('should return models by id', function() {
      $httpBackend.expectGET(Model.$settings.url + '/5').respond(200, {id: 5});

      var promise = ReleasesRepository.getById(5);

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
      ReleasesRepository.getById(5);
      $httpBackend.flush();

      var promise = ReleasesRepository.getById(5);

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

      var promise = ReleasesRepository.getById(5),
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

      var promise = ReleasesRepository.getAll();

      var Releases5, Releases6;
      promise.then(function (r) {
        Releases5 = r[0];
        Releases6 = r[1];
      });

      $httpBackend.flush();

      expect(Releases5 instanceof Model).toBeTruthy();
      expect(Releases5.id).toEqual(5);

      expect(Releases6 instanceof Model).toBeTruthy();
      expect(Releases6.id).toEqual(6);
      });

      it('should handle rejects', function() {
      $httpBackend.expectGET(Model.$settings.url).respond(404, 'No such thang!');

      var promise = ReleasesRepository.getAll(5),
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
      ReleasesRepository.attach({fails: true});
      }
      expect(wrapper).toThrow();
    });

    it('should return the attached model on subsequent requests', function() {

      ReleasesRepository.attach(new Model({id: 5}));

      var Releases;

      ReleasesRepository.getById(5).then(function (response) {
        Releases = response;
      });

      $rootScope.$digest();

      expect(Releases instanceof Model).toBeTruthy();
      expect(Releases.id).toEqual(5);
    });
  });

  describe('create', function () {
    it('should return a newed up instance of the Releases Model', function() {
    var Releases = ReleasesRepository.create({title:'New title'});
    expect(Releases instanceof Model).toBeTruthy();
    });
  });

  describe('cache', function () {
    it('should return a reference to the pool', function() {
      var newReleases = {id:19};
      ReleasesRepository.cache[19] = newReleases;

      var Releases;
      ReleasesRepository.getById(19).then(function (response) {
      Releases = response;
    });

    $rootScope.$digest();

    expect(Releases).toBe(newReleases);
    });
  });

  describe('saveChanges', function () {
    //it('should save all changes in current Repository to the server');
  });
});