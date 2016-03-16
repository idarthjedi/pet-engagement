'use strict';

/**
 * @ngdoc overview
 * @name appPetoolApp
 * @description
 * # appPetoolApp
 *
 * Main module of the application.
 */
angular
  .module('appPetoolApp', [
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
        templateUrl: 'views/project.html',
        controller: 'projectCtrl',
        controllerAs: 'project'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/project', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
