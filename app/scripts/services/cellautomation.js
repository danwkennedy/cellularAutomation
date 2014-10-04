'use strict';

/**
 * @ngdoc service
 * @name cellularAutomationApp.Cellautomation
 * @description
 * # Cellautomation
 * Service in the cellularAutomationApp.
 */
angular.module('cellularAutomationApp')
  .service('Cellautomation', function Cellautomation() {
    // AngularJS will instantiate a singleton by calling "new" on this function

        this.rules = {
            '111': 0,
            '110': 0,
            '101': 0,
            '100': 0,
            '011': 0,
            '010': 0,
            '001': 0,
            '000': 0
        };

        this.generation = 1;

        this.setRules = function(rules) {
            this.rules = rules;
        };

        this.getNextState = function(currentPattern) {
            return this.rules[currentPattern];
        };

        this.getPatternForValues = function (left, target, right) {
            return left.toString() + target.toString() + right.toString();
        };

        this.generationTick = function () {
            this.generation++;
        };

        this.getGenerationTick = function() {
            return this.generation;
        };
  });
