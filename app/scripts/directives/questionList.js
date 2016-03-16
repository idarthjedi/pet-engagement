'use strict';

/**
 * @ngdoc directive
 * @name appPetoolApp.directive:questionParts
 * @description
 * # questionParts
 */
angular.module('appPetoolApp')
  .directive('questionList', function () {
    return {
      templateUrl: 'directives/questions.html',
      restrict: 'E',
      replace: true,
      scope: {
        questionGroup: "="
      }
    };
  });
