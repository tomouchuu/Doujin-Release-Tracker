'use strict';

describe('Service: getTitle', function () {

  var getTitle;

  beforeEach(function () {

    module('doujinReleaseTracker');

    inject(function (_getTitle_) {
      getTitle = _getTitle_;
    });

  });


  it('should do something', function () {
    expect(!!getTitle).toBe(true);
  });

});