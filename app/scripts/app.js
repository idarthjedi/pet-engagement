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
    //TODO: There is a bug here where the "active" tab, doesn't display as active in the UI.
    $routeProvider
      .when('/', {
        templateUrl: 'views/selectProject.html',
        controller: 'selectProjectCtrl',
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
