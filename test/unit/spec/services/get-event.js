'use strict';

describe('Service: getEvent', function () {

  var getEvent;

  beforeEach(function () {

    module('doujinReleaseTracker');

    inject(function (_getEvent_) {
      getEvent = _getEvent_;
    });

  });


  it('should do something', function () {
    expect(!!getEvent).toBe(true);
  });

});
