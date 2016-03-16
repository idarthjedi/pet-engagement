'use strict';

/**
 * @ngdoc function
 * @name appPetoolApp.controller:SelprojectCtrl
 * @description
 * # SelprojectCtrl
 * Controller of the appPetoolApp
 */
angular.module('appPetoolApp')
  .controller('selectProjectCtrl', ['$scope', function ($scope) {

    $scope.projects = [
      {
        projName: "Project 1"
      },
      {
        projName: "Project 2"
      },
      {
        projName: "Project 3"
      },
      {
        projName: "Project 4"
      },
      {
        projName: "Project 5"
      }
    ];
  }]);
