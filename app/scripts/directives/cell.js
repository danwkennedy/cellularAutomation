'use strict';

/**
 * @ngdoc directive
 * @name cellularAutomationApp.directive:cell
 * @description
 * # cell
 */
angular.module('cellularAutomationApp')
  .directive('cell', function() {
    return {
      templateUrl: 'views/directives/cell.html',
      restrict: 'EA',
      replace: true,
      scope: {
          cell: '=cell'
      },
      link: function postLink(scope, element) {
          element.click(function(){
            if (scope.cell.value) {
                scope.cell.value = 0;
            } else {
                scope.cell.value = 1;
            }

              scope.$apply();
          });
      }
    };
  });
