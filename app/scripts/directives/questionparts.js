'use strict';

/**
 * @ngdoc directive
 * @name appPetoolApp.directive:questionParts
 * @description
 * # questionParts
 */
angular.module('appPetoolApp')
  .directive('questionParts', function () {
    return {
      templateUrl: 'directives/questionpart.html',
      restrict: 'E',
      replace: true
    };
  });
