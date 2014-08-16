'use strict';

angular.module('doujinReleaseTracker')
  .config(function ($stateProvider, stateFactory, Config) {
    if (Config.event === 'comiket')
    {
      $stateProvider.state('releases', stateFactory('Releases', {
        url: '/releases/{eventId:[c[0-9]+]*}',
        templateUrl: 'states/releases/index/main-view.html',
        resolve: {
          contributors: "getContributors",
          eventInfo: function(getEvent, $stateParams) {
            return getEvent.eventData($stateParams.eventId);
          }
        }
      }));
    }
    else
    {
      $stateProvider.state('releases', stateFactory('Releases', {
        url: '/releases/{eventId:[[0-9]+]*}',
        templateUrl: 'states/releases/index/main-view.html',
        resolve: {
          contributors: "getContributors",
          eventInfo: function(getEvent, $stateParams) {
            return getEvent.eventData($stateParams.eventId);
          }
        }
      }));
    }
  })
  .controller('ReleasesCtrl', function ($rootScope, $scope, $state, $stateParams, $filter, Config, ReleasesRepository, EventsRepository, ngTableParams, contributors, eventInfo) {
    $scope.filter = {
      artistcircle: '',
      available: '',
      type: ''
    };

    angular.element('script[src="//oss.maxcdn.com/signet/0.4.4/signet.min.js"]').remove();
    angular.element('meta[name="signet:authors"]').attr('content', contributors.names);
    angular.element('meta[name="signet:links"]').attr('content', contributors.urls);
    angular.element('title').text($filter('titlecase')(eventInfo.event) + ' ' + eventInfo.id + ' Release Tracker');
    angular.element('head').append('<script src="//oss.maxcdn.com/signet/0.4.4/signet.min.js"></script>');

    $scope.eventId = eventInfo.id;
    $scope.category = eventInfo.event;
    $scope.eventDate = eventInfo.date;
    $scope.eventDoujinstyle = eventInfo.doujinstyle;
    $scope.eventJpThread = eventInfo.jpthread;

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
        ReleasesRepository.getById(eventInfo.id).then(function (releases) {
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
                if (release.type.indexOf(filterby) > -1)
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
