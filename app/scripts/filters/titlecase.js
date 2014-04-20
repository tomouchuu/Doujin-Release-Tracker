'use strict';

angular.module('doujinReleaseTracker')
    .filter('titlecase', function () {
        return function (input) {
            if (input)
            {
              return input.charAt(0).toUpperCase() + input.slice(1);
            }
        };
    });
