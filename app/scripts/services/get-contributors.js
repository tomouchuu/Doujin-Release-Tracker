'use strict';

angular.module('doujinReleaseTracker')
  .service('getContributors', function ($http) {

    return $http({method: 'GET', url: 'https://api.github.com/repos/tomo-san/doujin-release-tracker/contributors'})
            .then (function (data) {
              var contributorsData = data;

              var contributorsNames = '';
              var contributorsUrls = '';

              angular.forEach(contributorsData.data, function(contributor){
                contributorsNames += contributor.login + ', ';
                contributorsUrls += contributor.html_url + ', ';
              });

              contributorsNames = contributorsNames.substr(0, (contributorsNames.length - 2));
              contributorsUrls = contributorsUrls.substr(0, (contributorsUrls.length - 2));

              var contributors = {
                names: contributorsNames,
                urls: contributorsUrls,
              };

              return contributors;
            });

  });
