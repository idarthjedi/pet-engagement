'use strict';

/**
 * @ngdoc function
 * @name appPetoolApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appPetoolApp
 */
angular.module('appPetoolApp')
  .controller('MainCtrl', ['$scope', 'projectSingleton', function ($scope, projectSingleton) {

    /*will use the following angular library to build the form questions based on JSON schema
     https://github.com/json-schema-form/angular-schema-form/blob/development/docs/index.md
     */

    $scope.projectNameLocal = projectSingleton.chosenProject.name;


    $scope.questionGroup = [
      {
        category: 'Disaster Recovery',
        questions: [
          {
            question: 'What is your name?',
            type: 'text',
            options: [],
            notification: [
              'my@email.com',
              'my.other@email.com'
            ]
          },
          {
            question: 'What is your favorite color?',
            type: 'radio',
            options: ['blue', 'green', 'red'],
            notification: [
              'my@email.com',
              'my.other@email.com'
            ]
          }
        ],

      },
      {
        category: 'Database',
        questions: [{
          question: 'What is your favorite color?',
          type: 'radio',
          options: ['blue', 'green', 'red'],
          notification: [
            'my@email.com',
            'my.other@email.com'
          ]
        },
          {
            question: 'What is your database technology?',
            type: 'option',
            option: ['Oracle', 'MSSQL', 'MongoDB', 'MariaDB', 'MySQL'],
            notification: [
              'my@email.com',
              'my.other@email.com'
            ]
          },
          {
            question: 'What is your favorite color?',
            type: 'radio',
            options: ['blue', 'green', 'red'],
            notification: [
              'my@email.com',
              'my.other@email.com'
            ]
          }
        ]

      },
      {
        category: 'Performance',
        questions: [{
          question: 'How many swallows does it take to carry a coconut from Asia to Europe?',
          type: 'text',
          options: [],
          notification: [
            'my@email.com',
            'my.other@email.com'
          ]
        },{
          question: 'Are you using a standard building block?',
          type: 'option',
          option: ['Yes', 'No'],
          notification: [
            'my@email.com',
            'my.other@email.com'
          ]
        }]

      },
      {
        category: 'Security',
        questions: [{
          question: 'How would you like me to say no?',
          type: 'select',
          options: ['Yell at me', 'Passive Aggressive response'],
          notification: [
            'my@email.com',
            'my.other@email.com'
          ]
        },
          {
            question: 'Are you using a standard building block?',
            type: 'option',
            option: ['Yes', 'No'],
            notification: [
              'my@email.com',
              'my.other@email.com'
            ]
          }
        ]
      },
      {
        category: 'Architecture',
        questions: [{
          question: 'Are you using a standard building block?',
          type: 'option',
          option: ['Yes', 'No'],
          notification: [
            'my@email.com',
            'my.other@email.com'
          ]
        }]

      },
    ];

  }]);
