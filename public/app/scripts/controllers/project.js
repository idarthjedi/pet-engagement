'use strict';

/**
 * @ngdoc function
 * @name appPetoolApp.controller:SelprojectCtrl
 * @description
 * # SelprojectCtrl
 * Controller of the appPetoolApp
 */
angular.module('appPetoolApp')
  .controller('selectProjectCtrl', ['$scope', '$route', 'projectSingleton', function ($scope, $route, projectSingleton) {

    this.$route = $route;

    //initialize the model for the local selected project list.
    this.projectList =
    {
      selectedProject: {
        projID: projectSingleton.chosenProject.id,
        projName: projectSingleton.chosenProject.name
      }
    };

    //watch when the local model for the selected project changes and updated the shared
    //singleton object
    $scope.$watch(angular.bind(this, function(){
      return this.projectList.selectedProject;
    }), function(chosenProject){
      projectSingleton.chosenProject.id = chosenProject.projID;
      projectSingleton.chosenProject.name = chosenProject.projName;
    });

    this.projects = [
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
