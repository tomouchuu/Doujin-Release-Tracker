'use strict';

angular.module('doujinReleaseTracker')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('index', stateFactory('Index', {
      url: '/'
    }));
  })
  .controller('IndexCtrl', function ($rootScope, $scope, $stateParams, $filter, ReleasesRepository, EventsRepository, ngTableParams) {

    $scope.filter = {
      artistcircle: '',
      available: '',
      type: ''
    };

    EventsRepository.getAll().then(function (event) {
      var ids = Object.keys(event);
      ids.reverse();

      var first = ids[0];

      $scope.event = event[first];
      $scope.eventId = first;
      $rootScope.eventId = first;

      $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 100,         // count per page
        sorting: {
          artistcircle: 'asc'     // initial sorting
        },
        filter: $scope.filter
      }, {
        total: 0,           // length of data
        getData: function($defer, params) {
          console.log(params);
          ReleasesRepository.getById($scope.eventId).then(function (releases) {
            // Order the filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')(releases.releases, params.orderBy()) :
                                releases.releases;

            // Filter the view
            if (params.filter())
            {
              if (params.filter().available)
              {
                var filterby = params.filter().available;
                if (filterby === 'mp3')
                {
                  orderedData = $filter('filter')(orderedData, function(release){
                    if (release.available.mp3)
                    {
                      return release;
                    }
                  });
                }
                else if (filterby === 'flac')
                {
                  orderedData = $filter('filter')(orderedData, function(release){
                    if (release.available.flac)
                    {
                      return release;
                    }
                  });
                }
                else if (filterby === 'other')
                {
                  orderedData = $filter('filter')(orderedData, function(release){
                    if (release.available.other)
                    {
                      return release;
                    }
                  });
                }
              }
              else if (params.filter().type)
                {
                  var filterby = params.filter().type;
                  orderedData = $filter('filter')(orderedData, function(release){
                    if (release.type === filterby)
                    {
                      return release;
                    }
                  });
                }
              else
              {
                orderedData = params.filter() ?
                                $filter('filter')(orderedData, params.filter()) :
                                orderedData;
              }
            }

            $scope.releases = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            // Total Releases
            $scope.total = orderedData.length
            params.total($scope.total);

            // Send it to the view
            $defer.resolve($scope.releases);
          });
        }
      });
    });

  });
