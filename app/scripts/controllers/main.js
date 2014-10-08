'use strict';

/**
 * @ngdoc function
 * @name cellularAutomationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cellularAutomationApp
 */
angular.module('cellularAutomationApp')
  .controller('MainCtrl', function ($scope, Automator) {
        $scope.automator = Automator;
        $scope.generation = 0;
        $scope.generationSize = 60;

        $scope.generations = [];
        $scope.ruleLabels = ['111','110','101','100','011','010','001','000'];
        $scope.rules = {
            '111': 0,
            '110': 0,
            '101': 0,
            '100': 1,
            '011': 1,
            '010': 1,
            '001': 1,
            '000': 0
        };

        $scope.ruleOptions = [
            {name: 'Rule 30', rules: {'111': 0, '110': 0, '101': 0, '100': 1, '011': 1, '010': 1, '001': 1, '000': 0}},
            {name: 'Rule 54', rules: {'111': 0, '110': 0, '101': 1, '100': 1, '011': 0, '010': 1, '001': 1, '000': 0}},
            {name: 'Rule 60', rules: {'111': 0, '110': 0, '101': 1, '100': 1, '011': 1, '010': 1, '001': 0, '000': 0}},
            {name: 'Rule 90', rules: {'111': 0, '110': 1, '101': 0, '100': 1, '011': 1, '010': 0, '001': 1, '000': 0}},
            {name: 'Rule 158', rules: {'111': 1, '110': 0, '101': 0, '100': 1, '011': 1, '010': 1, '001': 1, '000': 0}}
        ];

        $scope.resetBoard = function() {
            $scope.generations = [[]];
            $scope.generation = 0;
        };

        function initGeneration(newGeneration) {
            for (var i = 0; i < $scope.generationSize; i++) {
                $scope.generations[newGeneration].push({value: 0});
            }
        }

        function addNextGeneration(newGeneration, oldGeneration) {
            $scope.generations[newGeneration] = [];

            if (newGeneration === 0) {
                initGeneration(newGeneration);
            } else {
                for (var j = 0; j < $scope.generationSize; j++) {
                    var old = $scope.generations[oldGeneration],
                        left = j > 0 ? old[j - 1].value : 0,
                        current = old[j].value,
                        right = j < ($scope.generationSize - 1) ? old[j + 1].value : 0,
                        pattern = Automator.getPatternForValues(left, current, right);

                    $scope.generations[newGeneration][j] = { value: Automator.getNextState(pattern) };
                }
            }
        }

        function updateRules(newRules) {
            Automator.setRules(newRules);
        }

        $scope.$watch('rules', updateRules);
        $scope.$watch('generation', addNextGeneration);
  });
