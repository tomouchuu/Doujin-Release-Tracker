'use strict';

describe('Service: getContributors', function () {

  var getContributors;

  beforeEach(function () {

    module('doujinReleaseTracker');

    inject(function (_getContributors_) {
      getContributors = _getContributors_;
    });

  });


  it('should do something', function () {
    expect(!!getContributors).toBe(true);
  });

});