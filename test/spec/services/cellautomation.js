'use strict';

describe('Service: Cellautomation', function () {

  // load the service's module
  beforeEach(module('cellularAutomationApp'));

  // instantiate service
  var Cellautomation;
  beforeEach(inject(function (_Cellautomation_) {
    Cellautomation = _Cellautomation_;
  }));

  it('should do something', function () {
    expect(!!Cellautomation).toBe(true);
  });

});
