'use strict';

/**
 * @ngdoc service
 * @name appPetoolApp.projectSingleton
 * @description
 * # projectSingleton
 * Service in the appPetoolApp.
 */
angular.module('appPetoolApp')
  .service('projectSingleton', function () {

    this.chosenProject = {
      id: '',
      name: 'Select a Project'
    };
  });
