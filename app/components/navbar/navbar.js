'use strict';

angular.module('doujinReleaseTracker.components')
    .controller('navbarComponentCtrl', function ($scope, $rootScope, Config, $element, EventsRepository) {
        $rootScope.category = Config.event;
        $scope.category = Config.event;
        
        EventsRepository.getAll().then(function (events) {
            var ids = Object.keys(events);
            
            var navLinks = new Array();
            
            angular.forEach(ids, function(id, key1){
                var date = events[id].date.split(' ');
                var month = date[0].substr(0,3);
                
                if(Config.event === 'comiket')
                {
                    navLinks.push({'link': 'c'+id});
                }
                else
                {
                    navLinks.push({'id': id, 'date': month+date[1]});
                }
            });
            
            navLinks.reverse();

            $scope.navLinks = navLinks;
        });
  })
  .component('navbar', function () {
    return {
      controller: 'navbarComponentCtrl'
    };
  });
