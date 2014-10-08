'use strict';

/**
 * @ngdoc directive
 * @name cellularAutomationApp.directive:generation
 * @description
 * # generation
 */
angular.module('cellularAutomationApp')
  .directive('generation', function () {
    return {
      templateUrl:'views/directives/generation.html',
      restrict: 'EA',
      replace: true,
      scope: {
        cells: '=generation'
      },
      link: function postLink(/*scope, element*/) {
//        element.text('this is the generation directive');
      }
    };
  });
