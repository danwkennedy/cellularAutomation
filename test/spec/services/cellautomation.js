'use strict';

describe('Service: Cellautomation', function () {

  // load the service's module
  beforeEach(module('cellularAutomationApp'));

  // instantiate service
  var Cellautomation;
  beforeEach(inject(function (_Cellautomation_) {
    Cellautomation = _Cellautomation_;
  }));

  it('should default with empty rules', function () {
    var ruleList = ['111','110','101','100','011','010','001','000'];

    for (var i = 0; i < ruleList.length; i++) {
        expect(Cellautomation.getNextState(ruleList[i])).toBe(0);
    }
  });

  it('should create a pattern from three numbers', function() {
      expect(Cellautomation.getPatternForValues(1,0,1)).toBe('101');
  });

  it('should follow the set rules', function () {
    var ruleList = {
        '111': 1,
        '110': 0,
        '101': 1,
        '100': 0,
        '011': 1,
        '010': 0,
        '001': 1,
        '000': 0
    };

    Cellautomation.setRules(ruleList);

    for (var rule in ruleList) {
      expect(Cellautomation.getNextState(rule)).toBe(ruleList[rule]);
    }
  });

  it('should begin at generation 1', function() {
      expect(Cellautomation.getGenerationTick()).toBe(1);
  });

  it('should keep track of generations', function() {
      Cellautomation.generationTick();
      Cellautomation.generationTick();
      Cellautomation.generationTick();

      expect(Cellautomation.getGenerationTick()).toBe(4);
  });
});
