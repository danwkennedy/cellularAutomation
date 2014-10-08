'use strict';

/**
 * @ngdoc overview
 * @name cellularAutomationApp
 * @description
 * # cellularAutomationApp
 *
 * Main module of the application.
 */
angular
  .module('cellularAutomationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
