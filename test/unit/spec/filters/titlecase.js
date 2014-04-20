'use strict';

describe('Filter: titlecase', function () {

  var titlecase;

  beforeEach(function () {

    module('doujinReleaseTracker');

    inject(function ($filter) {
      titlecase = $filter('titlecase');
    });

  });

  it('should return the input prefixed with "titlecase filter:"', function () {
    var text = 'angularjs';
    expect(titlecase(text)).toBe('titlecase filter: ' + text);
  });

});