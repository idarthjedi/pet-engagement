'use strict';

/**
 * @ngdoc function
 * @name appPetoolApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appPetoolApp
 */
angular.module('appPetoolApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.questions = [
      {
        typeName: "Disaster Recovery"
      },
      {
        typeName: "Database"
      },
      {
        typeName: "Performance"
      },
      {
        typeName: "Security"
      },
      {
        typeName: "Architecture"
      }
    ];

  }]);
