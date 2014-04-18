describe('Model Repository: AwesomeRepository', function () {

  var AwesomeRepository, $httpBackend, Model, $rootScope, BaseRepository;

  beforeEach(function () {

    Model = function (p) {
      this.id = p.id;
    };

    Model.$settings = {
      url: 'URL'
    };

    module('comiket', function ($provide) {
      $provide.value('AwesomeModel', Model);
    });

    inject(function (_AwesomeRepository_, _$httpBackend_, _$rootScope_, $injector) {
      AwesomeRepository = _AwesomeRepository_;
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
    expect(AwesomeRepository instanceof BaseRepository).toBeTruthy();
  });

  describe('getById', function () {
    it('should return models by id', function() {
      $httpBackend.expectGET(Model.$settings.url + '/5').respond(200, {id: 5});

      var promise = AwesomeRepository.getById(5);

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
      AwesomeRepository.getById(5);
      $httpBackend.flush();

      var promise = AwesomeRepository.getById(5);

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

      var promise = AwesomeRepository.getById(5),
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

      var promise = AwesomeRepository.getAll();

      var Awesome5, Awesome6;
      promise.then(function (r) {
        Awesome5 = r[0];
        Awesome6 = r[1];
      });

      $httpBackend.flush();

      expect(Awesome5 instanceof Model).toBeTruthy();
      expect(Awesome5.id).toEqual(5);

      expect(Awesome6 instanceof Model).toBeTruthy();
      expect(Awesome6.id).toEqual(6);
      });

      it('should handle rejects', function() {
      $httpBackend.expectGET(Model.$settings.url).respond(404, 'No such thang!');

      var promise = AwesomeRepository.getAll(5),
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
      AwesomeRepository.attach({fails: true});
      }
      expect(wrapper).toThrow();
    });

    it('should return the attached model on subsequent requests', function() {

      AwesomeRepository.attach(new Model({id: 5}));

      var Awesome;

      AwesomeRepository.getById(5).then(function (response) {
        Awesome = response;
      });

      $rootScope.$digest();

      expect(Awesome instanceof Model).toBeTruthy();
      expect(Awesome.id).toEqual(5);
    });
  });

  describe('create', function () {
    it('should return a newed up instance of the Awesome Model', function() {
    var Awesome = AwesomeRepository.create({title:'New title'});
    expect(Awesome instanceof Model).toBeTruthy();
    });
  });

  describe('cache', function () {
    it('should return a reference to the pool', function() {
      var newAwesome = {id:19};
      AwesomeRepository.cache[19] = newAwesome;

      var Awesome;
      AwesomeRepository.getById(19).then(function (response) {
      Awesome = response;
    });

    $rootScope.$digest();

    expect(Awesome).toBe(newAwesome);
    });
  });

  describe('saveChanges', function () {
    //it('should save all changes in current Repository to the server');
  });
});