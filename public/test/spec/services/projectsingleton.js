'use strict';

describe('Service: projectSingleton', function () {

  // load the service's module
  beforeEach(module('appPetoolApp'));

  // instantiate service
  var projectSingleton;
  beforeEach(inject(function (_projectSingleton_) {
    projectSingleton = _projectSingleton_;
  }));

  it('should do something', function () {
    expect(!!projectSingleton).toBe(true);
  });

});
