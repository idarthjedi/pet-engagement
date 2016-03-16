'use strict';

/**
 * @ngdoc directive
 * @name appPetoolApp.directive:projectList
 * @description
 * # projectList
 */
angular.module('appPetoolApp')
  .directive('projectList', function () {
    return {
      templateUrl: 'directives/projectList.html',
      restrict: 'E',
      replace: true,
      scope:
      {
        projectGroup: "="
      }
    };
  });
