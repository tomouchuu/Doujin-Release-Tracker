'use strict';

describe('Filter: titlecase', function () {

  var titlecase;

  beforeEach(function () {

    module('doujinReleaseTracker');

    inject(function ($filter) {
      titlecase = $filter('titlecase');
    });

  });

  it('should return the input with the first letter in Uppercase', function () {
    var text = 'angularjs';
    expect(titlecase(text)).toBe('Angularjs');
  });

});