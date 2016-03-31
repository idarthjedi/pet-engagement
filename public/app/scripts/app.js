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
        templateUrl: '/app/views/selectProject.html',
        controller: 'selectProjectCtrl',
        controllerAs: 'projectController',
        activetab: 'project'
      })
      .when('/about', {
        templateUrl: '/app/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'aboutController',
        activetab: 'about'
      })
      .when('/project', {
        templateUrl: '/app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainController',
        activetab: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
