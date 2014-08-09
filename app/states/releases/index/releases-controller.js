'use strict';

angular.module('doujinReleaseTracker')
  .config(function ($stateProvider, stateFactory, Config) {
    if (Config.event === 'comiket')
    {
      $stateProvider.state('releases', stateFactory('Releases', {
        url: '/releases/{eventId:[c[0-9]+]*}',
        templateUrl: 'states/releases/index/main-view.html'
      }));
    }
    else
    {
      $stateProvider.state('releases', stateFactory('Releases', {
        url: '/releases/{eventId:[[0-9]+]*}',
        templateUrl: 'states/releases/index/main-view.html'
      }));
    }
  })
  .controller('ReleasesCtrl', function ($rootScope, $scope, $state, $stateParams, $filter, Config, ReleasesRepository, EventsRepository, ngTableParams) {
    $scope.filter = {
      artistcircle: '',
      available: '',
      type: ''
    };

    if ($stateParams.eventId !== '')
    {
      var eventId = '';
      if (Config.event === 'comiket')
      {
        eventId = $stateParams.eventId.replace('c','');
      }
      else
      {
        eventId = $stateParams.eventId;
      }
      EventsRepository.getById(eventId).then(function (event) {
        $scope.event = event;
        $scope.eventId = eventId;
        $rootScope.eventId = eventId;

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
            ReleasesRepository.getById(eventId).then(function (releases) {
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
                if (params.filter().type)
                {
                  var filterby = params.filter().type;
                  orderedData = $filter('filter')(orderedData, function(release){
                    if (release.type === filterby)
                    {
                      return release;
                    }
                  });
                }
                orderedData = params.filter() ?
                                $filter('filter')(orderedData, params.filter().artistcircle) :
                                orderedData;
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
      }, function(response) {
        console.log('Error with status code', response.status);
        $state.go('index');
      });
    }
    else
    {
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
                if (params.filter().type)
                {
                  var filterby = params.filter().type;
                  orderedData = $filter('filter')(orderedData, function(release){
                    if (release.type === filterby)
                    {
                      return release;
                    }
                  });
                }
                orderedData = params.filter() ?
                                $filter('filter')(orderedData, params.filter().artistcircle) :
                                orderedData;
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
    }
  });
