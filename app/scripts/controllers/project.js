'use strict';

/**
 * @ngdoc function
 * @name appPetoolApp.controller:SelprojectCtrl
 * @description
 * # SelprojectCtrl
 * Controller of the appPetoolApp
 */
angular.module('appPetoolApp')
  .controller('selectProjectCtrl', ['$scope', 'projectSingleton', function ($scope, projectSingleton) {

    //initialize the model for the local selected project list.
    $scope.projectList =
    {
      selectedProject: {
        projID: projectSingleton.chosenProject.id,
        projName: projectSingleton.chosenProject.name
      }
    };

    //watch when the local model for the selected project changes and updated the shared
    //singleton object
    $scope.$watch('projectList.selectedProject', function()
     {
       projectSingleton.chosenProject.id = $scope.projectList.selectedProject.projID;
       projectSingleton.chosenProject.name = $scope.projectList.selectedProject.projName;

     });

    $scope.projects = [
      {
        projID: '1',
        projName: "Project 1"
      },
      {
        projID: '2',
        projName: "Project 2"
      },
      {
        projID: '3',
        projName: "Project 3"
      },
      {
        projID: '4',
        projName: "Project 4"
      },
      {
        projID: '5',
        projName: "Project 5"
      }
    ];
  }]);
