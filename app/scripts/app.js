'use strict';

var dependencies = [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'fivefifteenApp.directives',
  'fivefifteenApp.filters',
  'firebase',
  'LocalStorageModule',
  'ngDebounce',
  'ngAnimate',
  'ui.bootstrap'];

angular.module('fivefifteenApp', dependencies)
  .config([    '$routeProvider', '$locationProvider', 'localStorageServiceProvider',
      function ($routeProvider,   $locationProvider,   localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('fiveFifteen');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/step/:stepName', {
        templateUrl: 'views/step.html',
        controller: 'MainCtrl'
      })
      .when('/preview', {
        templateUrl: 'views/preview.html',
        controller: 'MainCtrl'
      })
      .when('/preview-md', {
        templateUrl: 'views/preview-md.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);
