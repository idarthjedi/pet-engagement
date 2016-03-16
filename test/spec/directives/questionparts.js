'use strict';

describe('Directive: questionParts', function () {

  // load the directive's module
  beforeEach(module('appPetoolApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<question-parts></question-parts>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the questionParts directive');
  }));
});
