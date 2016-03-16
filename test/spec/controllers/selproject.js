'use strict';

describe('Controller: SelprojectCtrl', function () {

  // load the controller's module
  beforeEach(module('appPetoolApp'));

  var SelprojectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelprojectCtrl = $controller('SelprojectCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SelprojectCtrl.awesomeThings.length).toBe(3);
  });
});
