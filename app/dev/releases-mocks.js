angular.module('comiket')
  .run(function (Config, $httpBackend, $log, APIBaseUrl, regexEscape, guid, mockRepository) {
    if (!Config.API.useMocks) return;

    var collectionUrl = APIBaseUrl + 'releases';
    var IdRegExp = /[\d\w-_]+$/.toString().slice(1, -1);

    var releases = collectionUrl;
    var ReleasesById = new RegExp(regexEscape(collectionUrl + '/') + IdRegExp);

    $log.log('***************************************************************************************************************');
    $log.log('Overriding all calls to `' + collectionUrl + '` with mocks defined in *dev/releases-mocks.js*');
    $log.log('***************************************************************************************************************');

    var seed = [
        {
            id: 86,
            releases: [
                {
                    id: 1,
                    album: "The Wide City",
                    artistcircle: "scop/no one hears",
                    link: "http://noonehears.main.jp/",
                    preview: "http://www.nicovideo.jp/watch/sm22514366",
                    type: "vocaloid",
                    genre: "rock, pop",
                    available: [
                        {
                            mp3: "https://mega.co.nz/#!TE43yRgJ!NfmKH0rMC-tNecpZ7I7nKzoMFjUfBf7lYPzK4rvDiKw",
                            flac: false,
                            other: false
                        }
                    ]
                },
                {
                    id: 2,
                    album: "Lolita Machiavellism",
                    artistcircle: "Kairiki Bear",
                    link: "http://ameblo.jp/kairikibear/",
                    preview: "",
                    type: "vocaloid",
                    genre: "",
                    available: [
                        {
                            mp3: false,
                            flac: false,
                            other: false
                        }
                    ]
                },
                {
                    id: 3,
                    album: "Jewel War of Independence",
                    artistcircle: "Yuuyu",
                    link: "http://tsubu.ath.cx/~ssry/",
                    preview: "",
                    type: "vocaloid",
                    genre: "",
                    available: [
                        {
                            mp3: "https://mega.co.nz/#!HFJAGaBB!dU7xKSdiUuqH_sDyZRei-BMab8IohlIeiq7b3H6Dal4",
                            flac: false,
                            other: false
                        }
                    ]
                },
                {
                    id: 4,
                    album: "Existence",
                    artistcircle: "KLAFT",
                    link: "http://klaft.jp/existence/",
                    preview: "http://www.nicovideo.jp/watch/sm22453732",
                    type: "vocaloid",
                    genre: "",
                    available: [
                        {
                            mp3: "https://mega.co.nz/#!GNAiVb4S!a6Izg3GfHfURsBOYTgFK6FEFlnYSz86sEnNxe07AO6A",
                            flac: false,
                            other: false
                        }
                    ]
                }
            ]
        }
    ];

    var ReleasesRepo = mockRepository.create();

    angular.forEach(seed, function (item, key) {
        ReleasesRepo.insert(item.id, item);
    });

    //GET releases/
    $httpBackend.whenGET(releases).respond(function (method, url, data, headers) {
      $log.debug('Intercepted GET to `' + url + '`', data);
      return [200, ReleasesRepo.getAll(), {/*headers*/}];
    });

    //POST releases/
    $httpBackend.whenPOST(releases).respond(function (method, url, data, headers) {
      $log.debug('Intercepted POST to `' + url + '`', data);

      var Releases = ReleasesRepo.push(angular.fromJson(data));

      return [200, Releases, {/*headers*/}];
    });

    //GET releases/<id>
    $httpBackend.whenGET(ReleasesById).respond(function (method, url, data, headers) {
      $log.debug('Intercepted GET to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];
      var item = ReleasesRepo.getById(id);
      return [item ? 200 : 404, item || null, {/*headers*/}];
    });

    //PUT releases/<id>
    $httpBackend.whenPUT(ReleasesById).respond(function (method, url, data, headers) {
      $log.debug('Intercepted PUT to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];

      if (!ReleasesRepo.getById(id)) {
        return [404, {} , {/*headers*/}];
      }

      var Releases = ReleasesRepo.insert(id, angular.fromJson(data));

      return [200, Releases, {/*headers*/}];
    });

    //DELETE releases/<id>
    $httpBackend.whenDELETE(new RegExp(regexEscape(collectionUrl + '/') + IdRegExp)).respond(function (method, url, data, headers) {
      $log.debug('Intercepted DELETE to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];

      var Releases = ReleasesRepo.getById(id);
      if (!Releases) {
        return [404, {} , {/*headers*/}];
      }
      ReleasesRepo.remove(Releases.id);

      return [200, Releases , {/*headers*/}];
    });

  });


