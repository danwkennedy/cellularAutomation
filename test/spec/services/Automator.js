'use strict';

describe('Service: Automator', function () {

  // load the service's module
  beforeEach(module('cellularAutomationApp'));

  // instantiate service
  var Automator;
  beforeEach(inject(function (_Automator_) {
    Automator = _Automator_;
  }));

  it('should default with empty rules', function () {
    var ruleList = ['111','110','101','100','011','010','001','000'];

    for (var i = 0; i < ruleList.length; i++) {
        expect(Automator.getNextState(ruleList[i])).toBe(0);
    }
  });

  it('should create a pattern from three numbers', function() {
      expect(Automator.getPatternForValues(1,0,1)).toBe('101');
  });

  it('should return "0" if left cell is missing', function() {
      expect(Automator.getPatternForValues(false, 1, 1)).toBe('011');
      expect(Automator.getPatternForValues(undefined, 1, 1)).toBe('011');
  });

  it('should return "0" if left cell is missing', function() {
      expect(Automator.getPatternForValues(1, 1, false)).toBe('110');
      expect(Automator.getPatternForValues(1, 1, undefined)).toBe('110');
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

    Automator.setRules(ruleList);

    for (var rule in ruleList) {
      expect(Automator.getNextState(rule)).toBe(ruleList[rule]);
    }
  });
});
